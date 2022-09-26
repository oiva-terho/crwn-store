import { Container, Details, Name } from "./cart-item.styles";

export const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <Container>
      <img src={imageUrl} alt={name} />
      <Details>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </Details>
    </Container>
  );
};
