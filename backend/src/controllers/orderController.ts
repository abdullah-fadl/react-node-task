import { Request, Response } from 'express';
import Order from '../models/Order';



// Fetch all orders
export const getOrderByID = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const order = await Order.findById(id);
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders' });
    }
};

// Fetch all orders
export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders' });
    }
};

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
    try {
        const { customerName, product, quantity, price, status } = req.body;
        const totalPrice = quantity * price;
        const newOrder = new Order({ customerName, product, quantity, price, totalPrice, status });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order' });
    }
};

// Update an order
export const updateOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order' +error });
    }
};

// Delete an order
export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Order.findByIdAndDelete(id);
        res.json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order' });
    }
};
