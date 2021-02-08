import React from "react";
import "./styles.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CustomContext from "./context/CartContext";
import Footer from "./components/Footer";
import { Container } from "semantic-ui-react";
import ErrorPage from "./components/ErrorPage";

const App = function () {
  return (
    <CustomContext>
      <Router>
        <NavBar />
        <Container
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            heigth: "100vh",
          }}
        >
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/404">
              <ErrorPage />
            </Route>
            <Redirect from="*" to="/404" />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </CustomContext>
  );
};

export default App;
