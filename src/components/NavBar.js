import React from "react";
import CartWidget from "./CartWidget";
import styles from "./NavBar.module.css";
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
      <nav className={styles.navBar}>
        <Link to={`/`} className={styles.brand}>
          <h3 className={styles.title}>eCommerce</h3>
        </Link>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <NavLink to={`/`} className={styles.listLink}>
              Inicio
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink to={`/category/1`} className={styles.listLink} activeClassName={styles.activeLink}>
              Limpieza
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink to={`/category/2`} className={styles.listLink} activeClassName={styles.activeLink}>
              Golosinas
            </NavLink>
          </li>
          <li className={styles.listItem}>
            <Link to={`/cart`} className={styles.listLink}>
              <CartWidget fill="#FFF" width="32px" height="32px" />
            </Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;
