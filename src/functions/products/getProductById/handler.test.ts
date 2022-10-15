import { createMockAPIGatewayEvent } from "@homeservenow/serverless-event-mocks";
import { getProductById } from "./handler";

const product = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  images: [
    "https://dummyjson.com/image/i/products/1/1.jpg",
    "https://dummyjson.com/image/i/products/1/2.jpg",
    "https://dummyjson.com/image/i/products/1/3.jpg",
    "https://dummyjson.com/image/i/products/1/4.jpg",
    "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
  ],
};

const event = createMockAPIGatewayEvent({
  path: "/products",
  httpMethod: "get",
  pathParameters: { id: `${product.id}` },
});

jest.mock("../../services/products", () => ({
  productService: {
    getProductById: (id: string | number) => {
      if (id === product.id) {
        return product;
      }
      return undefined;
    },
  },
}));

jest.mock("../../libs/lambda", () => ({
  middyfy: (value) => value,
}));

describe("getProductById tests", () => {
  test("should return existing product", async () => {
    const result = await getProductById(event);
    expect(result).toEqual({
      statusCode: 200,
      body: JSON.stringify(product),
    });
  });
});
