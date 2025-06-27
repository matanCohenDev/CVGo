import express from 'express';
import { User } from '../models/users_model';
import UserModel from '../models/users_model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const createNewUser = async (req: Request, res: Response) : Promise<void> => {
    const { name, email, password, jobTitle } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({ error: 'Name, email, and password are required.' });
        return;
    }

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            res.status(400).json({ error: 'User already exists.' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
            jobTitle
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully.' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

const deleteUser = async (req: Request, res: Response) : Promise<void> => {
    const { userId } = req.params;

    if (!userId) {
         res.status(400).json({ error: 'User ID is required.' });
         return;
    }

    try {
        const user = await UserModel.findByIdAndDelete(userId);
        if (!user) {
             res.status(404).json({ error: 'User not found.' });
             return;
        }
        res.status(200).json({ message: 'User deleted successfully.' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

const updateUser = async (req: Request, res: Response) : Promise<void> => {
    const { userId } = req.params;
    const { name, email, jobTitle } = req.body;

    if (!userId) {
         res.status(400).json({ error: 'User ID is required.' });
         return;
    }

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(userId, { name, email, jobTitle }, { new: true });
        if (!updatedUser) {
             res.status(404).json({ error: 'User not found.' });
            return;
        }
        res.status(200).json({ message: 'User updated successfully.', user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

const getUser = async (req: Request, res: Response) : Promise<void> => {
    const { userId } = req.params;

    if (!userId) {
        res.status(400).json({ error: 'User ID is required.' });
        return;
    }

    try {
        const user = await UserModel.findById(userId);
        if (!user) {
            res.status(404).json({ error: 'User not found.' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}

const usersController = {
    createNewUser,
    deleteUser,
    updateUser,
    getUser,
    getAllUsers
};

export default usersController;