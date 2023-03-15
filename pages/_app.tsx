import { useState, useEffect } from 'react';

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function App({ Component, pageProps }: AppProps) {

	const [cart, setCart] = useState<{itemCode: string, qty: number, price: number, size: number, variant: string}[]>([]);

	useEffect(() => {
		// if there are any data store and u want to load it
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

	console.log({cart});

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

	function onDecrementProductQty() {
		console.log('onDecrementProductQty');
	}

	function onClearCart() {
		console.log('clear cart');
		setCart([])
	}

  return (
  	<>
  		<Navbar cart={cart} onClearCart={onClearCart} onAddToCart={addToCart} />
  		<Component {...pageProps} onAddToCart={addToCart} />
  		<Footer />
  	</>
  );
}
