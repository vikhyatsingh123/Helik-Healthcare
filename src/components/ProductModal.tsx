import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Images
import oestro1 from "../assets/oestofortgold/Helik_Image_1.png";
import oestro2 from "../assets/oestofortgold/Helik_Image_2.png";
import oestro3 from "../assets/oestofortgold/Helik_Image_3.png";
import oestro4 from "../assets/oestofortgold/Helik_Image_4.png";
import oestro5 from "../assets/oestofortgold/Helik_Image_5.png";
import oestro6 from "../assets/oestofortgold/Helik_Image_6.png";
import oestro7 from "../assets/oestofortgold/information.png";
import oestro8 from "../assets/oestofortgold/information2.png";

import bebact1 from "../assets/bebact45/Helik_Image_1.png";
import bebact2 from "../assets/bebact45/Helik_Image_2.png";
import bebact3 from "../assets/bebact45/Helik_Image_3.png";
import bebact4 from "../assets/bebact45/Helik_Image_4.png";
import bebact5 from "../assets/bebact45/Helik_Image_6.png";
import bebact6 from "../assets/bebact45/Helik_Image_7.png";
import bebact7 from "../assets/bebact45/info3.png";

import boneheal1 from "../assets/boneheal/Helik_Image_1.png";
import boneheal2 from "../assets/boneheal/Helik_Image_2.png";
import boneheal3 from "../assets/boneheal/Helik_Image_3.png";
import boneheal4 from "../assets/boneheal/Helik_Image_4.png";
import boneheal5 from "../assets/boneheal/Helik_Image_5.png";
import boneheal6 from "../assets/boneheal/Helik_Image_6.png";
import boneheal7 from "../assets/boneheal/Helik_Image_7.png";
import boneheal8 from "../assets/boneheal/Helik_Image_8.png";

import floramet1 from "../assets/floramet/Helik_Image_1.png";
import floramet2 from "../assets/floramet/Helik_Image_2.png";
import floramet3 from "../assets/floramet/Helik_Image_3.png";
import floramet4 from "../assets/floramet/Helik_Image_4.png";
import floramet5 from "../assets/floramet/Helik_Image_5.png";
import floramet6 from "../assets/floramet/Helik_Image_6.png";

import ghbfort1 from "../assets/ghbfort/Helik_Image_1.png";
import ghbfort2 from "../assets/ghbfort/Helik_Image_7.png";
import ghbfort3 from "../assets/ghbfort/Helik_Image_2.png";
import ghbfort4 from "../assets/ghbfort/Helik_Image_3.png";
import ghbfort5 from "../assets/ghbfort/Helik_Image_4.png";
import ghbfort6 from "../assets/ghbfort/Helik_Image_5.png";
import ghbfort7 from "../assets/ghbfort/Helik_Image_6.png";
import ghbfort8 from "../assets/ghbfort/info_3.png";

import ghbplus1 from "../assets/ghbplus/Helik_Image_1.png";
import ghbplus2 from "../assets/ghbplus/Helik_Image_2.png";
import ghbplus3 from "../assets/ghbplus/Helik_Image_3.png";
import ghbplus4 from "../assets/ghbplus/Helik_Image_4.png";
import ghbplus5 from "../assets/ghbplus/Helik_Image_5.png";
import ghbplus6 from "../assets/ghbplus/Helik_Image_6.png";
import ghbplus7 from "../assets/ghbplus/side_1.png";

import grestgold1 from "../assets/grestgold/Helik_Image_1.png";
import grestgold2 from "../assets/grestgold/Helik_Image_2.png";
import grestgold3 from "../assets/grestgold/Helik_Image_3.png";
import grestgold4 from "../assets/grestgold/Helik_Image_4.png";
import grestgold5 from "../assets/grestgold/Helik_Image_5.png";
import grestgold6 from "../assets/grestgold/Helik_Image_6.png";
import grestgold7 from "../assets/grestgold/info2.png";

import immucare1 from "../assets/immucare/Helik_Image_1.png";
import immucare2 from "../assets/immucare/Helik_Image_2.png";
import immucare3 from "../assets/immucare/Helik_Image_3.png";
import immucare4 from "../assets/immucare/Helik_Image_4.png";
import immucare5 from "../assets/immucare/Helik_Image_5.png";
import immucare6 from "../assets/immucare/Helik_Image_6.png";
import immucare7 from "../assets/immucare/Helik_Image_7.png";
import immucare8 from "../assets/immucare/Helik_Image_8.png";

import ProductModalRightSide from "./ProductModalRightSide";
import { OestofortGold } from "../data/OestofortGold";
import { Bebact45 } from "../data/Bebact";
import { BoneHeal } from "../data/BoneHeal";
import { Floramet } from "../data/Floramet";
import { GHBFort } from "../data/GhbFort";
import { GHBPlus } from "../data/GhbPlus";
import { GrestGold } from "../data/GrestGold";
import { Immucare } from "../data/Immucare";

interface Product {
  id: number;
  name: string;
  description: string;
  image: any;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  open: boolean;
}

const productData = {
  "oestofort-gold": OestofortGold,
  bebact: Bebact45,
  boneheal: BoneHeal,
  floramet: Floramet,
  ghbfort: GHBFort,
  ghbplus: GHBPlus,
  grestgold: GrestGold,
  immucare: Immucare,
};

const productImages: Record<string, string[]> = {
  "oestofort-gold": [
    oestro1,
    oestro2,
    oestro3,
    oestro4,
    oestro5,
    oestro6,
    oestro7,
    oestro8,
  ],
  bebact: [bebact1, bebact2, bebact3, bebact4, bebact5, bebact6, bebact7],
  boneheal: [
    boneheal1,
    boneheal2,
    boneheal3,
    boneheal4,
    boneheal5,
    boneheal6,
    boneheal7,
    boneheal8,
  ],
  floramet: [floramet1, floramet2, floramet3, floramet4, floramet5, floramet6],
  ghbfort: [
    ghbfort1,
    ghbfort2,
    ghbfort3,
    ghbfort4,
    ghbfort5,
    ghbfort6,
    ghbfort7,
    ghbfort8,
  ],
  ghbplus: [
    ghbplus1,
    ghbplus2,
    ghbplus3,
    ghbplus4,
    ghbplus5,
    ghbplus6,
    ghbplus7,
  ],
  grestgold: [
    grestgold1,
    grestgold2,
    grestgold3,
    grestgold4,
    grestgold5,
    grestgold6,
    grestgold7,
  ],
  immucare: [
    immucare1,
    immucare2,
    immucare3,
    immucare4,
    immucare5,
    immucare6,
    immucare7,
    immucare8,
  ],
};

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  open,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const images = product ? productImages[product.id] || [] : [];

  useEffect(() => {
    if (open && product) {
      setCurrentIdx(0);
      setDirection(1);
    }
  }, [open, product]);

  const goPrevious = () => {
    if (images.length <= 1) return;

    setDirection(-1);

    setCurrentIdx((prev) => {
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const goNext = () => {
    if (images.length <= 1) return;

    setDirection(1);

    setCurrentIdx((prev) => {
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }

      if (event.key === "ArrowRight") {
        goNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, product, images.length]);

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
    }),
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <motion.div
            className="
              relative
              flex
              w-full
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-2xl
              max-md:flex-col
              max-md:max-h-[92vh]
              max-md:overflow-y-auto
            "
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <motion.button
              type="button"
              onClick={onClose}
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-10
                w-10
                cursor-pointer
                items-center
                justify-center
                rounded-full
                bg-white/90
                text-gray-600
                shadow-md
                backdrop-blur
                transition
                hover:bg-white
                hover:text-black
              "
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Close product modal"
            >
              <X size={20} />
            </motion.button>
            <div
              className="
                relative
                flex
                min-h-[600px]
                w-1/2
                items-center
                justify-center
                overflow-hidden
                bg-[#f1f8f4]
                max-md:min-h-[400px]
                max-md:w-full
              "
            >
              {/* Decorative background */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-emerald-50
                  via-white
                  to-green-100
                "
              />

              {/* IMAGE */}
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-16 py-12">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={currentIdx}
                    src={images[currentIdx]}
                    alt={`${product.name} ${currentIdx + 1}`}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 280,
                        damping: 28,
                      },
                      opacity: {
                        duration: 0.2,
                      },
                      scale: {
                        duration: 0.25,
                      },
                    }}
                    className="
                      relative
                      z-10
                      max-h-[520px]
                      max-w-full
                      object-contain
                      drop-shadow-xl
                      max-md:max-h-[340px]
                    "
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              {images.length > 1 && (
                <>
                  <motion.button
                    type="button"
                    onClick={goPrevious}
                    whileHover={{
                      scale: 1.08,
                      x: -2,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="
                      absolute
                      left-5
                      top-1/2
                      z-20
                      flex
                      h-12
                      w-12
                      -translate-y-1/2
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      text-gray-700
                      shadow-lg
                      backdrop-blur-sm
                      transition
                      hover:bg-white
                      max-md:left-3
                    "
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} strokeWidth={2} />
                  </motion.button>

                  {/* NEXT BUTTON */}
                  <motion.button
                    type="button"
                    onClick={goNext}
                    whileHover={{
                      scale: 1.08,
                      x: 2,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="
                      absolute
                      right-5
                      top-1/2
                      z-20
                      flex
                      h-12
                      w-12
                      -translate-y-1/2
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      bg-white/95
                      text-gray-700
                      shadow-lg
                      backdrop-blur-sm
                      transition
                      hover:bg-white
                      max-md:right-3
                    "
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} strokeWidth={2} />
                  </motion.button>
                </>
              )}

              {/* IMAGE COUNTER */}
              {images.length > 1 && (
                <div
                  className="
                    absolute
                    bottom-5
                    left-1/2
                    z-20
                    -translate-x-1/2
                    rounded-full
                    bg-black/60
                    px-4
                    py-1.5
                    text-xs
                    font-medium
                    text-white
                    backdrop-blur-sm
                  "
                >
                  {currentIdx + 1} / {images.length}
                </div>
              )}

              {/* DOTS */}
              {images.length > 1 && images.length <= 10 && (
                <div
                  className="
                    absolute
                    bottom-6
                    left-1/2
                    z-20
                    flex
                    -translate-x-1/2
                    gap-1.5
                    translate-y-8
                  "
                >
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setDirection(index > currentIdx ? 1 : -1);
                        setCurrentIdx(index);
                      }}
                      className={`
                        h-1.5
                        cursor-pointer
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          index === currentIdx
                            ? "w-6 bg-emerald-600"
                            : "w-1.5 bg-gray-400"
                        }
                      `}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="overflow-y-auto max-md:w-full w-1/2">
              <ProductModalRightSide product={productData[product.id]} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
