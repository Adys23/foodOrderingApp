import Modal from '../UI/Modal/Modal';

import classes from './Cart.module.css';

const Cart = (props) => {
	const cartItems = (
		<ul className={classes['cart-items']}>
			{[
				{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
				{ id: 'c2', name: 'Dumplings', amount: 3, price: 7.5 },
				{ id: 'c3', name: 'Garlic bread', amount: 5, price: 6.0 },
				{ id: 'c4', name: 'Pizza', amount: 1, price: 30.99 },
				{ id: 'c5', name: 'Hamburger', amount: 1, price: 12.99 },
				{ id: 'c6', name: `Burrito`, amount: 3, price: 7.99 },
			].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);

	return (
		<Modal>
			{cartItems}
			<div>
				<span>Total amount</span>
				<span>33.33</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
