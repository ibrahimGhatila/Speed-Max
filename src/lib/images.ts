// Curated images. Unsplash assets go through the Unsplash CDN with format/quality
// params; external image URLs are returned as-is.

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const images = {
  // Hero — keep
  heroFiber: u("photo-1558494949-ef010cbdcc31"),

  // Featured / about / studio
  featuredProject: u("photo-1518770660439-4636190af475"),
  studio: u("photo-1497366811353-6870744d04b2"),
  team: u("photo-1556761175-b413da4baf72"),

  // Service cards — external assets supplied by the client
  structuredCabling:
    "https://www.pollockcompany.com/wp-content/uploads/2024/02/importance-of-network-cabling-scaled.jpg",
  systemIntegration:
    "https://eleks.com/wp-content/uploads/What-Are-System-Integration-Services_2.jpg",
  ipPbx:
    "https://albarqsmartsystems.com/wp-content/uploads/2024/11/IP-telephony.jpg",
  security: "https://vizito.eu/images/blog/data_center_safety.webp",
  collaboration:
    "https://eu-images.contentstack.com/v3/assets/blt2db30e0332fda6df/blt9ad3678867362471/6747370d803d5cb74e9cfe0b/021621_CollabMeeting_370259744.jpeg",
  autocount: u("photo-1551288049-bebda4e38f71"),

  // Industries
  indManufacturing: u("photo-1565073624497-7e91b3ee31a6"),
  indRetail: u("photo-1441986300917-64674bd600d8"),
  indHealthcare: u("photo-1576091160550-2173dba999ef"),
  indEducation: u("photo-1523050854058-8df90110c9f1"),
  indHospitality: u("photo-1542314831-068cd1dbfeeb"),
  indProfessional: u("photo-1497215842964-222b430dc094"),
};

export type ImageKey = keyof typeof images;

export function img(key: ImageKey, width = 1600, quality = 80) {
  const src = images[key];
  if (src.includes("images.unsplash.com")) {
    return `${src}?auto=format&fit=crop&w=${width}&q=${quality}`;
  }
  return src;
}
