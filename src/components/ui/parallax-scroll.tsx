"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export const ParallaxScrollSecond = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  // Calculate original indices for each part
  const firstPartIndices = firstPart.map((_, idx) => idx + 1);
  const secondPartIndices = secondPart.map((_, idx) => third + idx + 1);
  const thirdPartIndices = thirdPart.map((_, idx) => 2 * third + idx + 1);

  return (
    <div
      className={cn(
        "h-[40rem] items-start overflow-y-auto w-full scrollbar-hide",
        className
      )}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
        style={{ perspective: "1000px" }}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateYFirst, x: translateXFirst, rotateZ: rotateXFirst }}
              key={"grid-1-" + idx}
              className="relative"
            >
              <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-sm font-bold px-2 py-1 rounded">
                #{firstPartIndices[idx]}
              </div>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={"grid-2-" + idx} className="relative">
              <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-sm font-bold px-2 py-1 rounded">
                #{secondPartIndices[idx]}
              </div>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateYThird, x: translateXThird, rotateZ: rotateXThird }}
              key={"grid-3-" + idx}
              className="relative"
            >
              <div className="absolute top-2 left-2 z-10 bg-black/70 text-white text-sm font-bold px-2 py-1 rounded">
                #{thirdPartIndices[idx]}
              </div>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
