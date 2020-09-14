import React from "react";
import "../Css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import { useStateValue } from "../Datalayer";
import { auth } from "../firebase";
function Header() {
  const [{ basket, user }] = useStateValue();

  const HandleAuthentication = () => {
    auth.signOut();
  };
  console.log(user);
  return (
    <nav className="header">
      <div className="header__logocontainer">
        <MenuIcon className="header__Menu" />
        <Link to="/">
          <img
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon"
          />
        </Link>
      </div>
      <div className="header__input">
        <div className="header__search">
          <p>All</p>
          <ExpandMoreIcon className="header__expand" />
        </div>
        <input type="text" />
        <SearchIcon className="header__searchicon" />
      </div>
      <div className="header__nav">
        <Link
          to={!user && "/login"}
          className="header__link"
          id="header__link1"
        >
          <div onClick={HandleAuthentication} className="header__option">
            <span className="header__optionline1">Hello</span>
            <span className="header__optionline2">
              {user === null ? "Sign In" : "Sign out"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionline1">Returns</span>
            <span className="header__optionline2">Account & Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionline1">Your</span>
            <span className="header__optionline2">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionbasket">
            <ShoppingBasketIcon />
            <span className="header__basketcount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
