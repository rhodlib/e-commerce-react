import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext';
import Styles from "./Cart.module.css";

const Cart = () => {
    const myContext = useContext(CartContext);
    let total = 0;
    return (
        myContext.cart.length ?
            <ul className={Styles.cartContainer}>
                {myContext.cart.map(({item, quantity}) => {
                    total += item.price * quantity;
                    return (
                        <li className={Styles.cartItem} key={item.id}>
                            <img className={Styles.img} src={item.pictureUrl}/>
                            <p>{item.title} x {quantity}</p>
                            <p>{item.price * quantity}</p>
                            <button onClick={() => myContext.removeItem(item.id)}>Eliminar</button>
                        </li>
                    )
                })}
                <li> Total: {total}</li>
            </ul> : <p>No hay productos en el carrito <Link to="/">Ir a comprar</Link></p>
    )
}

export default Cart;