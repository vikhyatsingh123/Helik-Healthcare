import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  Heart, Zap, Brain, Sparkles, Pill, Leaf,
  CheckCircle, Lightbulb, Globe, ArrowRight, Calendar
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import StatsCounter from '../components/StatsCounter';
import TestimonialCard from '../components/TestimonialCard';

// Fade-up animation wrapper
const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const productCategories = [
  { icon: Heart, title: 'Cardiology', desc: 'Comprehensive cardiac care solutions including antihypertensives and anticoagulants.', count: 85, color: '#e8732a' },
  { icon: Zap, title: 'Oncology', desc: 'Advanced cancer therapies targeting solid tumors and haematological malignancies.', count: 62, color: '#8b5cf6' },
  { icon: Brain, title: 'Neurology', desc: 'Treatments for neurological disorders including epilepsy, migraine and Parkinson\'s.', count: 47, color: '#1a3a6b' },
  { icon: Sparkles, title: 'Dermatology', desc: 'Skincare and dermatological solutions for chronic and acute conditions.', count: 38, color: '#ec4899' },
  { icon: Pill, title: 'Antibiotics', desc: 'Broad-spectrum and targeted antibiotics addressing resistant pathogens.', count: 55, color: '#2ecc71' },
  { icon: Leaf, title: 'Vitamins & Supplements', desc: 'Evidence-based nutritional supplements supporting overall wellbeing.', count: 90, color: '#f59e0b' },
];

const whyUsItems = [
  {
    icon: CheckCircle,
    title: 'Uncompromising Quality',
    desc: 'Every product undergoes rigorous QA testing. Our manufacturing facilities are WHO-GMP certified and FDA-inspected.',
    color: '#1a3a6b',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    desc: 'Investing 12% of revenue in R&D, our scientists work at the frontier of pharmaceutical science to create next-generation therapies.',
    color: '#e8732a',
  },
  {
    icon: Globe,
    title: 'Universal Accessibility',
    desc: 'We believe healthcare is a right. Our tiered pricing strategy ensures life-saving medications reach patients in developing markets.',
    color: '#2ecc71',
  },
];

const testimonials = [
  {
    name: 'Dr. Priya Mehta',
    role: 'Cardiologist',
    organization: 'Apollo Hospitals',
    quote: 'Helik\'s cardiac portfolio has been exceptional. The consistency in quality across their antihypertensive range has made them my preferred pharmaceutical partner.',
    rating: 5,
    initial: 'PM',
    color: '#1a3a6b',
  },
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Oncologist',
    organization: 'Tata Memorial Centre',
    quote: 'The oncology line from Helik Healthcare demonstrates genuine commitment to patient outcomes. Their clinical support team is responsive and knowledgeable.',
    rating: 5,
    initial: 'RK',
    color: '#e8732a',
  },
  {
    name: 'Ms. Sarah Williams',
    role: 'Procurement Director',
    organization: 'MedEx Distributors UK',
    quote: 'As a distributor, Helik stands out for reliability. On-time delivery, stringent cold-chain management, and proactive communication make them a true partner.',
    rating: 5,
    initial: 'SW',
    color: '#8b5cf6',
  },
];

const newsItems = [
  {
    date: 'May 15, 2026',
    category: 'Press Release',
    title: 'Helik Healthcare Launches New Oncology Portfolio in European Markets',
    excerpt: 'Helik Healthcare today announced the expansion of its oncology portfolio with three new targeted therapies, now available across 12 European countries.',
  },
  {
    date: 'April 28, 2026',
    category: 'Research',
    title: 'Phase III Trial Results Show 94% Efficacy for HK-Cardio-Plus in Hypertension',
    excerpt: 'Our latest clinical trial demonstrates breakthrough efficacy for the HK-Cardio-Plus formulation in managing resistant hypertension in adult patients.',
  },
  {
    date: 'March 10, 2026',
    category: 'Awards',
    title: 'Helik Named Among Top 10 Pharma Companies in Asia-Pacific',
    excerpt: 'For the third consecutive year, Helik Healthcare has been recognised in the Asia-Pacific Pharmaceutical Excellence Awards for innovation and quality.',
  },
];

const therapeuticAreaCards = [
  { icon: Heart, label: 'Cardiology', color: '#e8732a' },
  { icon: Zap, label: 'Oncology', color: '#8b5cf6' },
  { icon: Brain, label: 'Neurology', color: '#1a3a6b' },
  { icon: Sparkles, label: 'Dermatology', color: '#ec4899' },
  { icon: Pill, label: 'Antibiotics', color: '#2ecc71' },
  { icon: Leaf, label: 'Supplements', color: '#f59e0b' },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSlider />

      {/* Stats */}
      <StatsCounter />

      {/* About Snippet */}
      <section className="pt-20 pb-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <FadeUp>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-4">
                  About Helik Healthcare
                </span>
                <h2 className="text-4xl font-bold text-[#1a3a6b] leading-tight mb-5">
                  A Legacy of Trust, A Future of Innovation
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 1998, Helik Healthcare has grown from a small domestic pharmaceutical company into a globally recognised leader. Our journey is defined by an unwavering commitment to scientific excellence and patient wellbeing.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We operate state-of-the-art manufacturing facilities certified to the highest international standards, ensuring every product that reaches a patient meets our exacting quality benchmarks.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['WHO-GMP Certified', 'ISO 9001:2015', 'FDA Approved', 'EU-GMP Compliant'].map((badge) => (
                    <span key={badge} className="flex items-center gap-1.5 text-sm font-medium text-[#1a3a6b] bg-blue-50 px-3 py-1.5 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5 text-[#2ecc71]" />
                      {badge}
                    </span>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #1a3a6b, #2a5298)' }}
                >
                  Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </FadeUp>
            </div>

            {/* Visual */}
            <FadeUp delay={0.2}>
              <div className="relative h-80 md:h-96">
                {/* Main card */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #1a3a6b, #2a5298)' }}
                >
                  {/* Abstract medical visual */}
                  <div className="absolute inset-0">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full border border-white/10"
                        style={{
                          width: 150 + i * 100,
                          height: 150 + i * 100,
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%,-50%)',
                        }}
                        animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                        transition={{ duration: 15 + i * 5, repeat: Infinity, ease: 'linear' }}
                      />
                    ))}
                    {/* Center icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Heart className="w-10 h-10 text-white" fill="white" fillOpacity={0.3} />
                      </motion.div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white/80 text-sm italic">
                      "Our mission is to provide innovative, affordable healthcare solutions that improve lives across the world."
                    </p>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#2ecc71]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Quality Score</div>
                    <div className="font-bold text-[#1a3a6b]">99.8%</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#e8732a]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Global Reach</div>
                    <div className="font-bold text-[#1a3a6b]">50+ Countries</div>
                  </div>
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-3">
                Our Portfolio
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a6b] mb-4">Therapeutic Categories</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                A diversified portfolio spanning critical therapeutic areas, backed by decades of research and clinical excellence.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <FadeUp key={cat.title} delay={i * 0.1}>
                  <Link to="/products">
                    <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer h-full">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                        style={{ background: `${cat.color}15` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: cat.color }} />
                      </div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-[#1a3a6b]">{cat.title}</h3>
                        <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-full shrink-0">
                          {cat.count} Products
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                      <div className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all" style={{ color: cat.color }}>
                        Explore <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp delay={0.3}>
            <div className="text-center mt-10">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #1a3a6b, #2a5298)' }}
              >
                View All Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Therapeutic Areas Horizontal Scroll */}
      <section className="py-16 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-3">
                Therapeutic Expertise
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a6b]">Areas We Serve</h2>
            </div>
          </FadeUp>

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {therapeuticAreaCards.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="snap-start shrink-0"
                >
                  <Link to="/therapeutic-areas">
                    <div className="w-44 bg-white rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border border-gray-100">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{ background: `${area.color}15` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: area.color }} />
                      </div>
                      <span className="text-sm font-semibold text-[#1a3a6b] text-center">{area.label}</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-3">
                Why Helik
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a6b] mb-4">The Helik Difference</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Three core pillars that have made Helik Healthcare a trusted name in global pharmaceuticals.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUsItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.title} delay={i * 0.15}>
                  <div className="text-center p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                    <div
                      className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      style={{ background: `${item.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: item.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6b] mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-3">
                Testimonials
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a6b] mb-4">Trusted by Healthcare Leaders</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                What doctors, distributors and healthcare professionals say about Helik Healthcare.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} isVisible={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-3">
                  News & Updates
                </span>
                <h2 className="text-4xl font-bold text-[#1a3a6b]">Latest from Helik</h2>
              </div>
              <a href="#" className="text-sm font-semibold text-[#e8732a] flex items-center gap-1 hover:gap-2 transition-all">
                View All News <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((news, i) => (
              <FadeUp key={news.title} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                  {/* Image placeholder */}
                  <div
                    className="h-44 relative overflow-hidden"
                    style={{ background: i === 0 ? 'linear-gradient(135deg, #1a3a6b, #2a5298)' : i === 1 ? 'linear-gradient(135deg, #0d47a1, #1565c0)' : 'linear-gradient(135deg, #4a0e8f, #7b1fa2)' }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      {i === 0 ? <Globe className="w-24 h-24 text-white" /> : i === 1 ? <Zap className="w-24 h-24 text-white" /> : <Heart className="w-24 h-24 text-white" />}
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {news.date}
                    </div>
                    <h3 className="font-bold text-[#1a3a6b] mb-2 leading-snug group-hover:text-[#e8732a] transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{news.excerpt}</p>
                    <div className="flex items-center gap-1 text-sm font-medium text-[#e8732a] group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f2347, #1a3a6b 50%, #2a5298)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-white/5"
              style={{ width: 200 + i * 200, height: 200 + i * 200, left: `${20 + i * 15}%`, top: '50%', transform: 'translateY(-50%)' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeUp>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/60 bg-white/10 px-4 py-1.5 rounded-full mb-4">
              Partnership Opportunities
            </span>
            <h2 className="text-4xl font-bold text-white mb-5 leading-tight">
              Ready to Partner with a Global<br />Pharmaceutical Leader?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're a distributor, healthcare provider or investor — Helik Healthcare offers strategic partnership models tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ background: '#e8732a' }}
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Learn About Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Home;
