import React from 'react';
import styles from './navbar.module.css';
import cart from '../../assets/cart2.png';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports'

const Navbar = () => {

        const navigation = useNavigate()
        const addToCart = useSelector(state => state.cartItems)
        return (
                <>
                        <div className={styles.navbarCss}>
                        <div>
                                        <h3>Hungry</h3>
                                </div>
                                <div className={styles.leftdiv}>
                                        <p><Link to="/" className={styles.linkmenu}>Home</Link> </p>
                                        <p> <Link to="/about-us" className={styles.linkmenu}>About</Link></p>

                                </div>

                                <div className={styles.rightdiv}>
                                        <a onClick={() => navigation('/cart')} ><img src={cart} /></a>
                                        <span className={styles.counter}>{addToCart.length}</span>

                                        <p>  <Link to="/profile" className={styles.linkmenu}>Profile</Link></p>



                                </div>
                        </div>
                </>
        )
}


export default Navbar;