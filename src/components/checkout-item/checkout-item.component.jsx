import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

export const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity }= cartItem;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const increaseItemHandler = () => addItemToCart(cartItem);
  const decreaseItemHandler = () => removeItemFromCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem, true);

  return (
    <div className="checkout-item">
      <div className="checkout-item__image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='checkout-item__name'></span>
      <span className='checkout-item__quantity'>
        <div className='checkout-item__quantity-arrow' onClick={decreaseItemHandler}>&#10094;</div>
        <span className='checkout-item__quantity-value'>{quantity}</span>
        <div className='checkout-item__quantity-arrow' onClick={increaseItemHandler}>&#10095;</div>
      </span>
      <span className='checkout-item__price'>{price * quantity}</span>
      <div className='checkout-item__remove-btn'onClick={removeItemHandler}>&#10005;</div>
    </div>
  )
};