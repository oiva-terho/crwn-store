import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { Container, ItemCount, Icon } from './cart-icon.styles';

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <Container onClick={toggleIsCartOpen}>
      <Icon/>
      <ItemCount>{cartCount}</ItemCount>
    </Container>
  )
};