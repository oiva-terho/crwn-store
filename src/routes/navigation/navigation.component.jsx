import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { signOutStart } from '../../store/user/user.action';

import { Nav, LogoLink, Links, NavLink } from './navigation.styles';

export const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());
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
              {/* { currentUser.displayName 
              ? <NavLink as='span'>{currentUser.displayName}</NavLink>
              : null } */}
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
