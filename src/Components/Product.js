import React from "react";
import "../Css/product.css";
import { useStateValue } from "../Datalayer";
import { actionTypes } from "../reducer";

function Products({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();
  const addtobasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product_title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(Math.round(rating))
            .fill()
            .map((_) => (
              <p>
                <span role="img" aria-label="star">
                  ⭐️
                </span>
              </p>
            ))}
        </div>
      </div>
      <div className="product__imagebtn">
        <img src={image} alt={title} />
        <button onClick={addtobasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Products;
