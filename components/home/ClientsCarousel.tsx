import Image from "next/image";

const CLIENT_LOGO_FILES = [
  "1.png",
  "2.png",
  "3.jpg",
  "4.jpg",
  "5.png",
  "6.webp",
  "7.png",
  "8.png",
  "9.avif",
  "10.png",
  "11.png",
  "12.jpg",
  "13.png",
  "14.png",
  "15.jpg",
  "16.jpg",
  "17.jpg",

] as const;

const CLIENT_LOGOS = CLIENT_LOGO_FILES.map((file) => ({
  src: `/images/clients-logos/${encodeURIComponent(file)}`,
  alt: "Fiesta client partner",
}));

type LogoBadgeProps = {
  src: string;
  alt: string;
  priority?: boolean;
  hidden?: boolean;
};

function LogoBadge({ src, alt, priority, hidden }: LogoBadgeProps) {
  return (
    <div
      className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(38,39,38,0.08)] sm:h-18 sm:w-18"
      aria-hidden={hidden || undefined}
    >
      <Image
        src={src}
        alt={hidden ? "" : alt}
        width={72}
        height={72}
        className="h-12 w-12 rounded-full object-contain sm:h-18 sm:w-18"
        priority={priority}
      />
    </div>
  );
}

type MarqueeRowProps = {
  logos: readonly { src: string; alt: string }[];
  direction: "rtl" | "ltr";
  priority?: boolean;
};

function MarqueeRow({ logos, direction, priority }: MarqueeRowProps) {
  const trackClass =
    direction === "rtl"
      ? "clients-marquee-track-rtl"
      : "clients-marquee-track-ltr";

  const loop = [...logos, ...logos];

  return (
    <div className="clients-marquee overflow-hidden">
      <div className={`${trackClass} flex w-max items-center gap-4 sm:gap-5`}>
        {loop.map((logo, index) => (
          <LogoBadge
            key={`${logo.src}-${index}`}
            src={logo.src}
            alt={logo.alt}
            priority={priority && index === 0}
            hidden={index >= logos.length}
          />
        ))}
      </div>
    </div>
  );
}

export function ClientsCarousel() {
  const rowOneLogos = CLIENT_LOGOS;
  const rowTwoLogos = [...CLIENT_LOGOS].reverse();

  return (
    <div className="mt-10 flex flex-col gap-4 sm:gap-5">
      <MarqueeRow logos={rowOneLogos} direction="rtl" priority />
      <MarqueeRow logos={rowTwoLogos} direction="ltr" />
    </div>
  );
}
