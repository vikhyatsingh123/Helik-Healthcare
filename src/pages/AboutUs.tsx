import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Award, Globe, Lightbulb, Heart, Shield, ChevronRight } from 'lucide-react';

const FadeUp = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
};

const timelineEvents = [
  { year: '1998', title: 'Helik Founded', desc: 'Established in Mumbai with a focus on affordable generic pharmaceuticals for the Indian market.', side: 'left' },
  { year: '2002', title: 'First Export License', desc: 'Received WHO-GMP certification and began exporting to Southeast Asian markets.', side: 'right' },
  { year: '2006', title: 'R&D Centre Inauguration', desc: 'Opened our state-of-the-art research centre in Hyderabad, housing 200+ scientists.', side: 'left' },
  { year: '2010', title: 'US FDA Approval', desc: 'Received FDA approval for our facility, unlocking access to North American markets.', side: 'right' },
  { year: '2015', title: 'Oncology Portfolio Launch', desc: 'Entered the oncology space with 12 novel formulations targeting solid tumors.', side: 'left' },
  { year: '2019', title: '50 Countries Milestone', desc: 'Our distribution network reached 50 countries across 5 continents.', side: 'right' },
  { year: '2023', title: 'Biosimilars Programme', desc: 'Launched our biosimilars development programme with a pipeline of 8 molecules.', side: 'left' },
  { year: '2026', title: 'AI-Driven R&D', desc: 'Integrated AI-powered drug discovery platform, cutting development timelines by 30%.', side: 'right' },
];

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We uphold the highest ethical standards in every business decision and scientific endeavour.', color: '#1a3a6b' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Relentless pursuit of new ideas and technologies to advance pharmaceutical science.', color: '#e8732a' },
  { icon: Heart, title: 'Patient First', desc: 'Every decision is filtered through one question: how does this benefit the patient?', color: '#ec4899' },
  { icon: Globe, title: 'Accessibility', desc: 'Quality healthcare should be universal — we work to make it affordable and available.', color: '#2ecc71' },
];

const teamMembers = [
  { name: 'Arvind Mehta', title: 'Chairman & CEO', bio: 'A visionary leader with 30+ years in pharma. Arvind co-founded Helik in 1998 and has guided its growth into a global organisation.', initial: 'AM', color: '#1a3a6b' },
  { name: 'Dr. Sunita Rao', title: 'Chief Scientific Officer', bio: 'PhD in Medicinal Chemistry from IIT Mumbai. Dr. Rao leads a team of 400 scientists across our global R&D centres.', initial: 'SR', color: '#e8732a' },
  { name: 'James Whitfield', title: 'Chief Commercial Officer', bio: 'Former VP at GSK, James drives Helik\'s global commercial strategy and partnership ecosystem across 50+ markets.', initial: 'JW', color: '#8b5cf6' },
  { name: 'Priya Shankar', title: 'Chief Financial Officer', bio: 'A CFA charterholder with 20 years in pharmaceutical finance. Priya oversees Helik\'s financial strategy and investor relations.', initial: 'PS', color: '#2ecc71' },
];

const certifications = [
  { label: 'WHO-GMP', sublabel: 'World Health Organization', color: '#1a3a6b' },
  { label: 'ISO 9001', sublabel: '2015 Certified', color: '#e8732a' },
  { label: 'US FDA', sublabel: 'Approved Facility', color: '#2ecc71' },
  { label: 'EU-GMP', sublabel: 'European Standard', color: '#8b5cf6' },
  { label: 'ISO 14001', sublabel: 'Environmental Mgmt', color: '#ec4899' },
  { label: 'ANVISA', sublabel: 'Brazil Certified', color: '#f59e0b' },
];

const countries = [
  'India', 'United States', 'United Kingdom', 'Germany', 'France', 'Brazil',
  'South Africa', 'Nigeria', 'Kenya', 'UAE', 'Saudi Arabia', 'Singapore',
  'Australia', 'Canada', 'Mexico', 'Russia',
];

const AboutUs = () => {
  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f2347, #1a3a6b 50%, #2a5298)' }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">About Us</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">Our Story</h1>
            <p className="text-white/70 text-lg max-w-xl">
              Nearly three decades of dedication to pharmaceutical innovation, quality, and patient welfare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-3">Our Journey</span>
              <h2 className="text-4xl font-bold text-[#1a3a6b]">Milestones That Made Us</h2>
            </div>
          </FadeUp>

          <div className="relative">
            {/* Timeline centre line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a3a6b] to-[#e8732a] -translate-x-1/2 hidden md:block" />
            {/* Mobile line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a3a6b] to-[#e8732a] md:hidden" />

            <div className="space-y-8">
              {timelineEvents.map((event, i) => (
                <FadeUp key={event.year} delay={i * 0.08}>
                  <div className={`relative flex items-center gap-6 md:gap-0 ${event.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    {/* Content */}
                    <div className={`flex-1 ml-14 md:ml-0 ${event.side === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${event.side === 'left' ? 'md:mr-0' : ''}`}>
                        <div
                          className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2"
                          style={{ background: i % 2 === 0 ? '#1a3a6b15' : '#e8732a15', color: i % 2 === 0 ? '#1a3a6b' : '#e8732a' }}
                        >
                          {event.year}
                        </div>
                        <h3 className="font-bold text-[#1a3a6b] mb-1">{event.title}</h3>
                        <p className="text-gray-500 text-sm">{event.desc}</p>
                      </div>
                    </div>

                    {/* Centre dot */}
                    <div className="absolute left-5 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 -translate-x-1/2 z-10"
                      style={{ borderColor: i % 2 === 0 ? '#1a3a6b' : '#e8732a' }}
                    />

                    {/* Empty side for desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-3">Purpose & Direction</span>
              <h2 className="text-4xl font-bold text-[#1a3a6b]">Mission & Vision</h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeUp delay={0.1}>
              <div className="rounded-3xl overflow-hidden h-full" style={{ background: 'linear-gradient(135deg, #1a3a6b, #2a5298)' }}>
                <div className="p-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-white/80 leading-relaxed text-base">
                    To discover, develop, and deliver pharmaceutical innovations that meaningfully improve patient outcomes globally. We are committed to making high-quality healthcare accessible to every individual, regardless of geography or economic status.
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-white/60 text-sm italic">"Advancing Health, Improving Lives — one patient at a time."</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="rounded-3xl overflow-hidden h-full bg-white border border-gray-100 shadow-sm">
                <div className="p-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: '#e8732a20' }}>
                    <Eye className="w-7 h-7 text-[#e8732a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a6b] mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    To be the world's most trusted pharmaceutical company, recognised for our scientific excellence, ethical practices, and transformative impact on global health. By 2030, we aim to serve 100 million patients across 80 countries.
                  </p>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex gap-6">
                      <div>
                        <div className="text-2xl font-bold text-[#e8732a]">2030</div>
                        <div className="text-xs text-gray-500">Target Year</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#1a3a6b]">100M+</div>
                        <div className="text-xs text-gray-500">Patients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#2ecc71]">80+</div>
                        <div className="text-xs text-gray-500">Countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-3">What We Stand For</span>
              <h2 className="text-4xl font-bold text-[#1a3a6b]">Core Values</h2>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <FadeUp key={val.title} delay={i * 0.1}>
                  <div className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ background: `${val.color}15` }}>
                      <Icon className="w-7 h-7" style={{ color: val.color }} />
                    </div>
                    <h3 className="font-bold text-[#1a3a6b] mb-2">{val.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-3">Leadership</span>
              <h2 className="text-4xl font-bold text-[#1a3a6b] mb-4">Meet Our Leaders</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Seasoned professionals driving innovation and growth at Helik Healthcare.</p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
                  {/* Avatar */}
                  <div className="h-36 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}99)` }}>
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-2xl">
                      {member.initial}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#1a3a6b]">{member.name}</h3>
                    <div className="text-xs font-medium text-[#e8732a] mb-3">{member.title}</div>
                    <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-3">Recognition</span>
              <h2 className="text-4xl font-bold text-[#1a3a6b] mb-4">Awards & Certifications</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Our quality and innovation are recognised by leading global regulatory authorities and industry bodies.</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, i) => (
              <FadeUp key={cert.label} delay={i * 0.08}>
                <div className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed hover:shadow-lg transition-all" style={{ borderColor: `${cert.color}40` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ background: `${cert.color}15` }}>
                    <Award className="w-6 h-6" style={{ color: cert.color }} />
                  </div>
                  <div className="font-bold text-sm text-[#1a3a6b] text-center">{cert.label}</div>
                  <div className="text-xs text-gray-400 text-center mt-1">{cert.sublabel}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#e8732a] bg-orange-50 px-4 py-1.5 rounded-full mb-3">Worldwide</span>
              <h2 className="text-4xl font-bold text-[#1a3a6b] mb-4">Global Presence</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Our products reach patients in over 50 countries across 5 continents.</p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Map placeholder */}
            <FadeUp delay={0.1}>
              <div
                className="h-80 rounded-3xl relative overflow-hidden flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1a3a6b, #2a5298)' }}
              >
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />
                {/* Continent shapes using CSS */}
                <div className="relative z-10 text-center">
                  <Globe className="w-20 h-20 text-white/50 mx-auto mb-4" />
                  <p className="text-white/70 font-medium">50+ Countries Worldwide</p>
                  <p className="text-white/40 text-sm mt-1">5 Continents</p>
                </div>
                {/* Animated dots */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-[#e8732a] rounded-full"
                    style={{ left: `${15 + (i * 10) % 75}%`, top: `${20 + (i * 15) % 60}%` }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  />
                ))}
              </div>
            </FadeUp>

            {/* Countries list */}
            <FadeUp delay={0.2}>
              <div>
                <h3 className="font-bold text-[#1a3a6b] mb-4 text-lg">Key Markets</h3>
                <div className="flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <span key={country} className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-sm px-3 py-1.5 rounded-full text-sm text-gray-700 hover:border-[#1a3a6b] hover:text-[#1a3a6b] transition-colors cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e8732a]" />
                      {country}
                    </span>
                  ))}
                  <span className="flex items-center gap-1.5 bg-[#1a3a6b] px-3 py-1.5 rounded-full text-sm text-white font-medium">
                    +34 More
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
