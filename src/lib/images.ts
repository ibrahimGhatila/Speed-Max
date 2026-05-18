// Curated Unsplash photos served via next/image. Treated for a cinematic,
// premium-infrastructure feel via CSS filters.

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const images = {
  // Hero — dramatic dark fiber/cable shot
  heroFiber: u("photo-1558494949-ef010cbdcc31"),
  // Featured project — server room
  featuredProject: u("photo-1573164574230-db1d5e960238"),
  // About / studio
  studio: u("photo-1497366216548-37526070297c"),
  team: u("photo-1521737604893-d14cc237f11d"),

  // Service-specific
  structuredCabling: u("photo-1551703599-6b3e8379aa8d"),
  systemIntegration: u("photo-1573164713714-d95e436ab8d6"),
  ipPbx: u("photo-1556761175-5973dc0f32e7"),
  security: u("photo-1557597774-9d273605dfa9"),
  collaboration: u("photo-1517048676732-d65bc937f952"),
  autocount: u("photo-1554224155-6726b3ff858f"),

  // Industries
  indManufacturing: u("photo-1581094794329-c8112a89af12"),
  indRetail: u("photo-1556740738-b6a63e27c4df"),
  indHealthcare: u("photo-1538108149393-fbbd81895907"),
  indEducation: u("photo-1497486751825-1233686d5d80"),
  indHospitality: u("photo-1566073771259-6a8506099945"),
  indProfessional: u("photo-1497032628192-86f99bcd76bc"),
};

export type ImageKey = keyof typeof images;

export function img(key: ImageKey, width = 1600, quality = 80) {
  return `${images[key]}?auto=format&fit=crop&w=${width}&q=${quality}`;
}
