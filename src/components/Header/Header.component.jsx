import React from "react";
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'

import './Header.styles.scss';

const Header = ({ currentUser }) => (

    <div className='header'>
         
            <Link className='logo-container' to ="/">
            <Logo className='logo' />
                </Link>
                <div ><h1 className='abc'>HIMANSHU CLOTHING</h1></div>
                <div className='options'>
                    <Link className='option' to ='/shop'>
                        SHOP
                        </Link>
                        <Link className='option' to ='/shop'>
                        CONTACT
                        </Link>
                        {

                            currentUser ?
                            <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                            :
                            <Link className='option' to = '/signin'>SIGN IN</Link> //ternary operator
                        }
                        


                    </div>
        </div>
);

export default Header;