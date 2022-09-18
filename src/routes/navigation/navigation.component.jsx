import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

export const Navigation = () => {
    return(
        <Fragment>
            <div className='nav'>
                <Link className='nav__logo-link' to='/'>
                    <CrownLogo className='nav__logo' />
                </Link>
                <div className='nav__links'>
                    <Link className='nav__link' to='/shop'>SHOP</Link>
                    <Link className='nav__link' to='/sign-in'>SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}