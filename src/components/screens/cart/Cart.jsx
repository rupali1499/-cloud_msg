import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { ADD_TO_CART } from '../../../REdux/action/index';
import styles from './cart.module.css';



const Cart = () => {

	const addToCart = useSelector(state => state);



	useEffect(() => {
		console.log(addToCart, 'cart')

		// setProductArray([...productArray, addToCart])
	}, [addToCart])



	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.heading}>SHOPPING CART</h1>
				{addToCart?.cartItems.map(p => (
					<div className={styles.cartItems} key={''}>
						<img src={p.image} />
						<h1>Title: {p.name}</h1>
						<p>quantity={p.quantity}</p>
						<p>Address:{p.address}</p>


					</div>
				))

				}
			</div>


		</>
	)
}
export default Cart;