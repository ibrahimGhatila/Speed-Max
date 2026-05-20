// Curated Unsplash imagery. Each entry is the Unsplash photo path; the `img`
// helper appends format/sizing parameters so we can request the right width
// per breakpoint.

const u = (id: string) => `https://images.unsplash.com/${id}`;

export const images = {
  // Hero — wide modern interior with warm light
  hero: u("photo-1616486338812-3dadae4b4ace"),

  // About — interior detail shot
  aboutDetail: u("photo-1615873968403-89e068629265"),

  // Catalog material tiles
  matStone: u("photo-1604147706283-d7119b5b822c"),
  matMDF: u("photo-1615874959474-d609969a20ed"),
  matWood: u("photo-1567361808960-dec9cb578182"),

  // Process cards
  procConcept: u("photo-1618220179428-22790b461013"),
  procPlanning: u("photo-1556761175-5973dc0f32e7"),
  procProduction: u("photo-1581094794329-c8112a89af12"),
  procInstall: u("photo-1503602642458-232111445657"),

  // Testimonials room images
  testLiving: u("photo-1505691938895-1758d7feb511"),
  testDining: u("photo-1493663284031-b7e3aefcae8e"),
  testBedroom: u("photo-1505693416388-ac5ce068fe85"),

  // Contact CTA dark textured backdrop
  contactBackdrop: u("photo-1615529182904-14819c35db37"),
};

export type ImageKey = keyof typeof images;

export function img(key: ImageKey, width = 1600, quality = 80) {
  const src = images[key];
  return `${src}?auto=format&fit=crop&w=${width}&q=${quality}`;
}
