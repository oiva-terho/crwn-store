import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { Button } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';

import { Container, CartItems, EmptyMessage } from './cart-dropdown.styles';

export const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();

  const closeCartDropdown = () => dispatch(setIsCartOpen(!isCartOpen));
  const goToCheckoutHandler = () => {
    navigate('/checkout');
    closeCartDropdown();
  };

  return (
    <Container>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </Container>
  );
};
