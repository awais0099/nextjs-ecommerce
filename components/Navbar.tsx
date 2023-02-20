import React from 'react';
import {BsCart4} from 'react-icons/bs';
import Link from 'next/link';

const Navbar: React.FC<> = () => {
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
				<BsCart4 className='text-2xl cursor-pointer' />
			</div>
		</div>
	);
}

export default Navbar;