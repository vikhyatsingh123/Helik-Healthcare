import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Slide {
  id: number;
  url: string;
  description: string;
  badge: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaPath: string;
  accent: string;
  gradient: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "Who Helik Is",
    title: "Science-Backed Healthcare",
    subtitle: "Healthcare Products Built Around Real-World Needs.",
    description:
      "We identify genuine healthcare needs and develop science-backed pharmaceutical, nutraceutical and healthcare products designed to create meaningful value for patients, consumers and markets.",
    cta: "Explore Our Products",
    ctaPath: "/products/products",
    accent: "#276f4b",
    url: "./nurse.png",
    gradient: "linear-gradient(135deg, #0f2347 0%, #1a3a6b 45%, #2a5298 100%)",
  },
  {
    id: 2,
    badge: "What Makes Helik Different",
    title: "Products With A Purpose",
    subtitle: "We Start With the Need. Not the Product.",
    description:
      "From identifying a market opportunity to developing the right formulation and building a differentiated brand, our focus is on creating products that address real healthcare needs—not simply adding another product to the market.",
    cta: "Our Product Range",
    ctaPath: "/products/export-range",
    accent: "#276f4b",
    url: "./tablets.png",
    gradient: "linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 45%, #1a5276 100%)",
  },
  {
    id: 3,
    badge: "How Helik Takes Products To Market",
    title: "From Development To Market",
    subtitle: "From Product Idea to India and Global Markets.",
    description:
      "We combine product development, trusted manufacturing partnerships and market expertise to take healthcare products from concept to commercialization across India and international markets.",
    cta: "Partner With Us",
    ctaPath: "/contact",
    accent: "#276f4b",
    url: "./dna.PNG",
    gradient: "linear-gradient(135deg, #1a0533 0%, #2d1b69 45%, #1a3a6b 100%)",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
    center: { x: 0 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100vh", minHeight: 600 }}
    >
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={slide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slide.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: slide.accent }}
                  />
                  <span className="text-white/80 text-sm font-medium">
                    {slide.badge}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {slide.title}
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-white/80 mb-4 leading-relaxed max-w-lg"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-white/80 mb-10 leading-relaxed max-w-lg"
                >
                  {slide.description}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to={slide.ctaPath}
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold transition-all hover:shadow-xl hover:-translate-y-1"
                    style={{ background: slide.accent }}
                  >
                    {slide.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/about"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold border-2 border-white/30 hover:bg-white/10 transition-all"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all hover:scale-110 backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === current ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSlider;
