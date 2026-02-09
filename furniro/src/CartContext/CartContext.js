import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  console.log("CartProvider render, cart:", cart);

  const addToCart = (product) => {
    setcart((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        alert("The product has been added once");
        return prev;
      }
      const updated = [...prev, product];
      return updated;
    });
  };
  const removeFromCart = (id) => {
    setcart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
