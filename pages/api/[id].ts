import Product from "@/models/Product";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST' || req.method == 'GET') {
        let id = req.query.id;
        let p = await Product.findByIdAndUpdate(id, {title: 'title updated'});
        p.save();
        res.status(200).json({success: "success", product: p});
    }
}