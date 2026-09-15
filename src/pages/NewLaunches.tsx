import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { newLaunched } from "../data/NewLaunched";
import { FadeUp } from "./Home";
import ProductModal from "../components/ProductModal";

const NewLaunches = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    document.title = "Products | Helik Healthcare";
  }, []);

  const handleClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f2347, #1a3a6b 50%, #2a5298)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">New Launches</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              New Launched Products
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              A diversified portfolio spanning critical products, backed by
              decades of research and clinical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-[#f8fafc] min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -50,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {newLaunched.map((cat, i) => (
                <FadeUp key={cat.name} delay={i * 0.08}>
                  <div className="bg-white border border-[#e1edf7] p-4 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full">
                    <div className="flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-[#1a3a6b]">
                        {cat.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 truncate">
                      {cat.description}
                    </p>

                    <button
                      onClick={() => {
                        setSelectedProduct(cat);
                        setOpen(true);
                      }}
                      className="cursor-pointer w-full flex justify-center items-center gap-1 text-sm group-hover:gap-2 transition-all"
                    >
                      <div
                        style={{
                          background:
                            "linear-gradient(135deg, #1a3a6b, #2a5298)",
                        }}
                        className="px-4 py-2 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
                      >
                        View Details
                      </div>
                    </button>
                  </div>
                </FadeUp>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <ProductModal
        onClose={handleClose}
        open={open}
        product={selectedProduct}
      />
    </div>
  );
};

export default NewLaunches;
