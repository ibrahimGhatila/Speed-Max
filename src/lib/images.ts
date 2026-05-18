// Curated Unsplash photos used across the site. Centralised so we can swap
// any image in one place. Width/quality query strings are appended at usage.

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const images = {
  // Hero — network cables (classic Taylor Vick blue cabling shot)
  heroCables: u("photo-1544197150-b99a580bb7a8"),
  // About — modern tech team / collaboration
  aboutTeam: u("photo-1521737604893-d14cc237f11d"),
  // Why us — server rack with green/amber port lights
  serverRack: u("photo-1597733336794-12d05021d510"),
  // Service-specific imagery
  structuredCabling: u("photo-1558494949-ef010cbdcc31"),
  systemIntegration: u("photo-1573164713714-d95e436ab8d6"),
  ipPbx: u("photo-1556761175-5973dc0f32e7"),
  security: u("photo-1557597774-9d273605dfa9"),
  collaboration: u("photo-1517048676732-d65bc937f952"),
  autocount: u("photo-1554224155-6726b3ff858f"),
};

export type ImageKey = keyof typeof images;
