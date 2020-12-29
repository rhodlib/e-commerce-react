import React from "react";
import CartWidget from "./CartWidget";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
      <nav className={styles.navBar}>
        <div className={styles.brand}>
          <CartWidget fill="#FFF" width="60px" height="60px" />
          <h3 className={styles.title}>3D-Print Shop</h3>
        </div>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="/#" className={styles.listLink}>
              Inicio
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="/#" className={styles.listLink}>
              Productos
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="/#" className={styles.listLink}>
              Contacto
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="/#" className={styles.listLink}>
              About
            </a>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;
