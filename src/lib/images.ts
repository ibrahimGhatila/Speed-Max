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

  // Industries — subjects per the brief (industrial park, mall, hospital,
  // school, hotel, office tower). Unsplash IDs chosen for the subject match;
  // swap individually if any one doesn't read right.
  indManufacturing: u("photo-1504917595217-d4dc5ebe6122"),
  indRetail: u("photo-1481437156560-3205f6a55735"),
  indHealthcare: u("photo-1586773860418-d37222d8fce3"),
  indEducation: u("photo-1562774053-701939374585"),
  indHospitality: u("photo-1542314831-068cd1dbfeeb"),
  indProfessional: u("photo-1486406146926-c627a92ad1ab"),
};

export type ImageKey = keyof typeof images;

export function img(key: ImageKey, width = 1600, quality = 80) {
  const src = images[key];
  if (src.includes("images.unsplash.com")) {
    return `${src}?auto=format&fit=crop&w=${width}&q=${quality}`;
  }
  return src;
}
