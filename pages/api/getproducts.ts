// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '@/middleware/mongoose';
import Product from '@/models/Product';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    connectDB();
    let p1 = await Product.find();
    res.status(200).json({ p1 })
}
