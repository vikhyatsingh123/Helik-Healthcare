import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Search, X, ChevronRight, Heart, Zap, Brain, Sparkles, Pill, Leaf, Package, ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  dosageForm: string;
  strength: string;
  indication: string;
  description: string;
  details: string;
  icon: React.ElementType;
  color: string;
}

const products: Product[] = [
  { id: 1, name: 'CardioGuard XR', category: 'Cardiology', dosageForm: 'Extended-Release Tablet', strength: '25mg / 50mg', indication: 'Hypertension', description: 'Sustained-release metoprolol succinate for once-daily blood pressure control.', details: 'CardioGuard XR delivers metoprolol succinate in an extended-release matrix. Indicated for management of hypertension, angina pectoris, and stable heart failure. Reduces morning BP surge and maintains 24-hour cardiac protection.', icon: Heart, color: '#e8732a' },
  { id: 2, name: 'CardioVasc 5', category: 'Cardiology', dosageForm: 'Tablet', strength: '5mg / 10mg', indication: 'Angina / Hypertension', description: 'Amlodipine-based CCB for long-acting vascular protection.', details: 'A third-generation dihydropyridine calcium channel blocker with a long plasma half-life. Suitable for once-daily dosing in hypertension and chronic stable angina.', icon: Heart, color: '#e8732a' },
  { id: 3, name: 'NeuroStab 100', category: 'Neurology', dosageForm: 'Capsule', strength: '100mg / 300mg', indication: 'Epilepsy', description: 'Gabapentin formulation for seizure management and neuropathic pain.', details: 'NeuroStab 100 provides effective seizure control as adjunctive therapy in partial onset seizures. Also approved for postherpetic neuralgia and diabetic neuropathy pain.', icon: Brain, color: '#1a3a6b' },
  { id: 4, name: 'NeuroPatch TR', category: 'Neurology', dosageForm: 'Transdermal Patch', strength: '4.6mg/24h / 9.5mg/24h', indication: 'Parkinson\'s / Dementia', description: 'Rivastigmine patch for continuous treatment of Alzheimer\'s and Parkinson\'s dementia.', details: 'Transdermal delivery provides stable plasma concentrations with improved tolerability compared to oral formulations. Indicated for mild to moderately severe dementia.', icon: Brain, color: '#1a3a6b' },
  { id: 5, name: 'OncoFlex 200', category: 'Oncology', dosageForm: 'Film-Coated Tablet', strength: '200mg / 400mg', indication: 'NSCLC, CML', description: 'Tyrosine kinase inhibitor for targeted oncology treatment.', details: 'OncoFlex 200 is a selective BCR-ABL kinase inhibitor with activity against multiple resistant mutations. Indicated for Philadelphia chromosome-positive chronic myeloid leukaemia.', icon: Zap, color: '#8b5cf6' },
  { id: 6, name: 'OncoMune IV', category: 'Oncology', dosageForm: 'Injection (IV)', strength: '100mg/10mL vial', indication: 'Solid Tumors', description: 'Monoclonal antibody for immune-checkpoint inhibition in advanced cancers.', details: 'An anti-PD-1 monoclonal antibody that restores T-cell activity against tumor cells. Approved for metastatic melanoma, NSCLC, and gastric cancer with PD-L1 expression.', icon: Zap, color: '#8b5cf6' },
  { id: 7, name: 'DermaFix Cream', category: 'Dermatology', dosageForm: 'Cream', strength: '0.1% / 0.5%', indication: 'Eczema / Psoriasis', description: 'Mometasone furoate cream for moderate-severe inflammatory dermatoses.', details: 'A potent corticosteroid cream with anti-inflammatory, antipruritic, and vasoconstrictive properties. Effective for eczema, psoriasis, and allergic contact dermatitis.', icon: Sparkles, color: '#ec4899' },
  { id: 8, name: 'AcneClr Gel', category: 'Dermatology', dosageForm: 'Gel', strength: '2.5% / 5% / 10%', indication: 'Acne Vulgaris', description: 'Benzoyl peroxide gel for topical treatment of acne vulgaris.', details: 'AcneClr Gel provides bactericidal activity against Propionibacterium acnes while promoting keratolytic effects to clear follicular blockage. Suitable for mild-moderate acne.', icon: Sparkles, color: '#ec4899' },
  { id: 9, name: 'BioAmox 500', category: 'Antibiotics', dosageForm: 'Capsule', strength: '250mg / 500mg', indication: 'Bacterial Infections', description: 'Amoxicillin capsules for a broad range of bacterial infections.', details: 'A semisynthetic penicillin antibiotic with activity against gram-positive and gram-negative bacteria. Indicated for respiratory tract, urinary tract, and skin infections.', icon: Pill, color: '#2ecc71' },
  { id: 10, name: 'CiproHeal 500', category: 'Antibiotics', dosageForm: 'Tablet', strength: '250mg / 500mg / 750mg', indication: 'UTI / Respiratory', description: 'Ciprofloxacin broad-spectrum fluoroquinolone antibiotic.', details: 'A second-generation fluoroquinolone with excellent tissue penetration. Active against aerobic gram-negative and gram-positive organisms. Suitable for complex UTIs, respiratory infections.', icon: Pill, color: '#2ecc71' },
  { id: 11, name: 'VitaD3 Forte', category: 'Vitamins & Supplements', dosageForm: 'Soft Gelatin Capsule', strength: '1000 IU / 2000 IU / 5000 IU', indication: 'Vitamin D Deficiency', description: 'High-potency cholecalciferol supplement with enhanced bioavailability.', details: 'VitaD3 Forte uses nano-emulsification technology for superior absorption. Indicated for vitamin D deficiency, osteoporosis prevention, and immune support.', icon: Leaf, color: '#f59e0b' },
  { id: 12, name: 'OmegaMax 3', category: 'Vitamins & Supplements', dosageForm: 'Softgel', strength: '1000mg (omega-3)', indication: 'Cardiovascular Health', description: 'High-EPA/DHA omega-3 fish oil for cardiovascular and cognitive health.', details: 'Molecularly distilled to remove heavy metals and PCBs. Contains 60% omega-3 fatty acids (EPA 360mg + DHA 240mg per softgel). Supports heart health, brain function, and inflammation control.', icon: Leaf, color: '#f59e0b' },
];

const categories = ['All', 'Cardiology', 'Oncology', 'Neurology', 'Dermatology', 'Antibiotics', 'Vitamins & Supplements'];

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
};

const Products = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()) || p.indication.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f2347, #1a3a6b 50%, #2a5298)' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Products</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">Our Products</h1>
            <p className="text-white/70 text-lg max-w-xl mb-8">Explore our comprehensive pharmaceutical portfolio spanning critical therapeutic areas.</p>

            {/* Search */}
            <div className="relative max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search products by name, category, or indication..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full pl-12 pr-5 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-white/40 backdrop-blur-sm"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'text-white shadow-md'
                    : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                }`}
                style={activeCategory === cat ? { background: 'linear-gradient(135deg, #1a3a6b, #2a5298)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500 text-sm">
              Showing <span className="font-semibold text-[#1a3a6b]">{filtered.length}</span> products
              {activeCategory !== 'All' && <span> in <span className="font-semibold text-[#1a3a6b]">{activeCategory}</span></span>}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No products found. Try a different search term.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((product, i) => {
                const Icon = product.icon;
                return (
                  <FadeUp key={product.id} delay={i * 0.05}>
                    <div
                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                      onClick={() => setSelectedProduct(product)}
                    >
                      {/* Card header */}
                      <div className="p-5 pb-0">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${product.color}15` }}>
                            <Icon className="w-5 h-5" style={{ color: product.color }} />
                          </div>
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: `${product.color}15`, color: product.color }}>
                            {product.dosageForm}
                          </span>
                        </div>
                        <h3 className="font-bold text-[#1a3a6b] mb-1 group-hover:text-[#e8732a] transition-colors">{product.name}</h3>
                        <div className="text-xs text-gray-400 mb-1">{product.category} • {product.strength}</div>
                        <div className="text-xs font-medium text-gray-500 mb-3">{product.indication}</div>
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{product.description}</p>
                      </div>
                      <div className="p-5 pt-3">
                        <div className="flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all" style={{ color: product.color }}>
                          View Details <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="p-6" style={{ background: `linear-gradient(135deg, ${selectedProduct.color}, ${selectedProduct.color}99)` }}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <selectedProduct.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{selectedProduct.name}</h2>
                      <p className="text-white/70 text-sm">{selectedProduct.category}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedProduct(null)} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal body */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'Dosage Form', value: selectedProduct.dosageForm },
                    { label: 'Strength', value: selectedProduct.strength },
                    { label: 'Indication', value: selectedProduct.indication },
                    { label: 'Category', value: selectedProduct.category },
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 rounded-xl p-3">
                      <div className="text-xs text-gray-400 mb-0.5">{item.label}</div>
                      <div className="text-sm font-semibold text-[#1a3a6b]">{item.value}</div>
                    </div>
                  ))}
                </div>
                <h3 className="font-semibold text-[#1a3a6b] mb-2">Description</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{selectedProduct.details}</p>
                <div className="flex gap-3">
                  <button
                    className="flex-1 py-3 rounded-xl text-white font-medium text-sm transition-all hover:opacity-90"
                    style={{ background: selectedProduct.color }}
                  >
                    Request Samples
                  </button>
                  <Link
                    to="/contact"
                    className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium text-sm text-center hover:bg-gray-50 transition-colors"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;
