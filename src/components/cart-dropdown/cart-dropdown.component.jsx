import { Button } from '../button/button.component';
import './cart-dropdown.styles.scss';

export const CartDropdown = () => {

  return (
    <div className='cart__dropdown'>
      <div className='cart__items'>
        <Button>Go to checkout</Button>
      </div>
    </div>
  )
}