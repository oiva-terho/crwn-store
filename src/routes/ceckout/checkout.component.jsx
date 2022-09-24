import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

export const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
  return (
    <div className='checkout'>
      <div>
        {cartItems.map(cartItem => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span onClick={() => removeItemFromCart(cartItem)}> - </span>
              <span>{quantity}</span>
              <span onClick={() => addItemToCart(cartItem)}> + </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}