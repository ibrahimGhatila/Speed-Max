export const site = {
  name: "Speedmax",
  legalName: "Speedmax Solutions Sdn Bhd",
  tagline: "One-Stop Technology Solutions",
  foundedYear: 2010,
  phone: "+607 213 2500",
  phoneRaw: "+6072132500",
  fax: "+607 213 2501",
  email: "sales@speedmax.my",
  whatsapp: "60721325000",
  address: {
    line1: "25, Jalan Ekoperniagaan 2/7",
    line2: "Taman Ekoperniagaan",
    city: "81100 Johor Bahru",
    state: "Johor Darul Takzim",
    country: "Malaysia",
  },
  hours: "Mon – Fri · 9:00 AM – 6:00 PM",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products & Services", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const services = [
  {
    slug: "structured-cabling",
    title: "Structured Cabling",
    short:
      "Design, build and manage telecommunications infrastructure for reliable connectivity.",
    description:
      "We design, build and manage telecommunications infrastructure that supports any voice or data application — engineered to meet current requirements and scale with your business.",
    bullets: [
      "Single and multi-site solutions",
      "CAT5e / CAT6 / CAT6A / Fiber optic",
      "Contract work and retained service",
      "Voice and data projects",
    ],
    icon: "Cable",
    image: "structuredCabling",
  },
  {
    slug: "system-integration",
    title: "System Integration",
    short:
      "Ensure every IT component works seamlessly with fast and reliable access.",
    description:
      "We bring servers, networks, storage and software together so your business runs as one system — with the performance, security and uptime your team relies on.",
    bullets: [
      "Server and storage deployment",
      "Network architecture and switching",
      "Microsoft 365 and email migration",
      "IT consultancy and outsourcing",
    ],
    icon: "Server",
    image: "systemIntegration",
  },
  {
    slug: "ip-pbx",
    title: "IP PBX & VoIP",
    short: "Integrated VoIP with IP PBX, ready for any SIP trunk provider.",
    description:
      "Modern IP telephony for offices of every size. We deploy and maintain IP PBX systems integrated with leading VoIP providers, on-prem or cloud.",
    bullets: [
      "Yeastar / Grandstream / 3CX",
      "SIP trunk integration",
      "Mobile and remote extensions",
      "Call recording and reporting",
    ],
    icon: "PhoneCall",
    image: "ipPbx",
  },
  {
    slug: "security-access-control",
    title: "Security & Access Control",
    short:
      "CCTV surveillance and door access systems that protect what matters.",
    description:
      "From IP camera installations to enterprise access control, we deliver security solutions that keep your premises, people and assets safe — and visible from anywhere.",
    bullets: [
      "IP and analog CCTV systems",
      "Card and biometric access",
      "Visitor management",
      "Remote monitoring & alerts",
    ],
    icon: "ShieldCheck",
    image: "security",
  },
  {
    slug: "collaboration",
    title: "Collaboration",
    short:
      "Meeting rooms, video conferencing and workplace tools that bring teams together.",
    description:
      "Equip your teams with the audio, video and collaboration platforms they need to work effectively across rooms, sites and time zones.",
    bullets: [
      "Microsoft Teams Rooms",
      "Conference room AV",
      "Wireless presentation",
      "Unified messaging",
    ],
    icon: "Users",
    image: "collaboration",
  },
  {
    slug: "autocount",
    title: "AutoCount Accounting",
    short:
      "Award-winning AutoCount accounting, POS and e-Invoice solutions.",
    description:
      "As an experienced AutoCount partner, we help SMEs across Malaysia digitise their finance, inventory and point-of-sale operations — including e-Invoice compliance.",
    bullets: [
      "AutoCount Accounting & Inventory",
      "AutoCount POS",
      "Payroll & HRMS",
      "e-Invoice setup & support",
    ],
    icon: "Calculator",
    image: "autocount",
  },
];

export const stats = [
  { value: "14+", label: "Years in Business" },
  { value: "1,200+", label: "Projects Delivered" },
  { value: "500+", label: "Happy Clients" },
  { value: "24/7", label: "Support Available" },
];

export const partners = [
  "AutoCount",
  "Grandstream",
  "Cisco",
  "Ubiquiti",
  "Hikvision",
  "Microsoft",
  "Dell",
  "Yeastar",
];

export const industries = [
  "Small & Medium Enterprises",
  "Retail & F&B",
  "Manufacturing",
  "Education",
  "Healthcare",
  "Property & Construction",
];

export const testimonials = [
  {
    quote:
      "Speedmax handled our entire office relocation cabling, network and phone system. Everything was up and running on day one — exactly as planned.",
    author: "Operations Manager",
    company: "Manufacturing SME, Johor Bahru",
  },
  {
    quote:
      "Their AutoCount implementation cut our monthly closing time in half. The team is responsive and genuinely understands SME workflows.",
    author: "Finance Director",
    company: "Retail Group, Johor",
  },
  {
    quote:
      "We've worked with Speedmax for over five years across three offices. They are our default partner for anything IT.",
    author: "Managing Director",
    company: "Professional Services Firm",
  },
];
