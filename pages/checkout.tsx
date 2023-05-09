import React from 'react';
import {HiPlusSm} from 'react-icons/hi';
import {HiMinusSm} from 'react-icons/hi';

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

type CheckoutProps = {
	cart: CartType,
	onClearCart: () => void,
	onAddToCart: (cartItem: CartItemType) => void,
	onDecrementProductQty: (cartItem: CartItemType) => void
}

const Checkout: React.FC<CheckoutProps> = ({cart, onClearCart, onAddToCart, onDecrementProductQty}) => {
	console.log("checkout.tsx");
	console.log(cart);

	const handleIncrementItemQuantity = (item: CartItemType) => {
		console.log('increment quantity');
		onAddToCart(item);
	}

	const handleDecrementItemQuantity = (item: CartItemType) => {
		console.log('decrement quantity navbar.tsx');
		onDecrementProductQty(item);
	}

	return (
		<div className="container m-auto">
			<h1 className="font-bold text-xl my-8 text-center">Checkout</h1>
			<h2 className="font-semibold text-xl">1. Delivery Details</h2>
			<div className="mx-auto flex">
				<div className="px-2 w-1/2">
					<div className="mb-4">
				        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
				        <input
				        	type="text"
				        	id="name"
				        	name="email"
				        	className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
			      	</div>
				</div>

				<div className="px-2 w-1/2">
					<div className="mb-4">
				        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
				        <input
				        	type="email"
				        	id="email"
				        	name="email"
				        	className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
			      	</div>
				</div>
			</div>
			<div className="px-2 w-full">
					<div className="mb-4">
				        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
				        <textarea name="address" id="address" cols={30} rows={2}
				        	className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				        ></textarea>
			      	</div>
				</div>

			<div className="mx-auto flex">
				<div className="px-2 w-1/2">
					<div className="mb-4">
				        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
				        <input
				        	type="phone"
				        	id="phone"
				        	name="phone"
				        	className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
			      	</div>
				</div>

				<div className="px-2 w-1/2">
					<div className="mb-4">
				        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
				        <input
				        	type="text"
				        	id="city"
				        	name="city"
				        	className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
			      	</div>
				</div>

			</div>

			<div className="mx-auto flex">
				<div className="px-2 w-1/2">
					<div className="mb-4">
				        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
				        <input
				        	type="text"
				        	id="state"
				        	name="state"
				        	className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
			      	</div>
				</div>

				<div className="px-2 w-1/2">
					<div className="mb-4">
				        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
				        <input
				        	type="text"
				        	id="pincode"
				        	name="pincode"
				        	className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
			      	</div>
				</div>
			</div>
			<h2 className="font-semibold text-xl">3. Review Cart</h2>

			<div className='bg-teal-100 p-4'>
				
				<button onClick={onClearCart} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Clear All</button>

				{cart.cartItem && cart.cartItem.length === 0 ? <p>No products in the cart</p>:''}

				{cart.cartItem.map((cartItem) => (
					<div key={cartItem.itemCode} className='cart-items-list my-1 bg-teal-500 py-1 px-2'>
						<div className='cart-item flex justify-between text-teal-800'>
							<p className='text-teal-100'>{cartItem.itemCode}</p>
							<p className='flex justify-center items-center gap-2'>
								<HiPlusSm className='cursor-pointer font-bold bg-teal-100' onClick={() => {handleIncrementItemQuantity(cartItem)}} />
								<span className="text-teal-100">{cartItem.qty}</span>
								<HiMinusSm className='cursor-pointer font-bold bg-teal-100' onClick={() => {handleDecrementItemQuantity(cartItem)}} />
							</p>
						</div>
					</div>
				))}
				<hr />
				<p className='my-1 font-semibold'>Total Quantity: {cart.totalQuantity}</p>
				<p className='my-1 font-semibold'>Total Price: {cart.totalPrice}</p>
			</div>
		</div>
	)
}

export default Checkout;