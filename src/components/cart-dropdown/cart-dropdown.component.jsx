import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { Button } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart__dropdown'>
      <div className='cart__items'>
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
        <Button>Go to checkout</Button>
    </div>
  )
}