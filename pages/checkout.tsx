import React from 'react';
import {RxCross2} from 'react-icons/rx';
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

	return (
		<div className="container m-auto">
			<h1 className="font-bold text-xl my-8 text-center">Checkout</h1>
			<h2 className="font-semibold text-xl">1. Delivery Details</h2>
			<div className="mx-auto flex">
				<div className="px-2 w-1/2">
					<div className="mb-4">
				        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
				        <input
				        	type="text"
				        	id="name"
				        	name="email"
				        	className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
			      	</div>
				</div>

				<div className="px-2 w-1/2">
					<div className="mb-4">
				        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
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
				        <label for="address" className="leading-7 text-sm text-gray-600">Address</label>
				        <textarea name="address" id="address" cols="30" rows="2"
				        	className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				        ></textarea>
			      	</div>
				</div>

			<div className="mx-auto flex">
				<div className="px-2 w-1/2">
					<div className="mb-4">
				        <label for="phone" className="leading-7 text-sm text-gray-600">Phone</label>
				        <input
				        	type="phone"
				        	id="phone"
				        	name="phone"
				        	className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
			      	</div>
				</div>

				<div className="px-2 w-1/2">
					<div className="mb-4">
				        <label for="city" className="leading-7 text-sm text-gray-600">City</label>
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
				        <label for="state" className="leading-7 text-sm text-gray-600">State</label>
				        <input
				        	type="text"
				        	id="state"
				        	name="state"
				        	className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
			      	</div>
				</div>

				<div className="px-2 w-1/2">
					<div className="mb-4">
				        <label for="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
				        <input
				        	type="text"
				        	id="pincode"
				        	name="pincode"
				        	className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
			      	</div>
				</div>
			</div>
			<h2 className="font-semibold text-xl">3. Review Cart</h2>

			<div className='cart-container p-2 w-72 bg-neutral-700 text-white absolute top-0 right-0 translate-x-full'>
				<div className='text-right mb-4'>
					<RxCross2 onClick='' className='text-xl inline-block cursor-pointer' />
				</div>

				<button onClick=''>Clear All</button>

				{cart.cartItem && cart.cartItem.length === 0 ? <p>No products in the cart</p>:''}

				{cart.cartItem && cart.cartItem.map((cartItem) => (
					<div key={cartItem.itemCode} className='cart-items-list my-1'>
						<div className='cart-item flex items-center justify-between'>
							<p>{cartItem.itemCode}</p>
							<p className='flex justify-center items-center gap-2'>
								<HiPlusSm className='cursor-pointer' onClick={() => {}} />
								<span>{cartItem.qty}</span>
								<HiMinusSm className='cursor-pointer' onClick={() => {}} />
							</p>
						</div>
					</div>
				))}
				<hr />
				<p className='my-1'>Total Quantity: {cart.totalQuantity}</p>
				<p className='my-1'>Total Price: {cart.totalPrice}</p>
			</div>
		</div>
	)
}

export default Checkout;