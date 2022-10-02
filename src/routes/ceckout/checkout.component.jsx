import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';

import { Container, Header, HeaderBlock, Total } from './checkout.styles';

export const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <Container>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </Header>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </Container>
  );
};
