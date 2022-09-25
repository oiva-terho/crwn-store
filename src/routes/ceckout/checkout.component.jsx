import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

export const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout'>
      <div className='checkout__header'>
        <div className="checkout__header-block">
          <span>Product</span>
        </div>
        <div className="checkout__header-block">
          <span>Description</span>
        </div>
        <div className="checkout__header-block">
          <span>Quantity</span>
        </div>
        <div className="checkout__header-block">
          <span>Price</span>
        </div>
        <div className="checkout__header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
        <span className='checkout__total'>Total: {cartTotal}</span>
    </div>
  )
}