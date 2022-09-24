import "./cart-item.styles.scss";

export const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="cart-item__details">
        <span className="cart-item__name">{name}</span>
        <span className="cart-item__price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
