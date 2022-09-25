import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import { Button } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen();
  };

  return (
    <div className='cart__dropdown'>
      <div className='cart__items'>
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
        <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </div>
  )
}