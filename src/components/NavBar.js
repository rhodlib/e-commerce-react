import React, { useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { Header, Menu} from "semantic-ui-react";

const NavBar = () => {
  const [activeItem, setActiveItem] = useState("");

  return (
    <Menu color="teal" fixed="top" inverted widths={5}>
      <Menu.Item name="brand" as={Link} to={"/"}>
        <Header as="h3">ClothShop</Header>
      </Menu.Item>
      <Menu.Item
        name="inicio"
        active={activeItem === "inicio"}
        onClick={(e, { name }) => setActiveItem(name)}
        as={Link}
        to={"/"}
      >
        Inicio
      </Menu.Item>
      <Menu.Item
        name="hoodies"
        active={activeItem === "hoodies"}
        onClick={(e, { name }) => setActiveItem(name)}
        as={Link}
        to={"/category/1"}
      >
        Hoodies
      </Menu.Item>
      <Menu.Item
        name="remeras"
        active={activeItem === "remeras"}
        onClick={(e, { name }) => setActiveItem(name)}
        as={Link}
        to={"/category/2"}
      >
        Remeras
      </Menu.Item>
      <Menu.Item
        name="cart"
        active={activeItem === "cart"}
        onClick={(e, { name }) => setActiveItem(name)}
        as={Link}
        to={"/cart"}
      >
        <CartWidget fill="#FFF" width="32px" height="32px" />
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
