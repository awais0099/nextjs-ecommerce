import Product from "@/models/Product";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == 'POST' || req.method == 'GET') {
        let p = new Product({
            title: "req.body[i].tilte",
            slug: "req.body[i].slug5",
            desc: "req.body[i].desc",
            img: "req.body[i].img",
            category: "req.body[i].category",
            size: "req.body[i].size",
            color: "req.body[i].color",
            price: 111,
            availableQty: 33
        });
        await p.save();
        res.status(200).json({success: "success"});
    }
}