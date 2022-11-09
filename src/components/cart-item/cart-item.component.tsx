import { FC } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { Container, Details, Name } from './cart-item.styles';

type CartItemProps = {
  cartItem: TCartItem;
};

export const CartItem: FC<CartItemProps> = ({ cartItem }) => {
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
