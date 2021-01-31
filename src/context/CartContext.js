import { createContext, useState } from "react";

export const CartContext = createContext([]);

export default function CustomContext({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);

  const isInCart = (id) => {
    return cart.some(({item}) => item.id === id);
  };

  const removeItem = (id) => {
    setCart(cart.filter(({item}) => item.id !== id));
  };

  const addItem = ({item, quantity}) => {
    console.log(isInCart(item && item.id));
    if (isInCart(item && item.id)) {
      console.log("Ese item ya esta en el carrito");
      return;
    }
    setCart([...cart, {item, quantity}]);
  };

  const clear = () => {
    setCart([]);
  };

  const totalItems = () => {
    return cart.reduce((total, {quantity}) => total + quantity, 0);
  }

  const totalPrice = () => {
    let total = 0;
    cart.forEach(({item, quantity}) => total += item.price * quantity);
    return total;
  }

  return (
    <CartContext.Provider value={{ cart, addItem, isInCart, removeItem, clear, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
