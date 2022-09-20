import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </nav>
      <Outlet />
    </>
  );
};
