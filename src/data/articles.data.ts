import type { Article } from "../types/article.types";

/**
 * Article data — static for now, designed to be easily swapped with CMS API later.
 * Replace this file's export with fetch calls when migrating to headless CMS.
 * 
 * Content field is left as placeholder — articles will be written manually.
 */
export const articles: Article[] = [
  {
    id: "1",
    slug: "tips-lolos-kpr-subsidi-karyawan-baru",
    title: "5 Tips Lolos Pengajuan KPR Subsidi untuk Karyawan Baru",
    excerpt:
      "Baru mulai kerja tapi sudah ingin punya rumah? Simak 5 tips jitu agar pengajuan KPR subsidi kamu disetujui bank.",
    coverImage: "/images/articles/tips-kpr.jpg",
    category: "tips-kpr",
    author: "Tim Bukit Zamrud",
    publishedAt: "2026-08-01",
    readingTimeMinutes: 5,
    content: "", // TODO: tulis konten artikel manual
  },
  {
    id: "2",
    slug: "flpp-vs-kpr-non-subsidi",
    title: "FLPP vs KPR Non-Subsidi: Mana yang Cocok untuk Rumah Pertamamu?",
    excerpt:
      "Pahami perbedaan KPR FLPP dan KPR komersial agar kamu bisa memilih skema pembiayaan yang tepat.",
    coverImage: "/images/articles/flpp-vs-nonsubsidi.jpg",
    category: "panduan-subsidi",
    author: "Tim Bukit Zamrud",
    publishedAt: "2026-08-05",
    readingTimeMinutes: 7,
    content: "",
  },
  {
    id: "3",
    slug: "panduan-dokumen-kpr-subsidi-2026",
    title: "Panduan Lengkap Dokumen KPR Subsidi 2026",
    excerpt:
      "Daftar lengkap dokumen yang wajib disiapkan sebelum mengajukan KPR subsidi. Jangan sampai ada yang terlewat!",
    coverImage: "/images/articles/dokumen-kpr.jpg",
    category: "panduan-subsidi",
    author: "Tim Bukit Zamrud",
    publishedAt: "2026-08-10",
    readingTimeMinutes: 6,
    content: "",
  },
  {
    id: "4",
    slug: "kenapa-ciampea-bogor-rumah-pertama",
    title: "Kenapa Ciampea, Bogor Jadi Incaran untuk Rumah Pertama Dekat Kampus IPB",
    excerpt:
      "Lokasi strategis dekat IPB, akses mudah ke pusat kota Bogor, dan harga masih terjangkau. Cari tahu alasannya.",
    coverImage: "/images/articles/ciampea-bogor.jpg",
    category: "gaya-hidup",
    author: "Tim Bukit Zamrud",
    publishedAt: "2026-08-15",
    readingTimeMinutes: 5,
    content: "",
  },
  {
    id: "5",
    slug: "cara-hitung-kemampuan-cicilan-kpr",
    title: "Cara Menghitung Kemampuan Cicilan Sebelum Ajukan KPR",
    excerpt:
      "Sebelum ajukan KPR, pastikan kamu tahu berapa besar cicilan yang mampu kamu bayar setiap bulan.",
    coverImage: "/images/articles/hitung-cicilan.jpg",
    category: "tips-kpr",
    author: "Tim Bukit Zamrud",
    publishedAt: "2026-08-20",
    readingTimeMinutes: 4,
    content: "",
  },
  {
    id: "6",
    slug: "checklist-serah-terima-kunci-rumah-subsidi",
    title: "Checklist Sebelum Serah Terima Kunci Rumah Subsidi",
    excerpt:
      "Jangan terburu-buru terima kunci! Pastikan semua item di checklist ini sudah kamu periksa.",
    coverImage: "/images/articles/serah-terima.jpg",
    category: "berita-properti",
    author: "Tim Bukit Zamrud",
    publishedAt: "2026-08-25",
    readingTimeMinutes: 6,
    content: "",
  },
];

/**
 * Get all articles, optionally filtered by category.
 */
export function getArticles(category?: string): Article[] {
  if (!category || category === "semua") {
    return articles;
  }
  return articles.filter((a) => a.category === category);
}

/**
 * Get a single article by slug.
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
