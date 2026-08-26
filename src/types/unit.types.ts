export interface UnitSpec {
  id: string;
  name: string;
  type: string;
  luasBangunan: number; // m²
  luasTanah: number; // m²
  harga: number;
  dpMinimum: number;
  subsidiUangMuka: number;
  kamarTidur: number;
  kamarMandi: number;
  carport: boolean;
  images: string[];
  floorPlanImage: string;
  specifications: BuildingSpec;
  features: string[];
}

export interface BuildingSpec {
  pondasi: string;
  strukturBangunan: string;
  dinding: string;
  kusen: string;
  pintu: string;
  jendela: string;
  rangkaAtap: string;
  penutupAtap: string;
  plafon: string;
  lantai: string;
  sanitasi: string;
  listrik: string;
  airBersih: string;
  catDinding: string;
}
