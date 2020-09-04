import React from "react";
import "../Css/Subtotal.css";
import Currencyformat from "react-currency-format";
import { useStateValue } from "../Datalayer";
import { getBasketTotal } from "../reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div className="Subtotal">
      <Currencyformat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :<strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order Contains Gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        value={getBasketTotal(basket)}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
