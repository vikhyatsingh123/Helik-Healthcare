import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, type Easing } from "framer-motion";
import {
  Target,
  Eye,
  Globe,
  Lightbulb,
  Heart,
  Shield,
  ChevronRight,
  Building2,
  Globe2,
  Rocket,
  Sprout,
  ArrowDown,
  type LucideProps,
} from "lucide-react";

const journey = [
  {
    year: "1998",
    title: "Gamete Healthcare Established",
    description:
      "Our pharmaceutical industry foundation begins with the establishment of Gamete Healthcare Pvt. Ltd.",
    icon: Building2,
    side: "left",
  },
  {
    year: "2020",
    title: "Helik Healthcare Established",
    description:
      "Helik Healthcare Pvt. Ltd. begins its journey as a healthcare product company, building on the experience and industry understanding developed over the years.",
    icon: Sprout,
    side: "right",
  },
  {
    year: "TODAY",
    title: "Growing Products & Partnerships",
    description:
      "Helik is expanding its healthcare portfolio, manufacturing network and international business through strong product and business partnerships.",
    icon: Globe2,
    side: "left",
  },
  {
    year: "NEXT",
    title: "Building Helik Products & Brands",
    description:
      "Our focus is to develop a stronger portfolio of Helik products and brands for India and international markets.",
    icon: Rocket,
    side: "right",
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as Easing,
    },
  },
};

const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const values = [
  {
    icon: Shield,
    title: "Science",
    desc: "We value sound scientific thinking in the products we bring to market.",
    color: "#1a3a6b",
  },
  {
    icon: Lightbulb,
    title: "Quality",
    desc: "We maintain a strong focus on quality across products, partners and supply.",
    color: "#276f4b",
  },
  {
    icon: Heart,
    title: "Transparency",
    desc: "We believe in clear communication, honest information and visibility throughout our business relationships.",
    color: "#ec4899",
  },
  {
    icon: Globe,
    title: "Reliability",
    desc: "We aim to be a dependable partner through consistent execution and responsive support.",
    color: "#2ecc71",
  },
];

const teamMembers = [
  {
    name: "Sudhir Kumar Pandey",
    title: "Chairman & CEO",
    bio: "A visionary leader with 30+ years in pharma. Sudhir founded Helik in 2020 and has guided its growth into a global organisation after running successfully Gamete Healthcare Pvt. Ltd. for 30+ years.",
    initial: "SK",
    color: "#1a3a6b",
  },
  {
    name: "Tushar Pandey",
    title: "Director",
    bio: "An MBA in International Marketing, Tushar leads Helik Healthcare with a vision for sustainable growth and global expansion. He focuses on strengthening international partnerships, and driving strategic business initiatives.",
    initial: "TP",
    color: "#276f4b",
  },
  {
    name: "Rahul Pandey",
    title: "Executive Director",
    bio: "Worked at Accenture, a leading global technology and consulting company, for over two years as a Software Engineer. Rahul Pandey brings together technology expertise and business acumen to lead marketing, and business operations.",
    initial: "RP",
    color: "#8b5cf6",
  },
  {
    name: "Vikhyat Singh",
    title: "Website & Digital Marketing Head",
    bio: "Leads Helik's digital presence, overseeing website development, online marketing campaigns, and social media strategy to enhance brand visibility and engagement.",
    initial: "VS",
    color: "#2ecc71",
  },
];

const certifications = [
  {
    label: "GMP",
    sublabel: "Approved Facility",
    color: "#2ecc71",
    logo: "/gmp.png",
  },
  {
    label: "WHO",
    sublabel: "World Health Organization",
    color: "#8b5cf6",
    logo: "/who.jpg",
  },

  {
    label: "ISO 9001",
    sublabel: "2015 Certified",
    color: "#276f4b",
    logo: "/iso.png",
  },
  {
    label: "HACCP",
    sublabel: "HACCP Certified",
    color: "#2ecc71",
    logo: "/haccp.png",
  },
];

const countries = [
  {
    id: 1,
    name: "India",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    id: 2,
    name: "Nepal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
  },
  {
    id: 3,
    name: "Bhutan",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
  },
  {
    id: 4,
    name: "Dubai",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
  },
  {
    id: 4,
    name: "Indonesia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
  },
];

function TimelineContent({
  item,
  align = "left",
}: {
  item: {
    year: string;
    title: string;
    description: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    side: string;
  };
  align?: "left" | "right";
}) {
  return (
    <div
      className={`group ${
        align === "right" ? "md:ml-auto md:max-w-md" : "md:max-w-md"
      }`}
    >
      {/* Year - Mobile */}
      <div
        className={`mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#276f4b] md:hidden ${
          align === "right" ? "text-right" : ""
        }`}
      >
        {item.year}
      </div>

      <div
        className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#cfedd0] hover:shadow-xl md:p-7 ${
          align === "right" ? "md:text-right" : ""
        }`}
      >
        <h3 className="mb-3 text-xl font-bold leading-snug text-[#1a3a6b] md:text-2xl">
          {item.title}
        </h3>

        <p className="text-sm leading-7 text-gray-500 md:text-base">
          {item.description}
        </p>
      </div>
    </div>
  );
}

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | Helik Healthcare";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: "url('./background1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* </div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">About Us</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">
              Our Story
            </h1>
            <p className="text-white/80 text-lg">
              Building a Healthcare Company for the Future.
            </p>
            <p className="text-white/80 text-lg mt-4">
              Our foundation is backed by more than 30 years of pharmaceutical
              industry experience through our associated company, Gamete
              Healthcare Pvt. Ltd., established in 1998. This experience has
              given us a practical understanding of healthcare products, market
              requirements, manufacturing and supply networks. Established in
              2020, Helik Healthcare Pvt. Ltd. is a healthcare product company
              focused on building and bringing pharmaceutical, nutraceutical and
              healthcare products to market. We bring together industry
              experience, product knowledge and market understanding to build a
              growing healthcare business across India and international
              markets.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-20 max-w-3xl text-center"
          >
            <span className="mb-3 inline-block rounded-full bg-[#cfedd0] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#276f4b]">
              Our Journey
            </span>

            <h2 className="mb-5 text-4xl font-bold leading-tight text-[#1a3a6b] md:text-5xl">
              Healthcare Ideas to Market
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-7 text-gray-500 md:text-lg">
              Our journey combines decades of pharmaceutical industry experience
              with a new-generation approach to building healthcare products and
              brands.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mx-auto max-w-5xl">
            {/* Main Vertical Line */}
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[#276f4b]/10 via-[#276f4b]/50 to-[#276f4b]/10 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-16 md:space-y-24">
              {journey.map((item) => {
                const Icon = item.icon;
                const isLeft = item.side === "left";

                return (
                  <motion.div
                    key={item.year}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    className="relative grid grid-cols-[40px_1fr] gap-5 md:grid-cols-[1fr_80px_1fr] md:gap-0"
                  >
                    {/* LEFT SIDE */}
                    <div
                      className={`hidden md:block ${
                        isLeft ? "text-right" : ""
                      }`}
                    >
                      {isLeft && <TimelineContent item={item} align="right" />}
                    </div>

                    {/* CENTER */}
                    <div className="relative flex justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.15,
                          duration: 0.4,
                          type: "spring",
                          stiffness: 220,
                        }}
                        className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#276f4b] text-white shadow-[0_0_0_5px_#cfedd0]"
                      >
                        <Icon size={17} strokeWidth={2} />
                      </motion.div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="min-w-0">
                      {/* Mobile: Always show content here */}
                      <div className="md:hidden">
                        <TimelineContent item={item} />
                      </div>

                      {/* Desktop: Right-side items */}
                      {!isLeft && (
                        <div className="hidden md:block">
                          <TimelineContent item={item} />
                        </div>
                      )}
                    </div>

                    {/* YEAR - DESKTOP */}
                    <div
                      className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 md:block ${
                        isLeft ? "left-1/2 ml-12" : "right-1/2 mr-12"
                      }`}
                    >
                      <span className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.2em] text-[#276f4b]">
                        {item.year}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#cfedd0] text-[#276f4b]">
                <ArrowDown size={16} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#276f4b] bg-[#cfedd0] px-4 py-1.5 rounded-full mb-3">
                What We Stand For
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a6b] mb-4">
                Principles That Guide Helik
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Our values shape how we evaluate products, work with partners
                and build long-term relationships
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <FadeUp key={val.title} delay={i * 0.1}>
                  <div className="text-center p-6 h-full rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div
                      className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4"
                      style={{ background: `${val.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: val.color }} />
                    </div>
                    <h3 className="font-bold text-[#1a3a6b] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#276f4b] bg-[#cfedd0] px-4 py-1.5 rounded-full mb-3">
                Purpose & Direction
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a6b]">
                Mission & Vision
              </h2>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeUp delay={0.1}>
              <div
                className="rounded-3xl overflow-hidden h-full"
                style={{
                  background: "linear-gradient(135deg, #1a3a6b, #2a5298)",
                }}
              >
                <div className="p-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-white/80 leading-relaxed text-base">
                    To bring quality healthcare products to market that address
                    genuine healthcare and market needs while creating value for
                    patients, professionals and partners.
                  </p>
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-white/60 text-sm italic">
                      "Excellence in Every Molecule"
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="rounded-3xl overflow-hidden h-full bg-white border border-gray-100 shadow-sm">
                <div className="p-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "#276f4b20" }}
                  >
                    <Eye className="w-7 h-7 text-[#276f4b]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a6b] mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    To build Helik into a recognized healthcare product company
                    with differentiated products and brands serving India and
                    international markets.
                  </p>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex gap-6">
                      <div>
                        <div className="text-2xl font-bold text-[#276f4b]">
                          2030
                        </div>
                        <div className="text-xs text-gray-500">Target Year</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#1a3a6b]">
                          10M+
                        </div>
                        <div className="text-xs text-gray-500">Patients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#2ecc71]">
                          50+
                        </div>
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

      {/* Leadership Team */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#276f4b] bg-[#cfedd0] px-4 py-1.5 rounded-full mb-3">
                Leadership
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a6b] mb-4">
                Meet Our Leaders
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Seasoned professionals driving innovation and growth at Helik
                Healthcare.
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.1}>
                <div className="bg-white h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
                  {/* Avatar */}
                  <div
                    className="h-36 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${member.color}, ${member.color}99)`,
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-2xl">
                      {member.initial}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#1a3a6b]">{member.name}</h3>
                    <div className="text-xs font-medium text-[#276f4b] mb-3">
                      {member.title}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}

      {/* Manufacturing network */}
      <section className="py-20 bg-white flex items-center justify-center">
        <div className="sm:px-6">
          <FadeUp>
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#276f4b] bg-[#cfedd0] px-4 py-1.5 rounded-full mb-3">
                Our Manufacturing Network
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a6b] mb-8">
                Certified Manufacturing Partners
              </h2>
              <FadeUp
                delay={0.1}
                className="flex md:flex-row flex-col items-center gap-6"
              >
                <div className="md:w-1/2 flex items-center text-center px-12 py-6  justify-center transition-all mx-auto border hover:-translate-y-1 hover:shadow-xl border-gray-100 bg-white rounded-2xl overflow-hidden">
                  Our manufacturing network comprises WHO-GMP, ISO, HACCP, US
                  FDA, European regulatory, and Ministry of AYUSH-compliant
                  manufacturing units, selected according to specific product
                  and market requirements.
                  <br />
                  <br />
                  Our partner facilities have extensive experience in
                  manufacturing and exporting healthcare products across SRA
                  markets, the Middle East, Africa, and Asia.
                  <br />
                  <br />
                  Collectively, our manufacturing partners have established
                  export experience across more than 51 countries, with the
                  capabilities to meet diverse regulatory, quality, and market
                  requirements.
                  <br />
                  <br />
                  We identify and select manufacturing partners based on product
                  specifications, target-market regulations, quality standards,
                  production capabilities, and evolving consumer needs.
                </div>
                <div className="grid grid-cols-2 gap-4 md:w-1/2">
                  {certifications.map((cert, i) => (
                    <FadeUp key={cert.label} delay={i * 0.08}>
                      <div
                        className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed hover:shadow-lg transition-all"
                        style={{ borderColor: `${cert.color}40` }}
                      >
                        <img src={cert.logo} alt="logo" width="100px" />
                        <div className="font-bold text-sm text-[#1a3a6b] text-center">
                          {cert.label}
                        </div>
                        <div className="text-xs text-gray-400 text-center mt-1">
                          {cert.sublabel}
                        </div>
                      </div>
                    </FadeUp>
                  ))}
                </div>
              </FadeUp>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-[#f8fafc] flex items-center justify-center">
        <div className="sm:px-6">
          <FadeUp>
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#276f4b] bg-[#cfedd0] px-4 py-1.5 rounded-full mb-3">
                OUR APPROACH
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a6b] mb-8">
                Requirement to Market
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <FadeUp delay={0.1} className="md:w-1/2">
                  <div className="flex items-center text-center p-12  justify-center transition-all mx-auto border hover:-translate-y-1 hover:shadow-xl border-gray-100 bg-white rounded-2xl overflow-hidden">
                    We first understand your requirement, then identify the
                    right manufacturing and regulatory pathway, coordinate
                    product development and execution, and deliver a solution
                    aligned with your product, quality, regulatory, packaging,
                    and market requirements. Identify → Develop → Validate →
                    Manufacture → Deliver
                    <br />
                    <br />
                    This gives our clients end-to-end support, from product
                    identification and development through manufacturing,
                    documentation, packaging, and final delivery.
                  </div>
                </FadeUp>
                <FadeUp delay={0.1} className="md:w-1/2">
                  <div
                    className="h-74 rounded-3xl relative overflow-hidden flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #E6F5ED 0%, #EAF7F4 45%, #DCEEFF 100%)",
                    }}
                  >
                    <img
                      src="./market.png"
                      alt="Market img"
                      style={{ height: "stretch" }}
                    />
                    {/* Animated dots */}
                  </div>
                </FadeUp>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#276f4b] bg-[#cfedd0] px-4 py-1.5 rounded-full mb-3">
                Worldwide
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a6b] mb-4">
                Global Presence
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Helik currently serves 20 international clients across 5
                international markets, with India as the foundation of our
                growing business.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Map placeholder */}
            <FadeUp delay={0.1}>
              <div
                className="h-80 rounded-3xl relative overflow-hidden flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #1a3a6b, #2a5298)",
                }}
              >
                <img
                  src="./map.png"
                  alt="world map"
                  style={{ height: "stretch" }}
                />
                {/* Animated dots */}
              </div>
            </FadeUp>

            {/* Countries list */}
            <FadeUp delay={0.2}>
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {countries.map((country) => (
                    <span
                      key={country.id}
                      className="flex items-center justify-center gap-1.5 bg-white border border-gray-100 shadow-sm px-4 py-4 rounded-2xl text-sm text-gray-700 hover:border-[#1a3a6b] hover:text-[#1a3a6b] transition-colors cursor-default"
                    >
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <b> {country.name}</b>
                    </span>
                  ))}
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
