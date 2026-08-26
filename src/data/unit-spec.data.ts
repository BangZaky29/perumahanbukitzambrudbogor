import type { UnitSpec } from "../types/unit.types";

export const unitSpecs: UnitSpec[] = [
  {
    id: "type-30-60",
    name: "Rumah Tipe 30/60",
    type: "30/60",
    luasBangunan: 30,
    luasTanah: 60,
    harga: 185_000_000,
    dpMinimum: 1_000_000,
    subsidiUangMuka: 4_000_000,
    kamarTidur: 2,
    kamarMandi: 1,
    carport: true,
    images: ["/images/unit/rumah-depan.jpg"],
    floorPlanImage: "/images/unit/denah.jpg",
    specifications: {
      pondasi: "Batu kali",
      strukturBangunan: "Beton bertulang",
      dinding: "Bata merah diplester & diaci",
      kusen: "Aluminium",
      pintu: "Panel engineering wood",
      jendela: "Kaca 5mm",
      rangkaAtap: "Baja ringan",
      penutupAtap: "Genteng beton",
      plafon: "Gypsum",
      lantai: "Keramik 40x40",
      sanitasi: "Kloset jongkok keramik",
      listrik: "1.300 Watt",
      airBersih: "Sumur bor / PDAM",
      catDinding: "Cat tembok standar",
    },
    features: [
      "2 Kamar Tidur",
      "1 Kamar Mandi",
      "Ruang Tamu",
      "Dapur",
      "Carport",
      "Taman Depan",
    ],
  },
];

export function getUnitById(id: string): UnitSpec | undefined {
  return unitSpecs.find((unit) => unit.id === id);
}
