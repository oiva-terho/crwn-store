import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

export const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity }= cartItem;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const increaseItemHandler = () => addItemToCart(cartItem);
  const decreaseItemHandler = () => removeItemFromCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem, true);
  const mosueChangeItemHandler = (e) => {
    const change = e.deltaY / 100;
    change > 0 ? addItemToCart(cartItem) : removeItemFromCart(cartItem);
  
  };

  return (
    <div className="checkout-item">
      <div className="checkout-item__image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='checkout-item__name'></span>
      <div className='checkout-item__quantity' onWheel={mosueChangeItemHandler}>
        <div className='checkout-item__quantity-arrow' onClick={decreaseItemHandler}>&#10094;</div>
        <span className='checkout-item__quantity-value'>{quantity}</span>
        <div className='checkout-item__quantity-arrow' onClick={increaseItemHandler}>&#10095;</div>
      </div>
      <span className='checkout-item__price'>{price * quantity}</span>
      <div className='checkout-item__remove-btn'onClick={removeItemHandler}>&#10005;</div>
    </div>
  )
};