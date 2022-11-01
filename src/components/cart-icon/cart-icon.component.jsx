import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartCount,
  selectIsCartOpen
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { Container, ItemCount, Icon } from './cart-icon.styles';

export const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <Container onClick={toggleIsCartOpen}>
      <Icon />
      <ItemCount>{cartCount}</ItemCount>
    </Container>
  );
};
