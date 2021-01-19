import { createContext, useState } from "react";

export const CartContext = createContext([]);

export default function CustomContext({ defaultValue = [], children }) {
  const [cart, setCart] = useState(defaultValue);

  const isInCart = (id) => {
    return cart.some(({item}) => item.id === id);
  };

  const removeItem = (id) => {
    setCart(cart.map((item) => item.id !== id));
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

  return (
    <CartContext.Provider value={{ cart, addItem, isInCart, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}
