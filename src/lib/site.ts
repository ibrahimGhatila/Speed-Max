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
  { label: "Index", href: "/" },
  { label: "Capabilities", href: "/products" },
  { label: "Studio", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    slug: "structured-cabling",
    number: "01",
    title: "Structured Cabling",
    short: "Cat6A and fibre, from blueprint to certified channel test.",
    description:
      "We design, install and certify low-voltage cabling infrastructure for offices, warehouses and data centres — engineered to today's demands and tomorrow's bandwidth.",
    specs: [
      "Cat5e / Cat6 / Cat6A / OS2 fibre",
      "Permanent-link & channel certification",
      "Single-site and multi-site rollouts",
      "Containment, pathway & dressing",
    ],
    image: "structuredCabling",
  },
  {
    slug: "system-integration",
    number: "02",
    title: "System Integration",
    short: "Servers, switching and storage, working as one system.",
    description:
      "From bare-metal racking to Microsoft 365 migration, we bring the hardware, networks and software your team relies on into a single, supportable stack.",
    specs: [
      "Server, storage & virtualisation",
      "L2/L3 networking, VLANs, Wi-Fi 6",
      "Microsoft 365 & email migration",
      "Documentation & handover",
    ],
    image: "systemIntegration",
  },
  {
    slug: "ip-pbx",
    number: "03",
    title: "IP Telephony",
    short: "Modern PBX with SIP trunks — on-prem or cloud.",
    description:
      "IP telephony platforms that scale with your team. Mobile extensions, call recording, IVR and reporting, integrated cleanly with your existing carrier.",
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
      "Designed-in security, not bolted-on. IP cameras, access-controlled doors and visitor management — auditable, remote, and ready for incident response.",
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
    short: "Meeting rooms ready for Teams, Zoom and Google Meet.",
    description:
      "Conference-room AV that just works. Cameras, mics, displays and wireless presentation engineered to remove the awkward start of every meeting.",
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
    short: "Accounting, POS and e-Invoice — certified AutoCount partner.",
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

export const approach = [
  {
    number: "I",
    title: "Survey",
    body: "A site visit and brief — on-site or virtual — to understand the building, the team and the workload. We leave with measurements, photos and a clear scope.",
  },
  {
    number: "II",
    title: "Design",
    body: "A fixed-price proposal, bill of materials and floor plan. You see exactly what is being installed, where, by when, and at what cost.",
  },
  {
    number: "III",
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
