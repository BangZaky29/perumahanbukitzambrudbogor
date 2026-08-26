export const siteConfig = {
  brand: {
    name: "Bukit Zamrud",
    tagline: "Hunian Impian Keluarga Indonesia",
    developer: "PT. Jabal Mubarak Hakiki",
    description:
      "Perumahan subsidi berkualitas di Tegal Waru, Ciampea, Bogor. Rumah Tipe 30/60 mulai Rp185 Juta dengan DP hanya 1 Juta.",
  },

  contact: {
    whatsapp: "+6288294096100",
    whatsappDisplay: "0882-9409-6100",
    whatsappUrl: (message: string) =>
      `https://wa.me/6288294096100?text=${encodeURIComponent(message)}`,
    email: "",
  },

  location: {
    address: "Tegal Waru, Kec. Ciampea, Kab. Bogor, Jawa Barat",
    mapEmbedUrl: "",
    coordinates: {
      lat: -6.5842,
      lng: 106.7019,
    },
  },

  social: {
    instagram: "#",
    tiktok: "#",
    facebook: "#",
  },

  partner: {
    name: "Nuansa Properti",
    role: "Social Media Marketing Partner",
    social: {
      instagram: "https://www.instagram.com/nuansaproperti?igsi=MWJ3NnFyYTZ5M3l6bA==",
      tiktok: "#",
      facebook: "#",
    },
  },

  pricing: {
    hargaRumah: 185_000_000,
    dpMinimum: 1_000_000,
    subsidiUangMuka: 4_000_000,
    type: "30/60",
    luasBangunan: 30,
    luasTanah: 60,
  },

  whatsappMessages: {
    hero: "Halo, saya tertarik dengan Perumahan Bukit Zamrud. Boleh info lebih lanjut?",
    unit: "Halo, saya ingin mengetahui detail unit rumah Tipe 30/60 di Bukit Zamrud.",
    kalkulator: (cicilan: string) =>
      `Halo, saya sudah simulasi KPR dengan cicilan ${cicilan}/bulan. Saya mau tanya lebih lanjut.`,
    kontak: "Halo, saya ingin konsultasi mengenai rumah di Bukit Zamrud.",
    artikel: "Halo, saya baru baca artikel di website Bukit Zamrud. Saya tertarik dengan perumahan ini.",
    default: "Halo, saya tertarik dengan Perumahan Bukit Zamrud.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
