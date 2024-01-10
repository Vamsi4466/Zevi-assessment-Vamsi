import React from "react";
import "./CustomProductsResults.scss";

import { ProductType } from "../Data/data";
import CustomProductItem from "./CustomProductItem"; 

interface ProductsInterface {
  products: ProductType[];
}

const ProductsResults = ({ products }: ProductsInterface) => {
  return (
    <>
      {products.length <= 0 ? (
        <div className="no_results">No Results Found !!!</div>
      ) : (
        <div className="product_results_container">
          {products.map((product, i) => {
            return <CustomProductItem key={i} product={product} />; 
          })}
        </div>
      )}
    </>
  );
};

export default ProductsResults;
