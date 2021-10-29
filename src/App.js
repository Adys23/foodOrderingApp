import { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
	const [cartVisible, setCartVisibility] = useState(false);

	const cartVisibilityHandler = () => {
		setCartVisibility(!cartVisible);
	};

	return (
		<>
			{cartVisible && <Cart onHideCart={cartVisibilityHandler} />}
			<Header onShowCart={cartVisibilityHandler} />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
