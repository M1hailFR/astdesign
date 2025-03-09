import { faker } from "@faker-js/faker";
import { pathTo } from "~/core/utils";

import type { IProduct } from "~/core/types/product";

export const generateFakeProduct = (): IProduct => {
  const hasOldPrice = faker.datatype.boolean();
  const newPrice = faker.commerce.price({ min: 100, max: 100000 });
  const oldPrice = hasOldPrice
    ? newPrice + faker.commerce.price({ min: 10, max: 10000 })
    : undefined;

  return {
    id: Date.now() + faker.number.int({ min: 10, max: 10000 }),
    image: faker.image.url(),
    newPrice: Number(newPrice),
    oldPrice: oldPrice ? Number(oldPrice) : undefined,
    brand: faker.company.name(),
    name: faker.commerce.productName(),
    url: pathTo.products + "/" + faker.number.int({ min: 10, max: 10000 }),
  };
};

export const generateFakeProducts = (count: number = 10): IProduct[] => {
  return Array.from({ length: count }, () => generateFakeProduct());
};
