// Curated Unsplash photos. heroFiber is the keeper — the rest were chosen
// to feel like premium-operator photography rather than generic stock.

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const images = {
  // ─── Hero (keep — Taylor Vick blue fibre cables, the iconic infra shot)
  heroFiber: u("photo-1544197150-b99a580bb7a8"),

  // ─── Featured project — Alexandre Debiève macro circuit board (moody, technical)
  featuredProject: u("photo-1518770660439-4636190af475"),

  // ─── Studio / about — modern minimal office interior
  studio: u("photo-1497366811353-6870744d04b2"),
  team: u("photo-1556761175-b413da4baf72"),

  // ─── Service cards
  // Cabling — data centre interior with red glow
  structuredCabling: u("photo-1597733336794-12d05021d510"),
  // System integration — close-up of server rack with port lights
  systemIntegration: u("photo-1591405351990-4726e331f141"),
  // IP telephony — Cisco office phone
  ipPbx: u("photo-1521791136064-7986c2920216"),
  // Security & access — modern CCTV camera
  security: u("photo-1565514020179-026b92b84bb6"),
  // Collaboration — modern conference room
  collaboration: u("photo-1542744173-8e7e53415bb0"),
  // AutoCount — dashboard / analytics on laptop
  autocount: u("photo-1551288049-bebda4e38f71"),

  // ─── Industries
  indManufacturing: u("photo-1565073624497-7e91b3ee31a6"),
  indRetail: u("photo-1441986300917-64674bd600d8"),
  indHealthcare: u("photo-1576091160550-2173dba999ef"),
  indEducation: u("photo-1523050854058-8df90110c9f1"),
  indHospitality: u("photo-1542314831-068cd1dbfeeb"),
  indProfessional: u("photo-1497215842964-222b430dc094"),
};

export type ImageKey = keyof typeof images;

export function img(key: ImageKey, width = 1600, quality = 80) {
  return `${images[key]}?auto=format&fit=crop&w=${width}&q=${quality}`;
}
