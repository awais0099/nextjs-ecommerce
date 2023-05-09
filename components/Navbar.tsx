import React, { useRef } from 'react';
import {BsCart4} from 'react-icons/bs';
import Link from 'next/link';
import {RxCross2} from 'react-icons/rx';
import {HiPlusSm} from 'react-icons/hi';
import {HiMinusSm} from 'react-icons/hi';

interface CartItemType { itemCode: string, qty: number, price: number, subtotal: number, size: number, variant: string }

interface CartType {
	cartItem: CartItemType[],
	totalQuantity: number,
	totalPrice: number
}

type NavbarProps = {
	cart: CartType,
	onClearCart: () => void,
	onAddToCart: (cartItem: CartItemType) => void,
	onDecrementProductQty: (cartItem: CartItemType) => void
}

const Navbar: React.FC<NavbarProps> = ({cart, onClearCart, onAddToCart, onDecrementProductQty}) => {
	const toggleCartRef = useRef<HTMLDivElement>(null);

	function handleToggleCart() {
		if (toggleCartRef.current?.classList.contains('hidden')) {
			toggleCartRef.current.classList.remove('hidden');
			toggleCartRef.current.classList.add('block');
		} else if (toggleCartRef.current?.classList.contains('block')) {
			toggleCartRef.current.classList.remove('block');
			toggleCartRef.current.classList.add('hidden');
		}
	}

	const handleIncrementItemQuantity = (item: CartItemType) => {
		console.log('increment quantity');
		onAddToCart(item);
	}

	const handleDecrementItemQuantity = (item: CartItemType) => {
		console.log('decrement quantity navbar.tsx');
		onDecrementProductQty(item);
	}

	return (
		<div className='flex flex-col gap-y-5 sm:flex-row sm:gap-x-5 p-5 items-center justify-center'>
			<Link href ='/'>
				<div className='logo'>
					<img
						src="/next.svg"
						alt=""
						width='100'
						height='400'
						className='cursor-pointer'
					/>
				</div>
			</Link>
			<div className="nav flex-1">
				<ul className='flex gap-5'>
					<li>
						<Link href='/tshirts'>TShirts</Link>
					</li>
					<li>
						<Link href='hoodies'>Hoodies</Link>
					</li>
					<li>
						<Link href='/stickers'>Sticker</Link>
					</li>
					<li>
						<Link href='mugs'>Mugs</Link>
					</li>
				</ul>
			</div>
			<div className='cart'>
				<BsCart4 onClick={handleToggleCart} className='text-2xl cursor-pointer' />
			</div>

			<div ref={toggleCartRef} className='cart-container z-[1] p-2 w-72 bg-neutral-700 text-white absolute top-0 right-0 hidden'>
				<div className='text-right mb-4'>
					<RxCross2 onClick={handleToggleCart} className='text-xl inline-block cursor-pointer' />
				</div>

				<button onClick={onClearCart}>Clear All</button>

				{cart.cartItem && cart.cartItem.length === 0 ? <p>No products in the cart</p>:''}

				{cart.cartItem && cart.cartItem.map((cartItem) => (
					<div key={cartItem.itemCode} className='cart-items-list my-1'>
						<div className='cart-item flex items-center justify-between'>
							<p>{cartItem.itemCode}</p>
							<p className='flex justify-center items-center gap-2'>
								<HiPlusSm className='cursor-pointer' onClick={() => {handleIncrementItemQuantity(cartItem)}} />
								<span>{cartItem.qty}</span>
								<HiMinusSm className='cursor-pointer' onClick={() => {handleDecrementItemQuantity(cartItem)}} />
							</p>
						</div>
					</div>
				))}
				<hr />
				<p className='my-1'>Total Quantity: {cart.totalQuantity}</p>
				<p className='my-1'>Total Price: {cart.totalPrice}</p>
				<Link href='/checkout' className="inline-flex items-center h-8 px-4 m-2 text-sm text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Checkout</Link>
			</div>
		</div>
	);
}

export default Navbar;