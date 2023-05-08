import { useState, useEffect } from 'react';

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface CartItemType {
	itemCode: string,
	qty: number,
	price: number,
	subtotal: number,
	size: number,
	variant: string
}

interface CartType {
	cartItem: CartItemType[],
	totalQuantity: number,
	totalPrice: number
}



export default function App({ Component, pageProps }: AppProps) {

	// const [cart, setCart] = useState<{ itemCode: string, qty: number, price: number, size: number, variant: string }[]>([]);
	const [cart, setCart] = useState<CartType>({
		cartItem: [],
		totalQuantity: 0,
		totalPrice: 0
	});

	useEffect(() => {
		console.log('use eff');
		// console.log(localStorage.getItem("cart"));
		try {
			if (localStorage.getItem("cart")) {
				setCart(JSON.parse(localStorage.getItem("cart") as string));
			}
		} catch (error) {
			console.log("_app:useEffect");
			console.log(error);
			localStorage.clear();
		}
	}, []);

	const saveCart = (cart: CartType) => {
		/* storing cart or cart data in localstorage */
		localStorage.setItem("cart", JSON.stringify(cart));
	}

	function addToCart(cartItem: CartItemType) {
		console.log('==========testAddtocart==========');
		const newCart = { ...cart };

		const isItemExist = newCart.cartItem.findIndex(item => {
			return item.itemCode === cartItem.itemCode;
		});

		if (isItemExist == -1) {
			setCart((prevCart) => {
				const tempCart = {
					cartItem: [...prevCart.cartItem, { ...cartItem }],
					totalQuantity: prevCart.totalQuantity,
					totalPrice: prevCart.totalPrice,
				};

				let tqsum = 0;
				let tpsum = 0;
				tempCart.cartItem.forEach(item => {
					tqsum = tqsum + item.qty;
					tpsum = tpsum + item.price;
				});

				console.log("tqsum", tqsum);
				tempCart.totalPrice = tpsum;
				tempCart.totalQuantity = tqsum;

				return { ...tempCart };
			});
		} else {
			newCart.cartItem[isItemExist].qty = newCart.cartItem[isItemExist].qty + 1;
			// newCart.cartItem[isItemExist].price = newCart.cartItem[isItemExist].price + cartItem.price;

			let tqsum = 0;
			let tpsum = 0;

			newCart.cartItem.forEach(item => {
				tqsum = tqsum + item.qty;
				tpsum = tqsum * item.price;
			});

			newCart.totalQuantity = tqsum;
			newCart.totalPrice = tpsum;
			setCart({ ...newCart });
		}
		saveCart({ ...newCart })
	}

	function decrementProductQtyHandler(cartItem: CartItemType) {
		console.log('DecrementProductQty handler');
		// ********************************************************
		const newCart = { ...cart };

		const isItemExist = newCart.cartItem.findIndex(item => {
			return item.itemCode === cartItem.itemCode;
		});

		newCart.cartItem[isItemExist].qty = newCart.cartItem[isItemExist].qty - 1;
		let tqsum = 0;
		let tpsum = 0;
		if (newCart.cartItem[isItemExist].qty !== 0) {
	
			newCart.cartItem.forEach(item => {
				tqsum = tqsum + item.qty;
				tpsum = tqsum * item.price;
			});
	
			newCart.totalQuantity = tqsum;
			newCart.totalPrice = tpsum;
		} else {
			newCart.cartItem = newCart.cartItem.filter(item => {
				return item.itemCode !== cartItem.itemCode;
			});
			newCart.cartItem.forEach(item => {
				tqsum = tqsum + item.qty;
				tpsum = tqsum * item.price;
			});
	
			newCart.totalQuantity = tqsum;
			newCart.totalPrice = tpsum;
		}
		saveCart({ ...newCart });
		setCart({ ...newCart });
	}

	function onClearCart() {
		console.log('clear cart');
		saveCart({ cartItem: [], totalQuantity: 0, totalPrice: 0 });
		setCart({ cartItem: [], totalQuantity: 0, totalPrice: 0 });
	}

	return (
		<>
			<Navbar
				cart={cart}
				onClearCart={onClearCart}
				onAddToCart={addToCart}
				onDecrementProductQty={decrementProductQtyHandler}
			/>
			<Component
				{...pageProps}
				cart={cart}
				onClearCart={onClearCart}
				onAddToCart={addToCart}
				onDecrementProductQty={decrementProductQtyHandler}
			/>
			<Footer />
		</>
	);
}
