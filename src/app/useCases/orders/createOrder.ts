import { Request, Response } from 'express';
import { Order } from '../../models/Order';
export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;
    if (!table || !products) {
      return res.status(400).json({ error: 'Table and products are required' });
    }
    const order = await Order.create({ table, products });
    res.status(201).json(order);
  } catch {
    res.sendStatus(500);
  }
}
