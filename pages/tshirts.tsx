import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';

import Product from '@/models/Product';
import mongoose from 'mongoose';
import connectDB from '@/middleware/mongoose';

interface IProduct {
  _id: string;
  title: string;
  slug: string;
  desc: string;
  img: string;
  category: string;
  size: string;
  color: string;
  price: number;
  availableQty: number;
}

interface PageProps {
  products: IProduct[];
}


const Tshirts: React.FC<PageProps> = ({products}) => {
  console.log(products);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            { products.map((product) => {
              return (
                <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link href='/product/product-name-slug'>
                    <div className="block relative rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src="https://m.media-amazon.com/images/I/710o0VupScL._AC_UX522_.jpg" />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                      <p className="mt-1">$16.00</p>
                      <p className="mt-1">S, M, L, XL, XXL</p>
                    </div>
                  </Link>
                </div>
              );
            })}

          </div>
        </div>
      </section>
    </>
  )
}


export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  // Fetch data from an API or perform any other async operations
  // const response = await fetch('');
  const data = {}//await response.json();
  console.log("****** get server side ufn ******");
  if (mongoose.connection.readyState == 0) {
    connectDB();
  }
  let products = await Product.find()
  // Return the fetched data as props
  return {
    props: {
      products: JSON.parse(JSON.stringify(products))
    },
  };
};

export default Tshirts;