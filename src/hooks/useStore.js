import create from 'zustand';

import {products} from '../../backend/db';

const useStore = create(set => ({
	products,
	changeQuantity: (id, change) => {
		set(state => {
			return {
				products: state.products.map(product =>
					product.id === id ? {...product, quantity: product.quantity + change} : product
				),
			};
		});
	},
	clearCart: () => {
		set(() => {
			return {
				products,
			};
		});
	},
}));

export default useStore;
