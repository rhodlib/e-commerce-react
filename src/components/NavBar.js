import React from 'react';
import styles from './NavBar.module.css';
import bagLogo from '../images/beach-bag.svg';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.brand}>
                <img className={styles.logo} src={bagLogo} alt="Logo"/>
                <h1 className={styles.title}>eCommerce</h1>
            </div>

            <ul className={styles.list}>
                <li className={styles.listItem}><a href="/#" className={styles.listLink}>Inicio</a></li>
                <li className={styles.listItem}><a href="/#" className={styles.listLink}>Productos</a></li>
                <li className={styles.listItem}><a href="/#" className={styles.listLink}>Contacto</a></li>
                <li className={styles.listItem}><a href="/#" className={styles.listLink}>About</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;