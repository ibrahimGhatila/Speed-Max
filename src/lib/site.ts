export const site = {
  name: "Trenddeck",
  legalName: "Trenddeck Decor",
  tagline: "Decorative wall panels",
  foundedYear: 2017,
  phone: "+90 (212) 000 00 00",
  phoneRaw: "+902120000000",
  email: "hello@trenddeck.com.tr",
  whatsapp: "902120000000",
  address: {
    line1: "Atatürk Mah. Çamlık Sok.",
    line2: "No. 12 / Office 4",
    city: "Istanbul",
    state: "Türkiye",
    country: "Türkiye",
  },
  hours: "Mon — Sat  ·  10:00 – 19:00",
  social: {
    instagram: "#",
    facebook: "#",
    pinterest: "#",
  },
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; short?: string }[];
};

export const nav: NavItem[] = [
  { label: "Catalog", href: "/#catalog" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export const stats = [
  { value: "8", suffix: "+", label: "Years of experience" },
  { value: "120", suffix: "+", label: "Turnkey projects" },
  { value: "100", suffix: "%", label: "In-house manufacturing" },
];

export const categories = [
  {
    slug: "stone",
    title: "Stone",
    short: "Travertine, marble and limestone slabs cut to bespoke profiles.",
    image: "matStone",
  },
  {
    slug: "mdf",
    title: "MDF",
    short: "Painted and veneered MDF panels with milled relief patterns.",
    image: "matMDF",
  },
  {
    slug: "wood",
    title: "Wood",
    short: "Solid oak, walnut and ash slats with hand-finished surfaces.",
    image: "matWood",
  },
];

export const benefits = [
  {
    num: "01",
    title: "Full turnkey service",
    body: "We take care of everything — from concept and design to production and installation. One contract, one schedule, one accountable team.",
    icon: "turnkey" as const,
  },
  {
    num: "02",
    title: "In-house manufacturing",
    body: "Every panel is milled, finished and quality-checked in our own workshop. Consistent quality, predictable lead times.",
    icon: "factory" as const,
  },
  {
    num: "03",
    title: "Custom design",
    body: "We don't just stock catalog SKUs. Bring a mood, a sketch or a fragment of an idea — we engineer it into a buildable panel.",
    icon: "compass" as const,
  },
  {
    num: "04",
    title: "Nationwide service",
    body: "Our own installation crews travel anywhere in Türkiye, with guaranteed timelines and post-install warranty.",
    icon: "map" as const,
  },
];

export const process = [
  {
    num: "01",
    title: "Concept & design",
    body: "We capture the room, mood and constraints, then sketch a panel layout you can sign off on before anything is cut.",
    image: "procConcept" as const,
  },
  {
    num: "02",
    title: "Planning",
    body: "A precise spec, bill of materials and production schedule — so you know what arrives on site, and exactly when.",
    image: "procPlanning" as const,
  },
  {
    num: "03",
    title: "Production",
    body: "Manufactured in our own workshop with clean cuts, hand-sanded edges and a final QC against your sign-off.",
    image: "procProduction" as const,
  },
  {
    num: "04",
    title: "Turnkey installation",
    body: "Our own crew handles delivery and install, leaving the site clean and the surface ready for daylight.",
    image: "procInstall" as const,
  },
];

export const testimonials = [
  {
    quote:
      "We were blown away by the result. The team didn't just complete the order — they captured the calm of the brief. The dark walnut feels luxurious, and the living room had transformed before I had walked back through the door.",
    name: "Anna L.",
    role: "Living room · Kyiv",
    image: "testLiving" as const,
  },
  {
    quote:
      "Trenddeck handled every step — measurement, design, manufacturing and the install. The dining wall is now the first thing anyone notices when they walk in. Worth every lira.",
    name: "Mehmet K.",
    role: "Dining room · Istanbul",
    image: "testDining" as const,
  },
  {
    quote:
      "I sent them a mood board on a Tuesday and had a CAD layout back by Friday. Production was on schedule, install was clean. I would absolutely work with them again.",
    name: "Sara D.",
    role: "Bedroom · Izmir",
    image: "testBedroom" as const,
  },
];
