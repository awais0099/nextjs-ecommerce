import { useState, useEffect } from 'react';

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



export default function App({ Component, pageProps }: AppProps) {

	const [cart, setCart] = useState<
		{itemCode: string, qty: number, price: number, size:number, variant: string}[]
	>([{itemCode:'itemcode', qty: 2, price: 123, size: 40, variant: 'red'}]);

	useEffect(() => {
		// if there are any data store and u want to load it
	}, []);

	function addToCart(itemCode: string, qty: number, price: number, size:number, variant: string) {
	
		const updatedcart = cart.find(item => {
			return item.itemCode === itemCode;
		})

		if (Object.keys(updatedcart).length === 0) {
			setCart((prevCart) => {
				return [...prevCart, {itemCode, qty, price, size, variant}]
			});
		} else {
			console.log('item aleary');
		}
	}

	function onClearCart() {
		console.log('clear cart');
		setCart([])
	}

  return (
  	<>
  		<Navbar cart={cart} onClearCart={onClearCart} />
  		<Component {...pageProps} onAddToCart={addToCart} />
  		<Footer />
  	</>
  );
}
