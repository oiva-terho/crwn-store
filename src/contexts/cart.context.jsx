import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, prouctToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === prouctToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === prouctToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...prouctToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove, all = false) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1 || all) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem => 
    cartItem.id === cartItemToRemove.id
      ? {...cartItem, quantity: cartItem.quantity -1}
      : cartItem
    );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalCount = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
    setCartTotal(newTotalCount);
  }, [cartItems]);

  const addItemToCart = (prouctToAdd) => {
    setCartItems(addCartItem(cartItems, prouctToAdd));
  };

  const removeItemFromCart = (cartItemToRemove, all) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove, all));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, cartCount, cartTotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
