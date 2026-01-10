"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "motion/react"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const duration = 0.15
const transition = { duration, ease: "easeInOut" as const }
const transitionOverlay = { duration: 0.5, ease: "easeInOut" as const }

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void
    controls: ReturnType<typeof useAnimation>
    cards: string[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    // Slow auto-rotation when carousel is active and not being dragged
    useEffect(() => {
      if (!isCarouselActive) return
      
      let animationId: number
      let lastTime = performance.now()
      
      const animate = (currentTime: number) => {
        const delta = currentTime - lastTime
        lastTime = currentTime
        // Very slow rotation: 3 degrees per second
        rotation.set(rotation.get() + (delta / 1000) * 3)
        animationId = requestAnimationFrame(animate)
      }
      
      animationId = requestAnimationFrame(animate)
      
      return () => cancelAnimationFrame(animationId)
    }, [isCarouselActive, rotation])

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.02)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.02,
              transition: {
                type: "spring",
                stiffness: 60,
                damping: 40,
                mass: 0.2,
              },
            })
          }
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <motion.div
              key={`key-${i}`}
              className="absolute flex h-full origin-center items-center justify-center p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(imgUrl, i)}
            >
              <div className="bg-secondary/80 border border-blue/30 rounded-xl p-3 shadow-lg backdrop-blur-sm">
                <img
                  src={imgUrl}
                  alt={`carousel-item-${i}`}
                  className="pointer-events-none h-32 w-full rounded-lg object-cover sm:h-48 md:h-64 aspect-square"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

interface ThreeDPhotoCarouselProps {
  images: string[]
}

function ThreeDPhotoCarousel({ images }: ThreeDPhotoCarouselProps) {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitionOverlay}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.img
              src={activeImg}
              alt="Active"
              className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={transition}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[300px] w-full overflow-hidden sm:h-[350px] md:h-[400px]">
        <div className="absolute inset-0">
          <Carousel
            handleClick={handleClick}
            controls={controls}
            cards={images}
            isCarouselActive={isCarouselActive}
          />
        </div>
        {/* Mobile swipe hint */}
        <div className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-muted-foreground animate-pulse">
          <span>←</span>
          <span>Swipe to explore</span>
          <span>→</span>
        </div>
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel }
