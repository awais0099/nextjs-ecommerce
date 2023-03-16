import { useState, useEffect } from 'react';

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function App({ Component, pageProps }: AppProps) {

	const [cart, setCart] = useState<{itemCode: string, qty: number, price: number, size: number, variant: string}[]>([]);

	useEffect(() => {
		console.log('use eff');
		// console.log(localStorage.getItem("cart"));
		
		if (localStorage.getItem("cart")) {
			try {
				setCart(JSON.parse(localStorage.getItem("cart")));
			} catch(error) {
				console.log("_app:useEffect");
				console.log(error);
				localstorage.clear();
			}
		}

	}, []);

	const saveCart = (newCart) => {
		/* storing cart or cart data in localstorage */
		localStorage.setItem("cart", JSON.stringify(newCart));
	}

	function addToCart(cartItem: {itemCode: string, qty: number, price: number, size:number, variant: string}) {
		console.log('_app:addToCart');		
		
		const newCart = [...cart];

		const updatedcart = newCart.findIndex(item => {
			return item.itemCode === cartItem.itemCode;
		});

		if (updatedcart == -1) {
			setCart((prevCart) => {
				return [...prevCart, {...cartItem}]
			});
		} else {
			newCart[updatedcart].qty = newCart[updatedcart].qty + 1;
			setCart(newCart);
		}
		saveCart(newCart)
	}

	function onDecrementProductQty(cartItem: {itemCode: string, qty: number, price: number, size:number, variant: string}) {
		console.log('onDecrementProductQty');

		const updatedcart = cart.findIndex(item => {
			return item.itemCode === cartItem.itemCode;
		});

		if (updatedcart !== -1) {

			if (cartItem.qty === 1 && Math.sign(cartItem.qty === 1) !== -1) {
				let newCart = cart.filter(item => (item.itemCode != cartItem.itemCode));
				setCart(newCart);
			}
		}
	}

	function onClearCart() {
		console.log('clear cart');
		setCart([]);
	}

  return (
  	<>
  		<Navbar
  			cart={cart}
  			onClearCart={onClearCart}
  			onAddToCart={addToCart}
  			onDecrementProductQty={onDecrementProductQty}
  		/>
  		<Component {...pageProps} onAddToCart={addToCart} />
  		<Footer />
  	</>
  );
}
