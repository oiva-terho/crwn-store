import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <nav className="nav">
        <Link className="nav__logo-link" to="/">
          <CrownLogo className="nav__logo" />
        </Link>
        <div className="nav__links">
          <Link className="nav__link" to="/shop">
            SHOP
          </Link>
          {currentUser 
            ? (<>
                <span className="nav__link" onClick={signOutUser}>SIGN OUT</span>
                <span className="nav__link">{currentUser.displayName}</span>
              </>)
            : (<Link className="nav__link" to="/auth">
                SIGN IN
              </Link>)
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </nav>
      <Outlet />
    </>
  );
};
