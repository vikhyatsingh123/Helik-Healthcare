import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Send,
  CheckCircle,
  Building2,
  Globe,
} from "lucide-react";

const FadeUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const contactInfo = [
  {
    icon: MapPin,
    label: "India Office",
    value:
      "C-502, Hotech Commercial, C-Block, Defence Enclave, Noida Sector-44, Uttar Pradesh 201301, India",
    color: "#1a3a6b",
  },
  {
    icon: MapPin,
    label: "Dubai Office",
    value: "Owaisi Building, 302, Golden Sands, Mankhool, Dubai, UAE",
    color: "#1a3a6b",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9415812557\n+91 9793142303",
    color: "#e8732a",
  },
  {
    icon: Mail,
    label: "Email",
    value: "helikhealthcare@gmail.com",
    color: "#2ecc71",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Fri: 9:00 AM – 6:00 PM IST\nSat: 9:00 AM – 1:00 PM IST",
    color: "#8b5cf6",
  },
];

const offices = [
  {
    city: "Noida, India",
    address:
      "C-502, Hotech Commercial, C-Block, Defence Enclave, Noida Sector-44, Uttar Pradesh 201301, India",
    phone: "+91 9415812557\n+91 9793142303",
    email: "helikhealthcare@gmail.com",
    type: "North India Headquarters",
    color: "#1a3a6b",
  },
  {
    city: "Dubai, UAE",
    address: "Owaisi Building, 302, Golden Sands, Mankhool, Dubai, UAE",
    phone: "+91 9415812557\n+91 9793142303",
    email: "helikhealthcare@gmail.com",
    type: "International Headquarters",
    color: "#2ecc71",
  },
];

const subjects = [
  "General Inquiry",
  "Product Information",
  "Medical/Clinical Query",
  "Partnership / Distribution",
  "Media & Press",
  "Regulatory Affairs",
  "Career Inquiry",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
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
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Contact Us</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              Whether you're a healthcare professional, distributor, or partner
              — we're here to help. Reach out to our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <FadeUp key={info.label} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${info.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: info.color }} />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                      {info.label}
                    </div>
                    <div className="text-sm text-[#1a3a6b] font-medium whitespace-pre-line leading-relaxed">
                      {info.value}
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeUp>
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-4">
                  Send Us a Message
                </span>
                <h2 className="text-3xl font-bold text-[#1a3a6b] mb-6">
                  We'd Love to Hear From You
                </h2>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-[#2ecc71]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1a3a6b] mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-500 text-sm max-w-sm">
                        Thank you for reaching out. Our team will respond within
                        1-2 business days.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            placeholder="Your full name"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            placeholder="you@example.com"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) =>
                              setForm({ ...form, phone: e.target.value })
                            }
                            placeholder="+91 98765 43210"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">
                            Subject *
                          </label>
                          <select
                            required
                            value={form.subject}
                            onChange={(e) =>
                              setForm({ ...form, subject: e.target.value })
                            }
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors bg-white"
                          >
                            <option value="">Select a subject</option>
                            {subjects.map((s) => (
                              <option key={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                          }
                          placeholder="How can we help you? Please provide as much detail as possible..."
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1a3a6b] transition-colors resize-none"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-2 disabled:opacity-70"
                        style={{
                          background:
                            "linear-gradient(135deg, #1a3a6b, #2a5298)",
                        }}
                      >
                        {loading ? (
                          <>
                            <motion.div
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>

            {/* Map placeholder */}
            <FadeUp delay={0.2}>
              <div className="h-full min-h-80">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-4">
                  Our Location
                </span>
                <h2 className="text-3xl font-bold text-[#1a3a6b] mb-6">
                  Find Us Here
                </h2>

                {/* Map placeholder */}
                <div
                  className="rounded-3xl overflow-hidden h-72 relative flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #e8f0fe, #c5d8f5, #dceefa)",
                  }}
                >
                  {/* Fake map grid */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(#c5d8f510 1px, transparent 1px), linear-gradient(90deg, #c5d8f510 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Map pin */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
                      style={{ background: "#e8732a" }}
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="mt-3 bg-white rounded-xl px-4 py-2 shadow-lg text-center">
                      <div className="font-bold text-[#1a3a6b] text-sm">
                        Helik Healthcare HQ
                      </div>
                      <div className="text-xs text-gray-500">
                        Bandra Kurla Complex, Mumbai
                      </div>
                    </div>
                  </div>
                  {/* Styled roads */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/3 left-0 right-0 h-px bg-[#1a3a6b]" />
                    <div className="absolute top-2/3 left-0 right-0 h-px bg-[#1a3a6b]" />
                    <div className="absolute left-1/3 top-0 bottom-0 w-px bg-[#1a3a6b]" />
                    <div className="absolute left-2/3 top-0 bottom-0 w-px bg-[#1a3a6b]" />
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3 p-4 bg-blue-50 rounded-2xl">
                  <MapPin className="w-5 h-5 text-[#1a3a6b] mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-[#1a3a6b] text-sm mb-0.5">
                      Helik Towers
                    </div>
                    <div className="text-gray-600 text-sm">
                      Bandra Kurla Complex, Mumbai 400 051, Maharashtra, India
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-3">
                Our Offices
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a6b] mb-4">
                Office Locations
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Two strategic offices across World's key commercial and research
                hubs.
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <FadeUp key={office.city} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="h-2" style={{ background: office.color }} />
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${office.color}15` }}
                      >
                        <Building2
                          className="w-5 h-5"
                          style={{ color: office.color }}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1a3a6b]">
                          {office.city}
                        </h3>
                        <span
                          className="text-xs"
                          style={{ color: office.color }}
                        >
                          {office.type}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">
                          {office.address}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Phone className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">
                          {office.phone}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Mail className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-sm hover:text-[#1a3a6b] transition-colors"
                          style={{ color: office.color }}
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
