import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";

// ── Images — swap for your actual paths ─────────────────────────────────────
import img1 from "/home/ai1.jpeg";
import img2 from "/home/ai2.jpg";
import img4 from "/home/ai3.jpg";
import img3 from "/home/ai4.jpeg";
import img5 from "/home/ai5.jpeg";

const SLIDES = [
  { src: img1, heading: "Explainable and Responsible AI", accent: "in Business Analytics" },
  { src: img2, heading: "Explainable and Responsible AI", accent: "in Business Analytics" },
  { src: img3, heading: "Explainable and Responsible AI", accent: "in Business Analytics" },
  { src: img4, heading: "Explainable and Responsible AI", accent: "in Business Analytics" },
  { src: img5, heading: "Explainable and Responsible AI", accent: "in Business Analytics" },
];

const textVariant = {
  hidden: { opacity: 0, y: 26, filter: "blur(4px)" },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
  exit: {
    opacity: 0,
    y: -14,
    filter: "blur(3px)",
    transition: { duration: 0.3 },
  },
};

const lineVariant = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
  },
  exit: { scaleX: 0, originX: 1, transition: { duration: 0.25 } },
};

const imageVariant = {
  hidden: { scale: 1.07, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: { scale: 0.97, opacity: 0, transition: { duration: 0.45 } },
};

function SlideContent({ slide, index, total }) {
  return (
    <AnimatePresence mode="wait">
      {/* Fixed: Restructured padding constraints for ultra-clean mobile views */}
      <div
        key={index}
        className="absolute inset-0 z-20 flex flex-col justify-end pointer-events-none"
      >
        <div className="px-6 pb-12 sm:px-10 sm:pb-14 md:px-14 md:pb-16 max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-5xl">
          {/* Fixed: Dynamic fluid typographic scale to prevent nav-arrow collisions */}
          <motion.h2
            custom={0.1}
            variants={textVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="font-['Playfair_Display'] font-normal text-white leading-[1.1] text-3xl md:text-5xl lg:text-7xl tracking-tight"
          >
            {slide.heading}{" "}
            <em className="italic text-amber-200/85 block sm:inline">{slide.accent}</em>
          </motion.h2>

          <motion.div
            variants={lineVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-px bg-white/20 w-16 sm:w-24 my-3 sm:my-5"
          />
        </div>

        {/* Bottom-right slide counter */}
        <motion.div
          custom={0.08}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 text-right hidden sm:block select-none"
        >
          <span className="font-['Playfair_Display'] text-[3rem] md:text-[4.5rem] leading-none font-normal text-white/[0.07]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-white/20 font-['DM_Sans'] mt-0.5">
            of {String(total).padStart(2, "0")}
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function NavBtn({ onClick, dir }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
      whileTap={{ scale: 0.95 }}
      // Fixed: Micro-scaled arrow boundaries down for tighter screen sizes
      className={`absolute top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border border-white/15 bg-white/[0.06] backdrop-blur-sm text-white/65 hover:text-white hover:border-white/30 transition-all duration-300 ${
        dir === "prev" ? "left-3 sm:left-6 md:left-8" : "right-3 sm:right-6 md:right-8"
      }`}
      aria-label={dir === "prev" ? "Previous slide" : "Next slide"}
    >
      <svg
        className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current fill-none"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        boxView="0 0 24 24"
        viewBox="0 0 24 24"
      >
        {dir === "prev" ? <path d="M19 12H5M12 19l-7-7 7-7" /> : <path d="M5 12h14M12 5l7 7-7 7" />}
      </svg>
    </motion.button>
  );
}

function Dots({ total, active, onSelect }) {
  return (
    <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-[6px] sm:gap-[7px]">
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onSelect(i)}
          animate={{
            width: i === active ? (window.innerWidth < 640 ? 20 : 28) : 6,
            opacity: i === active ? 1 : 0.28,
          }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="h-[4px] sm:h-[5px] rounded-full bg-white cursor-pointer outline-none"
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}

function ProgressBar({ index, total }) {
  return (
    <div className="absolute top-0 left-0 right-0 h-px bg-white/10 z-30">
      <motion.div
        className="h-full bg-amber-200/55"
        animate={{ width: `${((index + 1) / total) * 100}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}

function Thumbs({ slides, active, onSelect }) {
  return (
    <div className="absolute top-6 right-8 z-30 hidden lg:flex gap-2">
      {slides.map((s, i) => (
        <motion.button
          key={i}
          onClick={() => onSelect(i)}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.94 }}
          animate={{
            opacity: i === active ? 1 : 0.32,
            boxShadow:
              i === active ? "0 0 0 1.5px rgba(255,255,255,0.55)" : "0 0 0 1.5px transparent",
          }}
          transition={{ duration: 0.3 }}
          className="w-12 h-8 rounded-sm overflow-hidden"
          aria-label={`Slide ${i + 1}`}
        >
          <img
            src={s.src}
            alt=""
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.button>
      ))}
    </div>
  );
}

export default function Banner() {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 38 }, [
    autoplay.current,
  ]);

  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section
      // Fixed: Removed inline style clamp object, swapped for multi-stage responsive classes
      className="relative w-full overflow-hidden bg-neutral-950 h-[45vh] sm:h-[60vh] lg:h-[74vh] min-h-[340px] max-h-[840px] transition-all duration-300"
      aria-label="Image banner"
    >
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full touch-pan-y">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className="relative flex-[0_0_100%] h-full overflow-hidden"
            >
              <AnimatePresence>
                {i === selected && (
                  <motion.img
                    key={`active-${i}`}
                    src={slide.src}
                    alt={`Slide ${i + 1}`}
                    variants={imageVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    draggable={false}
                  />
                )}
              </AnimatePresence>

              {i !== selected && (
                <img
                  src={slide.src}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  draggable={false}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-[0.035]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />

              {i === selected && (
                <SlideContent
                  slide={slide}
                  index={selected}
                  total={SLIDES.length}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <ProgressBar index={selected} total={SLIDES.length} />
      <Thumbs slides={SLIDES} active={selected} onSelect={scrollTo} />
      <NavBtn onClick={scrollPrev} dir="prev" />
      <NavBtn onClick={scrollNext} dir="next" />
      <Dots total={snaps.length} active={selected} onSelect={scrollTo} />
    </section>
  );
}