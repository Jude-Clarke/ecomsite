import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  ItemLabel,
  Quantity,
  Arrow,
  QuantityValue,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItem } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItem(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <ItemLabel>{name}</ItemLabel>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <QuantityValue>{quantity}</QuantityValue>

        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <ItemLabel>{price}</ItemLabel>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
