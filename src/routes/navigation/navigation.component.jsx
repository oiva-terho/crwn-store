import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { Nav, LogoLink, Links, NavLink } from './navigation.styles';

export const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <Nav>
        <LogoLink to='/'>
          <CrownLogo />
        </LogoLink>
        <Links>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <>
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
              <NavLink as='span'>{currentUser.displayName}</NavLink>
            </>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </Links>
        {isCartOpen && <CartDropdown />}
      </Nav>
      <Outlet />
    </>
  );
};
