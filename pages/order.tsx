import React from 'react';

const Order: React.FC<> = () => {
	return (
		<section className="text-gray-600 body-font overflow-hidden">
			 <div className="container px-5 py-24 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
      				<div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
      					<h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
				        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #9345</h1>
				        <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
      				
				        <div class="flex mb-4">
				          <span class="flex-grow py-2 text-lg">Item Description</span>
				          <span class="flex-grow py-2 text-lg">Quantity</span>
				          <span class="flex-grow py-2 text-lg">Item Total</span>
				        </div>

				        <div class="flex py-2">
				          <span class="flex-grow text-gray-500">unknow item</span>
				          <span class="flex-grow text-gray-500">2</span>
				          <span class="flex-grow ml-auto text-gray-900">$8</span>
				        </div>

				        <div class="flex py-2">
				          <span class="flex-grow text-gray-500">unknow item</span>
				          <span class="flex-grow text-gray-500">2</span>
				          <span class="flex-grow ml-auto text-gray-900">$8</span>
				        </div>

				        <div class="flex py-2">
				          <span class="flex-grow text-gray-500">unknow item</span>
				          <span class="flex-grow text-gray-500">2</span>
				          <span class="flex-grow ml-auto text-gray-900">$8</span>
				        </div>

				        <div class="flex text-lg font-medium mt-4 py-2">
				          <span class="flex-grow text-gray-500">Total Quantity: 4</span>
				          <span class="flex-grow text-gray-500">Total Price: 30</span>
				        </div>
				        <div>
				        	<button className="bg-blue-500 py-2 px-3 rounded text-white">Track Order</button>
				        </div>
      				</div>
      				<img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
      			</div>
			</div>  
		</section>
	);
}

export default Order;