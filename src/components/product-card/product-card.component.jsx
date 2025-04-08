import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import {
  ProductCardContainer,
  Image,
  CTAButton,
  Footer,
  Name,
  Price,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <CTAButton buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </CTAButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
