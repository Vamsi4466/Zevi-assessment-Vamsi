
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ProductType } from "../Data/data";
import { ratingBox } from "../Utilities/utilities";
import "./CustomProductItem.scss";

// Interface defining the expected structure of the product prop
interface ProductItemType {
  product: ProductType;
}

// ProductItem component definition
const ProductItem = ({ product }: ProductItemType) => {
  // State variables to manage wishlist status and view product visibility
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showViewProduct, setShowViewProduct] = useState(false);

  // Navigate function from react-router-dom for programmatic navigation
  const navigate = useNavigate();

  // Function to toggle wishlist status
  const toggleWishlist = () => {
    setIsInWishlist((prev) => !prev);
  };

  // Event handler for mouse over the product image
  const handleMouseOver = () => {
    setShowViewProduct(true);
  };

  // Event handler for mouse out of the product image
  const handleMouseOut = () => {
    setShowViewProduct(false);
  };

  // Event handler for clicking "View Product"
  const handleViewProductClick = () => {
    navigate("/");
  };

  // ProductItem JSX structure
  return (
    <div className="product_item">
      {/* Product image container */}
      <div className="product_img_container">
        {/* Wishlist icon with conditional rendering based on wishlist status */}
        <div className="wishlist_icon_container">
          {isInWishlist ? (
            <AiFillHeart color="red" onClick={toggleWishlist} />
          ) : (
            <AiOutlineHeart color="red" onClick={toggleWishlist} />
          )}
        </div>

        {/* Product image with mouse over/out event handlers */}
        <img
          className="product_img"
          src={product.productImg}
          alt=""
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />

        {/* "View Product" overlay with conditional rendering based on mouseover status */}
        {showViewProduct && (
          <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="view_product"
            onClick={handleViewProductClick}
          >
            View Product
          </div>
        )}
      </div>

      {/* Product name */}
      <div>{product.productName}</div>

      {/* Product prices */}
      <div>
        <span className="org_price">Rs. {product.productOrgPrice} </span>
        <span className="dis_price">Rs. {product.productDisPrice} </span>
      </div>

      {/* Rating and reviews information */}
      <div className="rating_and_reviews_container">
        {ratingBox(product.productRating)} ({product.productsReviews})
      </div>
    </div>
  );
};

export default ProductItem;
