export const site = {
  name: "Speedmax",
  legalName: "Speedmax Solutions Sdn Bhd",
  ssm: "972917-U",
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
    state: "Johor",
    country: "Malaysia",
  },
  hours: "Mon — Fri  ·  09:00–18:00 MYT",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    slug: "structured-cabling",
    number: "01",
    title: "Structured Cabling",
    short: "Cat6A and fibre, designed and certified to standard.",
    description:
      "Design, installation and certification of structured cabling for offices, warehouses and data centres — engineered to meet today's demands and tomorrow's bandwidth.",
    specs: [
      "Cat5e · Cat6 · Cat6A · OS2 fibre",
      "Permanent-link & channel certification",
      "Single & multi-site rollouts",
      "Containment & cable management",
    ],
    image: "structuredCabling",
  },
  {
    slug: "system-integration",
    number: "02",
    title: "System Integration",
    short: "Servers, switching and storage, working as one.",
    description:
      "From bare-metal racking to Microsoft 365 migration, we bring hardware, networks and software into a single, supportable stack.",
    specs: [
      "Server, storage & virtualisation",
      "L2/L3 networking & Wi-Fi 6",
      "Microsoft 365 & email migration",
      "Documentation & handover",
    ],
    image: "systemIntegration",
  },
  {
    slug: "ip-telephony",
    number: "03",
    title: "IP Telephony",
    short: "Modern PBX and SIP — on-prem or cloud.",
    description:
      "IP telephony that scales with your team. Mobile extensions, call recording, IVR and reporting, integrated cleanly with your existing carrier.",
    specs: [
      "Yeastar · Grandstream · 3CX",
      "SIP trunk integration",
      "Mobile & remote extensions",
      "Call recording & analytics",
    ],
    image: "ipPbx",
  },
  {
    slug: "security",
    number: "04",
    title: "Security & Access",
    short: "IP surveillance and access control, monitored 24/7.",
    description:
      "Designed-in security, not bolted-on. IP cameras, access-controlled doors and visitor management — auditable and remotely supervised.",
    specs: [
      "Hikvision · Dahua · Uniview",
      "Card & biometric access",
      "Visitor management",
      "Remote monitoring & alerts",
    ],
    image: "security",
  },
  {
    slug: "collaboration",
    number: "05",
    title: "Collaboration Rooms",
    short: "Meeting rooms ready for Teams, Zoom and Meet.",
    description:
      "Conference-room AV that just works — cameras, mics, displays and wireless presentation engineered to remove the awkward start of every meeting.",
    specs: [
      "Microsoft Teams Rooms",
      "Conference-room audio & video",
      "Wireless presentation",
      "Single-cable connectivity",
    ],
    image: "collaboration",
  },
  {
    slug: "autocount",
    number: "06",
    title: "AutoCount Suite",
    short: "Accounting, POS and e-Invoice — certified partner.",
    description:
      "We implement and support AutoCount Accounting, Inventory, POS, Payroll and e-Invoice for Malaysian SMEs — from licensing to month-end training.",
    specs: [
      "Accounting & Inventory",
      "POS & Payroll",
      "e-Invoice compliance",
      "Training & ongoing support",
    ],
    image: "autocount",
  },
];

export const stats = [
  { value: "14", suffix: "yrs", label: "In business" },
  { value: "1,200", suffix: "+", label: "Projects delivered" },
  { value: "99.9", suffix: "%", label: "Uptime SLA" },
  { value: "24", suffix: "h", label: "Response window" },
];

export const partners = [
  "AutoCount",
  "Grandstream",
  "Yeastar",
  "Cisco",
  "Ubiquiti",
  "Hikvision",
  "Microsoft",
  "Dell",
  "Fortinet",
  "HPE Aruba",
];

export const industries = [
  { slug: "manufacturing", title: "Manufacturing", body: "Plant networks and OT cabling, designed for uptime.", image: "indManufacturing" },
  { slug: "retail", title: "Retail & F&B", body: "POS, Wi-Fi and CCTV across multi-outlet footprints.", image: "indRetail" },
  { slug: "healthcare", title: "Healthcare", body: "Clinic and hospital networks with strict reliability needs.", image: "indHealthcare" },
  { slug: "education", title: "Education", body: "Campus Wi-Fi, classroom AV and CCTV.", image: "indEducation" },
  { slug: "hospitality", title: "Hospitality", box: true, body: "Hotel guest networks, IPTV and access control.", image: "indHospitality" },
  { slug: "professional", title: "Professional Services", body: "Office networks, telephony and Microsoft 365.", image: "indProfessional" },
];

export const approach = [
  {
    number: "01",
    title: "Survey",
    body: "A site visit and brief — on-site or virtual. We leave with measurements, photographs and a clear scope of work.",
  },
  {
    number: "02",
    title: "Design",
    body: "A fixed-price proposal with bill of materials and floor plan. You see exactly what is being installed, where, by when, and at what cost.",
  },
  {
    number: "03",
    title: "Deliver",
    body: "Installation by our own engineers, certified to standard, documented in a handover pack, and supported on a response SLA you choose.",
  },
];

export const featured = {
  client: "Confidential manufacturer",
  scope: "Datacenter buildout · Cat6A · 480 drops",
  location: "Senai, Johor",
  year: "2024",
  quote:
    "Speedmax delivered a clean, certified install across three floors with zero downtime on cutover. Documentation was the best we have ever received from a contractor.",
  attribution: "IT Director, manufacturing client",
  image: "featuredProject",
};

export const coverage = [
  { region: "Johor", note: "HQ + field engineering" },
  { region: "Klang Valley", note: "Project teams" },
  { region: "Penang", note: "Partner network" },
  { region: "East Coast", note: "On request" },
  { region: "Singapore", note: "Cross-border projects" },
];
