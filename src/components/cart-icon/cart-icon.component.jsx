import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } =
    useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    let count = 0;
    for (let i = 0; i < cartItems.length; i++) {
      console.log(cartItems[i].quantity);
      count += cartItems[i].quantity;
    }
    setItemCount(count);
  }, [cartItems]);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
