import React from 'react';
import {connect} from 'react-redux';


import './header.styles.scss';

import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebase.utils.js';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors'

import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ({ currentUser, hidden}) => (
<div className='header'>
    <Link className='logo-container' to="/">
        <Logo className='logo' />
    </Link>
    <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='/shop'>
            CONTACT
        </Link>
        {
            currentUser ?
            <div className='option' onClick={ () => auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/sign-in'> SIGN IN</Link>
        }
    <CartIcon/>
    </div>
    {hidden ? null : <CartDropdown />}
   
</div>
)

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);