"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SLIDE_DURATION_MS = 5000;

export const HERO_SLIDES = [
  {
    src: "/hero/slide-1.png",
    alt: "Fiesta platform dashboard overview",
  },
  {
    src: "/hero/slide-2.png",
    alt: "Fiesta branded online ordering",
  },
  {
    src: "/hero/slide-3.png",
    alt: "Fiesta fleet and delivery management",
  },
] as const;

type ProgressIndicatorsProps = {
  count: number;
  activeIndex: number;
  progress: number;
  onSelect: (index: number) => void;
};

function ProgressIndicators({
  count,
  activeIndex,
  progress,
  onSelect,
}: ProgressIndicatorsProps) {
  return (
    <div
      className="mt-6 flex flex-row gap-2.5"
      role="tablist"
      aria-label="Hero slides"
    >
      {Array.from({ length: count }, (_, index) => {
        const fill =
          index < activeIndex ? 100 : index === activeIndex ? progress : 0;

        return (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => onSelect(index)}
            className="h-1 min-w-0 flex-1 overflow-hidden rounded-full bg-border transition-colors hover:bg-border/70"
          >
            <span
              className="block h-full rounded-full bg-primary"
              style={{ width: `${fill}%` }}
            />
          </button>
        );
      })}
    </div>
  );
}

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    const start = performance.now();
    let frameId = 0;

    const animate = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / SLIDE_DURATION_MS) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
        setProgress(0);
        return;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [activeIndex]);

  return (
    <div className="hero-carousel relative mx-auto w-full max-w-lg lg:max-w-none">
      <div className="absolute -inset-4 rounded-3xl  blur-2xl" />

      <div className="relative">
        <Carousel
          selectedItem={activeIndex}
          onChange={(index) => goToSlide(index)}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          swipeable
          emulateTouch
          infiniteLoop
          autoPlay={false}
          transitionTime={400}
        >
          {HERO_SLIDES.map((slide, index) => (
            <div key={slide.src} className="flex items-center justify-center">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={960}
                height={720}
                className="h-auto w-full object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </Carousel>

        <ProgressIndicators
          count={HERO_SLIDES.length}
          activeIndex={activeIndex}
          progress={progress}
          onSelect={goToSlide}
        />
      </div>
    </div>
  );
}
