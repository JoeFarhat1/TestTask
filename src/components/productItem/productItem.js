import React, { useState } from "react";
import "./productItemStyles.css";

export const ProductItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="product-item-container">
      <div className="img-container">
        <img src={item.image} />
      </div>
      <div className="product-info-container">
        <h3>{item.title}</h3>
        <p className="product-description">
          {isExpanded ? (
            <>
              {item.description}
              <span
                className="expandable"
                onClick={() => setIsExpanded(false)}
              >
                Show less
              </span>
            </>
          ) : (
            <>
              {item.description.substring(0,70)}...
              <span
                className="expandable"
                onClick={() => setIsExpanded(true)}
              >
                Show more
              </span>
            </>
          )}
        </p>
        <div className="product-footer">
        <p className="product-price">{item.price}$</p>
        <p lassName="product-rating">Rate: {item.rating.rate} - Count: {item.rating.count} ratings</p>
        <p lassName="product-category">{item.category}</p>
        </div>
      </div>
    </div>
  );
};
