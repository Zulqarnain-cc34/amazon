import React from "react";
import "../Css/CheckOutProduct.css";
import { useStateValue } from "../Datalayer";
import { actionTypes } from "../reducer";
function CheckOutProduct({ id, title, price, rating, image }) {
  const [, dispatch] = useStateValue();
  console.log(id);
  const removefrombasket = () => {
    dispatch({
      type: actionTypes.REMOVE_FROM_BASKET,
      id: id,
    });
  };
  return (
    <div className="Checkoutproduct">
      <img src={image} alt={title} />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="Checkoutproduct__rating">
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
        <button onClick={removefrombasket}>Remove From basket</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
