import React, { useState } from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

import { RiSearch2Line } from "react-icons/ri";

import home_bg from "../images/home_bg.png";
import HomeHeader from "../Components/HomeHeader";
import {
  LatestTrendType,
  SuggestionType,
  fetchLatestTrendData,
  fetchSuggestionData,
} from "../Data/data";


const Home = () => {
  // State variables for managing the suggestion box visibility and data
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [latestTrendsData, setLatestTrendsData] = useState<LatestTrendType[]>();
  const [suggestionData, setSuggestionData] = useState<SuggestionType[]>();

  // Navigation hook from react-router-dom
  const navigate = useNavigate();

  // Function to toggle the suggestion box visibility and fetch data
  const getBoxProducts = () => {
    setShowSuggestionBox((prev) => !prev);
    setLatestTrendsData(fetchLatestTrendData());
    setSuggestionData(fetchSuggestionData());
  };

  // Form submission handler to navigate to the products page
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    navigate("/products");
  };

  // Function to navigate to the products page
  const navigateToProductsPage = () => {
    navigate("/products");
  };

  
  return (
    <div style={{ backgroundImage: `url(${home_bg})` }} className="home">
      {/* Include the HomeHeader component */}
      <HomeHeader />

      <div className="home_content">
        {/* Form for search input */}
        <form className="input_container" onSubmit={(e) => onSubmitHandler(e)}>
          <input
            onClick={() => getBoxProducts()}
            type="text"
            className="home_input"
          />
          <button className="search_icon_container">
            <RiSearch2Line size="28" />
          </button>
        </form>

        {/* Display suggestion box if showSuggestionBox is true */}
        {showSuggestionBox && (
          <div className="latest_trend_and_suggestion_box">
            {/* Display latest trend products */}
            <div className="latest_trend_box">
              <div className="category_title">Latest Trends</div>
              <div className="latest_trend_products">
                {latestTrendsData?.map((product, i) => {
                  return (
                    <div
                      key={i}
                      className="latest_trend_product"
                      onClick={navigateToProductsPage}
                    >
                      <img src={product.productImg} alt="" />
                      <div>{product.productName}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Display popular suggestions */}
            <div>
              <div className="category_title">Popular Suggestions</div>
              <div>
                {suggestionData?.map((product, i) => {
                  return (
                    <div
                      key={i}
                      className="suggestion_product"
                      onClick={navigateToProductsPage}
                    >
                      {product.productName}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
