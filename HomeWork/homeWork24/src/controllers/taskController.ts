import {Request, Response } from "express";
import User from "../models/userSchema.js";

// Создание пользователя
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, age }: { name: string, age?: number } = req.body;
    const user = await User.create(req.body);
    res.status(201).json({message: 'User created successfully', user});
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
}

// Получение всех пользователей

export const getUsers = async (_: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
}