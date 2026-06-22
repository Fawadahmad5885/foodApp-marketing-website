"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { businessTouchpoints } from "@/lib/constants/home";

import "swiper/css";
import "swiper/css/effect-fade";

export function BusinessTouchpoints() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-foreground py-20 lg:py-28">
      <Container>
        <SectionHeader
          title="Grow your orders"
          description="Attract customers, increase order value, and drive repeat business — all through your own branded channel."
          className="max-w-4xl text-white"
        />

        <div className="mt-10 flex justify-center overflow-x-auto pb-1">
          <div
            className="inline-flex gap-1 rounded-full bg-white p-1.5"
            role="tablist"
            aria-label="Grow your orders"
          >
            {businessTouchpoints.map((touchpoint, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={touchpoint.label}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2.5 text-sm cursor-pointer font-medium whitespace-nowrap transition-all duration-300 sm:px-5 sm:text-base",
                    isActive
                      ? "bg-foreground text-white shadow-sm shadow-primary"
                      : "text-foreground hover:text-foreground/80",
                  )}
                >
                  {touchpoint.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <Swiper
            modules={[EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={400}
            allowTouchMove
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            className="touchpoints-swiper"
          >
            {businessTouchpoints.map((touchpoint) => (
              <SwiperSlide key={touchpoint.label}>
                <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
                  <div className="relative min-h-64 overflow-hidden  rounded-3xl bg-white lg:col-span-1 lg:min-h-96">
                    <Image
                      src={touchpoint.image}
                      alt={touchpoint.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 33vw "
                    />
                  </div>

                  <div className="flex flex-col min-h-64  rounded-3xl bg-white p-8 lg:col-span-2 lg:min-h-96 lg:p-10">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{touchpoint.label}</h3>
                    <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                      {touchpoint.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
