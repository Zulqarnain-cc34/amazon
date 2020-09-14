import React from "react";
import "../Css/checkout.css";
import { useStateValue } from "../Datalayer";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h1>basket empty</h1>
            <p>your basket is empty and there is nothing inside it</p>
          </div>
        ) : (
          <div>
            <h3>Hello , {user?.email}</h3>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
