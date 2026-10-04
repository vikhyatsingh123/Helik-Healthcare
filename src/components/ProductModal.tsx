import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Images
import oestro1 from "../assets/oestofortgold/Oestofort gold_1.png";
import oestro2 from "../assets/oestofortgold/Oestofort gold_2.png";
import oestro3 from "../assets/oestofortgold/Oestofort gold_3.png";
import oestro4 from "../assets/oestofortgold/Oestofort gold_4.png";
import oestro5 from "../assets/oestofortgold/Oestofort gold_5.png";
import oestro6 from "../assets/oestofortgold/Oestofort gold_6.png";
import oestro7 from "../assets/oestofortgold/Oestofort gold_7.png";

import bebact1 from "../assets/bebact45/Bebact-45_1.png";
import bebact2 from "../assets/bebact45/Bebact-45_2.png";
import bebact3 from "../assets/bebact45/Bebact-45_3.png";
import bebact4 from "../assets/bebact45/Bebact-45_4.png";
import bebact5 from "../assets/bebact45/Bebact-45_5.png";
import bebact6 from "../assets/bebact45/Bebact-45_6.png";
import bebact7 from "../assets/bebact45/Bebact-45_7.png";
import bebact8 from "../assets/bebact45/Bebact-45_8.png";
import bebact9 from "../assets/bebact45/Bebact-45_9.png";

import boneheal1 from "../assets/boneheal/Boneheal_1.png";
import boneheal2 from "../assets/boneheal/Boneheal_2.png";
import boneheal3 from "../assets/boneheal/Boneheal_3.png";
import boneheal4 from "../assets/boneheal/Boneheal_4.png";
import boneheal5 from "../assets/boneheal/Boneheal_5.png";
import boneheal6 from "../assets/boneheal/Boneheal_6.png";
import boneheal7 from "../assets/boneheal/Boneheal_7.png";
import boneheal8 from "../assets/boneheal/Boneheal_8.png";

import floramet1 from "../assets/floramet/Floramet_1.png";
import floramet2 from "../assets/floramet/Floramet_2.png";
import floramet3 from "../assets/floramet/Floramet_3.png";
import floramet4 from "../assets/floramet/Floramet_4.png";
import floramet5 from "../assets/floramet/Floramet_5.png";
import floramet6 from "../assets/floramet/Floramet_6.png";
import floramet7 from "../assets/floramet/Floramet_7.png";
import floramet8 from "../assets/floramet/Floramet_8.png";
import floramet9 from "../assets/floramet/Floramet_9.png";

import ghbfort1 from "../assets/ghbfort/GHB_Fort_1.png";
import ghbfort2 from "../assets/ghbfort/GHB_Fort_7.png";
import ghbfort3 from "../assets/ghbfort/GHB_Fort_2.png";
import ghbfort4 from "../assets/ghbfort/GHB_Fort_3.png";
import ghbfort5 from "../assets/ghbfort/GHB_Fort_4.png";
import ghbfort6 from "../assets/ghbfort/GHB_Fort_5.png";
import ghbfort7 from "../assets/ghbfort/GHB_Fort_6.png";

import ghbplus1 from "../assets/ghbplus/GHB_plus-1.png";
import ghbplus2 from "../assets/ghbplus/GHB_plus-2.png";
import ghbplus3 from "../assets/ghbplus/GHB_plus-3.png";
import ghbplus4 from "../assets/ghbplus/GHB_plus-4.png";
import ghbplus5 from "../assets/ghbplus/GHB_plus-5.png";
import ghbplus6 from "../assets/ghbplus/GHB_plus-6.png";
import ghbplus7 from "../assets/ghbplus/GHB_plus-7.png";

import grestgold1 from "../assets/grestgold/Grest gold_1.png";
import grestgold2 from "../assets/grestgold/Grest gold_2.png";
import grestgold3 from "../assets/grestgold/Grest gold_3.png";
import grestgold4 from "../assets/grestgold/Grest gold_4.png";
import grestgold6 from "../assets/grestgold/Grest gold_6.png";
import grestgold7 from "../assets/grestgold/Grest gold_7.png";
import grestgold8 from "../assets/grestgold/Grest gold_8.png";

import immucare1 from "../assets/immucare/immucare_1.png";
import immucare2 from "../assets/immucare/Immucare_2.png";
import immucare3 from "../assets/immucare/Immucare_3.png";
import immucare4 from "../assets/immucare/Immucare_4.png";
import immucare5 from "../assets/immucare/Immucare_5.png";
import immucare6 from "../assets/immucare/Immucare_6.png";
import immucare7 from "../assets/immucare/Immucare_7.png";

import age1 from "../assets/age/Helik_Image_1.png";
import age2 from "../assets/age/Helik_Image_2.png";
import age3 from "../assets/age/Helik_Image_3.png";
import age4 from "../assets/age/Helik_Image_4.png";
import age5 from "../assets/age/Helik_Image_5.png";

import agePlus1 from "../assets/ageplus/Helik_Image_1.png";
import agePlus2 from "../assets/ageplus/Helik_Image_2.png";
import agePlus3 from "../assets/ageplus/Helik_Image_3.png";
import agePlus4 from "../assets/ageplus/Helik_Image_4.png";

import betalik1 from "../assets/betalik/Helik_Image_1.png";
import betalik2 from "../assets/betalik/Helik_Image_2.png";
import betalik3 from "../assets/betalik/Helik_Image_3.png";
import betalik4 from "../assets/betalik/Helik_Image_4.png";
import betalik5 from "../assets/betalik/Helik_Image_5.png";

import betalikPlus1 from "../assets/betalikplus/Helik_1.png";
import betalikPlus2 from "../assets/betalikplus/Helik_2.png";
import betalikPlus3 from "../assets/betalikplus/Helik_3.png";
import betalikPlus4 from "../assets/betalikplus/Helik_4.png";
import betalikPlus5 from "../assets/betalikplus/Helik_5.png";

import clarimet5001 from "../assets/clarimet500/Clarimet-500_1.png";
import clarimet5002 from "../assets/clarimet500/Clarimet-500_2.png";
import clarimet5003 from "../assets/clarimet500/Clarimet-500_3.png";
import clarimet5004 from "../assets/clarimet500/Clarimet-500_4.png";

import coseDSR1 from "../assets/cosedsr/CoseDSR1.png";
import coseDSR2 from "../assets/cosedsr/coseDSR3.png";
import coseDSR3 from "../assets/cosedsr/CoseDSR4.png";
import coseDSR4 from "../assets/cosedsr/CoseDSR5.png";

import fluhet1 from "../assets/fluhet/Fluhet1.png";
import fluhet2 from "../assets/fluhet/Fluhet2.png";
import fluhet3 from "../assets/fluhet/Fluhet3.png";
import fluhet4 from "../assets/fluhet/Fluhet4.png";

import fluhet60_1 from "../assets/fluhet60/Fluhet-60-1.png";
import fluhet60_2 from "../assets/fluhet60/Fluhet-60-2.png";
import fluhet60_3 from "../assets/fluhet60/Fluhet-60-3.png";

import linnt1 from "../assets/linnt/LIN-NT-1.png";
import linnt2 from "../assets/linnt/LIN-NT-2.png";
import linnt3 from "../assets/linnt/LIN-NT-3.png";
import linnt4 from "../assets/linnt/LIN-NT-4.png";
import linnt5 from "../assets/linnt/LIN-NT-5.png";

import lizomet1 from "../assets/lizomet/Lizomet_1.png";
import lizomet2 from "../assets/lizomet/Lizomet_2.png";
import lizomet3 from "../assets/lizomet/Lizomet_3.png";
import lizomet4 from "../assets/lizomet/Lizomet_4.png";

import mtek1 from "../assets/mteklc/M Tek Lc-1.png";
import mtek2 from "../assets/mteklc/M Tek Lc-2.png";
import mtek3 from "../assets/mteklc/M Tek Lc-3.png";
import mtek4 from "../assets/mteklc/M Tek Lc-4.png";
import mtek5 from "../assets/mteklc/M Tek Lc-5.png";

import ometron1 from "../assets/ometron/ometron1.png";
import ometron2 from "../assets/ometron/ometron2.png";
import ometron3 from "../assets/ometron/ometron3.png";
import ometron4 from "../assets/ometron/ometron4.png";
import ometron5 from "../assets/ometron/ometron5.png";
import ometron6 from "../assets/ometron/ometron6.png";
import ometron7 from "../assets/ometron/ometron7.png";

import rebzyls1 from "../assets/rebzyls/Rebzy-ls-1.png";
import rebzyls2 from "../assets/rebzyls/Rebzy-ls-2.png";
import rebzyls3 from "../assets/rebzyls/Rebzy-ls-3.png";
import rebzyls4 from "../assets/rebzyls/Rebzy-ls-4.png";

import restod1 from "../assets/restod/Resto-D_1.png";
import restod2 from "../assets/restod/Resto-D_2.png";
import restod3 from "../assets/restod/Resto-D_3.png";
import restod4 from "../assets/restod/Resto-D_4.png";

import restzyme1 from "../assets/restzyme/Restzyme_1.png";
import restzyme2 from "../assets/restzyme/Restzyme_2.png";
import restzyme3 from "../assets/restzyme/Restzyme_3.png";
import restzyme4 from "../assets/restzyme/Restzyme_4.png";
import restzyme5 from "../assets/restzyme/Restzyme_5.png";

import texagam1 from "../assets/texagam500/Texagam-500-1.png";
import texagam2 from "../assets/texagam500/Texagam-500-2.png";
import texagam3 from "../assets/texagam500/Texagam-500-3.png";
import texagam4 from "../assets/texagam500/Texagam-500-4.png";

import typal1 from "../assets/typal50/Typal-1.png";
import typal2 from "../assets/typal50/Typal-2.png";
import typal3 from "../assets/typal50/Typal-3.png";
import typal4 from "../assets/typal50/Typal-4.png";

import typal1001 from "../assets/typal100/Typal-100-1.png";
import typal1002 from "../assets/typal100/Typal-100-2.png";
import typal1003 from "../assets/typal100/Typal-100-3.png";
import typal1004 from "../assets/typal100/Typal-100-4.png";
import typal1005 from "../assets/typal100/Typal-100-5.png";

import ProductModalRightSide from "./ProductModalRightSide";
import { OestofortGold } from "../data/OestofortGold";
import { Bebact45 } from "../data/Bebact";
import { BoneHeal } from "../data/BoneHeal";
import { Floramet } from "../data/Floramet";
import { GHBFort } from "../data/GhbFort";
import { GHBPlus } from "../data/GhbPlus";
import { GrestGold } from "../data/GrestGold";
import { Immucare } from "../data/Immucare";
import { Age } from "../data/Age";
import { AgePlus } from "../data/AgePlus";
import { Betalik } from "../data/Betalik";
import { BetalikPlus } from "../data/BetalikPlus";
import { Clarimet500 } from "../data/Clarimet";
import { CoseDSR } from "../data/CoseDsr";
import { FluhEt } from "../data/Fluhet";
import { Fluhet60 } from "../data/Fluhet60";
import { LinNT } from "../data/Linnt";
import { Lizomet } from "../data/Lizomet";
import { MTekLC } from "../data/Mteklc";
import { Ometron } from "../data/Ometron";
import { RebzyLS } from "../data/Rebzyls";
import { RestoD } from "../data/Restod";
import { Restzyme } from "../data/Restzym";
import { Texagam500 } from "../data/Texgam";
import { Typal50 } from "../data/Typal";
import { Typal100 } from "../data/Typal100";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: any;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  open: boolean;
}

const productData: Record<string, any> = {
  "oestofort-gold": OestofortGold,
  bebact: Bebact45,
  boneheal: BoneHeal,
  floramet: Floramet,
  ghbfort: GHBFort,
  ghbplus: GHBPlus,
  grestgold: GrestGold,
  immucare: Immucare,
  age: Age,
  ageplus: AgePlus,
  betalik: Betalik,
  betalikplus: BetalikPlus,
  clarimet500: Clarimet500,
  cosedsr: CoseDSR,
  fluhet: FluhEt,
  fluhet60: Fluhet60,
  linnt: LinNT,
  lizomet: Lizomet,
  mtek: MTekLC,
  ometron: Ometron,
  rebzyls: RebzyLS,
  restod: RestoD,
  restzyme: Restzyme,
  texagam: Texagam500,
  typal50: Typal50,
  typal100: Typal100,
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
  ],
  bebact: [
    bebact1,
    bebact2,
    bebact3,
    bebact4,
    bebact5,
    bebact6,
    bebact7,
    bebact8,
    bebact9,
  ],
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
  floramet: [
    floramet1,
    floramet2,
    floramet3,
    floramet4,
    floramet5,
    floramet6,
    floramet7,
    floramet8,
    floramet9,
  ],
  ghbfort: [
    ghbfort1,
    ghbfort2,
    ghbfort3,
    ghbfort4,
    ghbfort5,
    ghbfort6,
    ghbfort7,
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
    grestgold6,
    grestgold7,
    grestgold8,
  ],
  immucare: [
    immucare1,
    immucare2,
    immucare3,
    immucare4,
    immucare5,
    immucare6,
    immucare7,
  ],
  age: [age1, age2, age3, age4, age5],
  ageplus: [agePlus1, agePlus2, agePlus3, agePlus4],
  betalik: [betalik1, betalik2, betalik3, betalik4, betalik5],
  betalikplus: [
    betalikPlus1,
    betalikPlus2,
    betalikPlus3,
    betalikPlus4,
    betalikPlus5,
  ],
  clarimet500: [clarimet5001, clarimet5002, clarimet5003, clarimet5004],
  cosedsr: [coseDSR1, coseDSR2, coseDSR3, coseDSR4],
  fluhet: [fluhet1, fluhet2, fluhet3, fluhet4],
  fluhet60: [fluhet60_1, fluhet60_2, fluhet60_3],
  linnt: [linnt1, linnt2, linnt3, linnt4, linnt5],
  lizomet: [lizomet1, lizomet2, lizomet3, lizomet4],
  mtek: [mtek1, mtek2, mtek3, mtek4, mtek5],
  ometron: [
    ometron1,
    ometron2,
    ometron3,
    ometron4,
    ometron5,
    ometron6,
    ometron7,
  ],
  rebzyls: [rebzyls1, rebzyls2, rebzyls3, rebzyls4],
  restod: [restod1, restod2, restod3, restod4],
  restzyme: [restzyme1, restzyme2, restzyme3, restzyme4, restzyme5],
  texagam: [texagam1, texagam2, texagam3, texagam4],
  typal50: [typal1, typal2, typal3, typal4],
  typal100: [typal1001, typal1002, typal1003, typal1004, typal1005],
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
