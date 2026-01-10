import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface GsapCardCarouselProps {
  images: string[];
}

export const GsapCardCarousel = ({ images }: GsapCardCarouselProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLUListElement>(null);
  const seamlessLoopRef = useRef<gsap.core.Timeline | null>(null);
  const scrubRef = useRef<gsap.core.Tween | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const iterationRef = useRef(0);

  const spacing = 0.1;
  const snap = gsap.utils.snap(spacing);

  const wrapForward = useCallback((trigger: ScrollTrigger) => {
    iterationRef.current++;
    (trigger as any).wrapping = true;
    trigger.scroll(trigger.start + 1);
  }, []);

  const wrapBackward = useCallback((trigger: ScrollTrigger) => {
    iterationRef.current--;
    if (iterationRef.current < 0) {
      iterationRef.current = 9;
      if (seamlessLoopRef.current) {
        seamlessLoopRef.current.totalTime(
          seamlessLoopRef.current.totalTime() + seamlessLoopRef.current.duration() * 10
        );
      }
      scrubRef.current?.pause();
    }
    (trigger as any).wrapping = true;
    trigger.scroll(trigger.end - 1);
  }, []);

  const buildSeamlessLoop = useCallback((items: Element[], spacing: number) => {
    const overlap = Math.ceil(1 / spacing);
    const startTime = items.length * spacing + 0.5;
    const loopTime = (items.length + overlap) * spacing + 1;
    const rawSequence = gsap.timeline({ paused: true });
    const seamlessLoop = gsap.timeline({
      paused: true,
      repeat: -1,
      onRepeat() {
        if (this._time === this._dur) {
          (this as any)._tTime += this._dur - 0.01;
        }
      },
    });

    const l = items.length + overlap * 2;

    gsap.set(items, { xPercent: 300, opacity: 0, scale: 0 });

    for (let i = 0; i < l; i++) {
      const index = i % items.length;
      const item = items[index];
      const time = i * spacing;

      rawSequence
        .fromTo(
          item,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            zIndex: 100,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.in",
            immediateRender: false,
          },
          time
        )
        .fromTo(
          item,
          { xPercent: 300 },
          { xPercent: -300, duration: 1, ease: "none", immediateRender: false },
          time
        );

      if (i <= items.length) {
        seamlessLoop.add("label" + i, time);
      }
    }

    rawSequence.time(startTime);
    seamlessLoop
      .to(rawSequence, {
        time: loopTime,
        duration: loopTime - startTime,
        ease: "none",
      })
      .fromTo(
        rawSequence,
        { time: overlap * spacing + 1 },
        {
          time: startTime,
          duration: startTime - (overlap * spacing + 1),
          immediateRender: false,
          ease: "none",
        }
      );

    return seamlessLoop;
  }, []);

  const scrubTo = useCallback((totalTime: number) => {
    if (!seamlessLoopRef.current || !triggerRef.current) return;
    
    const progress =
      (totalTime - seamlessLoopRef.current.duration() * iterationRef.current) /
      seamlessLoopRef.current.duration();
    
    if (progress > 1) {
      wrapForward(triggerRef.current);
    } else if (progress < 0) {
      wrapBackward(triggerRef.current);
    } else {
      triggerRef.current.scroll(
        triggerRef.current.start + progress * (triggerRef.current.end - triggerRef.current.start)
      );
    }
  }, [wrapForward, wrapBackward]);

  const handleNext = useCallback(() => {
    if (scrubRef.current) {
      scrubTo((scrubRef.current.vars as any).totalTime + spacing);
    }
  }, [scrubTo, spacing]);

  const handlePrev = useCallback(() => {
    if (scrubRef.current) {
      scrubTo((scrubRef.current.vars as any).totalTime - spacing);
    }
  }, [scrubTo, spacing]);

  useEffect(() => {
    if (!cardsRef.current || !galleryRef.current) return;

    const cards = gsap.utils.toArray<Element>(cardsRef.current.querySelectorAll("li"));
    
    seamlessLoopRef.current = buildSeamlessLoop(cards, spacing);
    
    scrubRef.current = gsap.to(seamlessLoopRef.current, {
      totalTime: 0,
      duration: 0.5,
      ease: "power3",
      paused: true,
    });

    triggerRef.current = ScrollTrigger.create({
      trigger: galleryRef.current,
      start: "top top",
      end: "+=3000",
      pin: true,
      onUpdate(self) {
        if (self.progress === 1 && self.direction > 0 && !(self as any).wrapping) {
          wrapForward(self);
        } else if (self.progress < 1e-5 && self.direction < 0 && !(self as any).wrapping) {
          wrapBackward(self);
        } else {
          if (scrubRef.current && seamlessLoopRef.current) {
            (scrubRef.current.vars as any).totalTime = snap(
              (iterationRef.current + self.progress) * seamlessLoopRef.current.duration()
            );
            scrubRef.current.invalidate().restart();
          }
          (self as any).wrapping = false;
        }
      },
    });

    return () => {
      triggerRef.current?.kill();
      seamlessLoopRef.current?.kill();
      scrubRef.current?.kill();
    };
  }, [images, buildSeamlessLoop, snap, wrapForward, wrapBackward]);

  return (
    <div ref={galleryRef} className="relative w-full h-screen overflow-hidden">
      <ul
        ref={cardsRef}
        className="absolute w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {images.map((image, index) => (
          <li
            key={index}
            className="list-none absolute top-0 left-0 w-full h-full rounded-2xl border-4 border-white/80 overflow-hidden transition-shadow duration-300 hover:shadow-[0_4px_15px_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.3)] hover:z-10"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded font-mono">
              #{index + 1}
            </span>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-44 left-1/2 -translate-x-1/2 flex gap-4">
        <button
          onClick={handlePrev}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-b from-[#575757] to-[#414141] text-[#aaa] rounded uppercase text-xs font-bold tracking-wide transition-all duration-300 hover:from-[#01b2ff] hover:to-[#0090cc] hover:text-white hover:shadow-lg"
          style={{
            textShadow: "#000 1px 1px 5px, #000 -1px -1px 5px",
            boxShadow: "#000 1px 1px 5px, #000 -1px -1px 5px",
          }}
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-b from-[#575757] to-[#414141] text-[#aaa] rounded uppercase text-xs font-bold tracking-wide transition-all duration-300 hover:from-[#01b2ff] hover:to-[#0090cc] hover:text-white hover:shadow-lg"
          style={{
            textShadow: "#000 1px 1px 5px, #000 -1px -1px 5px",
            boxShadow: "#000 1px 1px 5px, #000 -1px -1px 5px",
          }}
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
