import { Request, Response } from 'express';
import { Category } from '../../models/Category';
export async function createCategory(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    if (!name || !icon) {
      return res.status(400).json({ error: 'Name and icon are required' });
    }

    const category = await Category.create({ name, icon });
    res.status(201).json(category);
  } catch {
    res.sendStatus(500);
  }
}
