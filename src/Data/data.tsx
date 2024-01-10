import { faker } from "@faker-js/faker";

// Interface for the latest trend data
export interface LatestTrendType {
  productImg: string;
  productName: string;
}

// Interface for suggestion data
export interface SuggestionType {
  productName: string;
}

// Interface for product data
export interface ProductType {
  productImg: string;
  productName: string;
  productRating: number;
  productOrgPrice: number;
  productDisPrice: number;
  productsReviews: number;
  clothingType: string;
  clothingBrand: string;
}

// Function to fetch latest trend data
export const fetchLatestTrendData = () => {
  const latestTrends: LatestTrendType[] = [];

  // Generate 5 fake latest trend items
  for (let i = 1; i <= 5; i++) {
    latestTrends.push({
      // Using faker to generate a random people image URL
      productImg: faker.image.people(300, 400, true),
      // Using faker to generate a random product name
      productName: faker.commerce.productName(),
    });
  }

  return latestTrends;
};

// Function to fetch suggestion data
export const fetchSuggestionData = () => {
  const suggestionData: SuggestionType[] = [];

  // Generate 5 fake suggestion items
  for (let i = 1; i <= 5; i++) {
    // Using faker to generate a random product name
    suggestionData.push({
      productName: faker.commerce.productName(),
    });
  }

  return suggestionData;
};

// Function to fetch a list of 100 fake products
export const fetchProducts = () => {
  const products: ProductType[] = [];

  // Generate 100 fake products
  for (let i = 0; i <= 99; i++) {
    // Using faker to generate a random image URL
    const productImg = faker.image.url({
      height: 400,
      width: 300,
    });

    // Using faker to generate a random product name
    const productName = faker.commerce.productName();

    // Using faker to generate a random product rating (1 to 5)
    const productRating = faker.number.int({ min: 1, max: 5 });

    // Using faker to generate a random original price between 300 and 5000
    const productOrgPrice = Number(
      faker.commerce.price({ min: 300, max: 5000 })
    );

    // Using faker to generate a random discounted price (between 300 and the original price)
    const productDisPrice = Number(
      faker.commerce.price({
        min: 300,
        max: Number(productOrgPrice),
      })
    );

    // Using faker to generate a random number of reviews (between 10 and 50)
    const productsReviews = faker.number.int({ min: 10, max: 50 });

    // Using faker to generate a random clothing type
    const clothingType = faker.commerce.product();

    // Using faker to generate a random clothing brand name
    const clothingBrand = faker.company.name(); // Use companyName directly

    // Construct the product object and add it to the list
    products.push({
      productImg,
      productName,
      productRating,
      productOrgPrice,
      productDisPrice,
      productsReviews,
      clothingType,
      clothingBrand,
    });
  }

  return products;
};
