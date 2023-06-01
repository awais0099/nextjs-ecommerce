import { NextApiRequest, NextApiResponse } from "next";
import Product from "@/models/Product";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST' || req.method === 'GET') {

        res.status(200).json({success: req.body})
        let product = await Product.updateOne({_id: req.body.id}, {$set: {title: 'udpated title'} });
    }
}