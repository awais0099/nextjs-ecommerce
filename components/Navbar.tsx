import React, { useRef } from 'react';
import {BsCart4} from 'react-icons/bs';
import Link from 'next/link';
import {RxCross2} from 'react-icons/rx';
import {HiPlusSm} from 'react-icons/hi';
import {HiMinusSm} from 'react-icons/hi';

type NavbarProps = {
	cart: {itemCode: string, qty: number, price: number, size:number, variant: string}[],
	onClearCart: () => void,
	onAddToCart: (cartItem: {itemCode: string, qty: number, price: number, size:number, variant: string}) => void,
	onDecrementProductQty: (cartItem: {itemCode: string, qty: number, price: number, size:number, variant: string}) => void
}

const Navbar: React.FC<NavbarProps> = ({cart, onClearCart, onAddToCart, onDecrementProductQty}) => {
	const toggleCartRef = useRef<HTMLDivElement>(null);

	console.log(cart);

	function handleToggleCart() {
		if (toggleCartRef.current?.classList.contains('translate-x-full')) {
			toggleCartRef.current.classList.remove('translate-x-full');
			toggleCartRef.current.classList.add('translate-x-0');
		} else if (toggleCartRef.current?.classList.contains('translate-x-0')) {
			toggleCartRef.current.classList.remove('translate-x-0');
			toggleCartRef.current.classList.add('translate-x-full');
		}
	}

	const handleIncrementItemQuantity = () => {
		console.log('increment quantity');
		onAddToCart({itemCode: 'itemcode23', qty: 1, price: 10, size: 40, variant: 'red'});
	}

	const handleDecrementItemQuantity = () => {
		console.log('decrement quantity');
		onDecrementProductQty({itemCode: 'itemcode23', qty: 1, price: 10, size: 40, variant: 'red'});
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

			<div ref={toggleCartRef} className='cart-container p-2 w-72 bg-neutral-700 text-white absolute top-0 right-0 translate-x-full'>
				<div className='text-right mb-4'>
					<RxCross2 onClick={handleToggleCart} className='text-xl inline-block cursor-pointer' />
				</div>

				<button onClick={onClearCart}>Clear All</button>

				{cart.length === 0 ? <p>No products in the cart</p>:''}

				{cart.map((cartItem) => (
					<div key={cartItem.itemCode} className='cart-items-list'>
						<div className='cart-item flex items-center justify-between'>
							<p>{cartItem.itemCode}</p>
							<p className='flex justify-center items-center gap-2'>
								<HiPlusSm className='cursor-pointer' onClick={handleIncrementItemQuantity} />
								<span>{cartItem.qty}</span>
								<HiMinusSm className='cursor-pointer' onClick={handleDecrementItemQuantity} />
							</p>
						</div>
					</div>
				))}

			</div>
		</div>
	);
}

export default Navbar;