export type IdType = string | number;

export interface IProduct {
  image: string;
  newPrice: number;
  oldPrice?: number;
  brand: string;
  name: string;
  url: string;
  quantity?: number;
  id: number;
}
