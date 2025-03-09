import { generateFakeProducts } from "~/core/utils";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const count = Number(query.count) || 10;
  return {
    products: generateFakeProducts(count),
  };
});
