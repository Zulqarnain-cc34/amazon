import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./Datalayer";
import { actionTypes } from "./reducer";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("this is a user >>", authUser);
      if (authUser) {
        dispatch({ type: actionTypes.SET_USER, user: authUser });
      } else {
        dispatch({ type: actionTypes.SET_USER, user: null });
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
