import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import {
  addItemToCart,
  removeItemFromCart
} from '../../store/cart/cart.action';
import { useScrollBlock } from '../../utils/useScrollBlock.utils';
import { CartItem } from '../../store/cart/cart.types';
import {
  Container,
  ImgContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton
} from './checkout-item.styles';
import { FC } from 'react';

type CheckoutItemProps = {
  cartItem: CartItem
}

export const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const [blockScroll, allowScroll] = useScrollBlock();

  const increaseItemHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const decreaseItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem, true));
  const mosueChangeItemHandler = (event: WheelEvent) => {
    const change = event.deltaY / 100;
    change > 0 ? increaseItemHandler() : decreaseItemHandler();
  };

//what is the problem with onWheel property?

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
