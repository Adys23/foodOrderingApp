import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem/CartItem';

import classes from './Cart.module.css';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {};

	const cartItemAddHandler = (item) => {};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					price={item.price}
					name={item.name}
					amount={item.amount}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	return (
		<Modal onHide={props.onHideCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onHideCart}>
					Close
				</button>
				{hasItems && (
					<button className={classes.button} onClick={props.onHideCart}>
						Order
					</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
