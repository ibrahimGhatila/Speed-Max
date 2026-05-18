// Curated Unsplash photos. Treated with the .duotone class for an editorial,
// desaturated feel — never as decoration.

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const images = {
  // Hero / featured — moody, cinematic
  featuredProject: u("photo-1558494949-ef010cbdcc31"), // network cables, dramatic
  serverInterior: u("photo-1573164574511-73c773193279"), // server room
  studio: u("photo-1497366216548-37526070297c"), // calm modern office
  team: u("photo-1521737604893-d14cc237f11d"),

  // Service-specific
  structuredCabling: u("photo-1551703599-6b3e8379aa8d"),
  systemIntegration: u("photo-1573164713714-d95e436ab8d6"),
  ipPbx: u("photo-1556761175-5973dc0f32e7"),
  security: u("photo-1557597774-9d273605dfa9"),
  collaboration: u("photo-1517048676732-d65bc937f952"),
  autocount: u("photo-1554224155-6726b3ff858f"),
};

export type ImageKey = keyof typeof images;

export function img(key: ImageKey, width = 1600, quality = 80) {
  return `${images[key]}?auto=format&fit=crop&w=${width}&q=${quality}`;
}
