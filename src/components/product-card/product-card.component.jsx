import { useContext } from 'react';

import { Button } from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.scss';

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='product-card__footer'>
        <span className='product-card__name'>{name}</span>
        <span className='product-card__price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};