import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { useScrollBlock } from '../../utils/useScrollBlock.utils';

import {
  Container,
  ImgContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from './checkout-item.styles';

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const [blockScroll, allowScroll] = useScrollBlock();

  const increaseItemHandler = () => addItemToCart(cartItem);
  const decreaseItemHandler = () => removeItemFromCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem, true);
  const mosueChangeItemHandler = e => {
    const change = e.deltaY / 100;
    change > 0 ? addItemToCart(cartItem) : removeItemFromCart(cartItem);
  };

  return (
    <Container>
      <ImgContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImgContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity
        onMouseOver={() => blockScroll()}
        onMouseOut={() => allowScroll()}
        onWheel={mosueChangeItemHandler}>
        <Arrow onClick={decreaseItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price * quantity}</BaseSpan>
      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </Container>
  );
};
