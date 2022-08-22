import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	products: [
		{
			id: nanoid(),
			category: 'coffee',
			name: 'Cafe Crema',
			price: '4,50 €',
			imgUrl: 'https://images.unsplash.com/photo-1506372023823-741c83b836fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			inCart: false,
		},
		{
			id: nanoid(),
			category: 'tea',
			name: 'Green Tea',
			price: '3,90 €',
			imgUrl: 'https://images.unsplash.com/photo-1606377695906-236fdfcef767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
			inCart: false,
		},
		{
			id: nanoid(),
			category: 'coffee',
			name: 'Latte Macchiato',
			price: '4,90 €',
			imgUrl: 'https://images.unsplash.com/photo-1599398054066-846f28917f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			inCart: false,
		},
		{
			id: nanoid(),
			category: 'tea',
			name: 'Black Tea',
			price: '3,90 €',
			imgUrl: 'https://images.unsplash.com/photo-1627828094454-accc9a7c20e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
			inCart: false,
		},
		{
			id: nanoid(),
			category: 'coffee',
			name: 'Espresso',
			price: '4,00 €',
			imgUrl: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			inCart: false,
		},
		{
			id: nanoid(),
			category: 'tea',
			name: 'Rooibos Tea',
			price: '3,90 €',
			imgUrl: 'https://images.unsplash.com/photo-1597318181412-49af291f617f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			inCart: false,
		},
		{
			id: nanoid(),
			category: 'coffee',
			name: 'Black Coffee',
			price: '3,50 €',
			imgUrl: 'https://images.unsplash.com/photo-1621267860478-dbdd589372db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			inCart: false,
		},
		{
			id: nanoid(),
			category: 'tea',
			name: 'Earl Grey Tea',
			price: '4,10 €',
			imgUrl: 'https://images.unsplash.com/photo-1522520788364-9eafb7a93216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
			inCart: false,
		},
		{
			id: nanoid(),
			category: 'coffee',
			name: 'Iced Mocca',
			price: '4,90 €',
			imgUrl: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			inCart: false,
		},
		{
			id: nanoid(),
			category: 'tea',
			name: 'Iced Tea - Lime',
			price: '4,20 €',
			imgUrl: 'https://images.unsplash.com/photo-1501199532894-9449c0a85a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
			inCart: false,
		},
	],

	addToCart: data => {
		set(state => {
			return {
				products: [...state.products, {...data, id: nanoid()}],
			};
		});
	},

	deleteFromCart: _id => {
		set(state => {
			return {
				cartProducts: state.products.filter(product => product.id !== _id),
			};
		});
	},

	clearCart: () => {
		set(() => {
			return {
				products: [],
			};
		});
	},

	setInCart: id => {
		set(state => {
			return {
				products: state.products.map(product =>
					product.id === id ? {...product, inCart: !product.inCart} : product
				),
			};
		});
	},
}));

export default useStore;
