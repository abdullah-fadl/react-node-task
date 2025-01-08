
import express from 'express';
import {
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder,
    getOrderByID,
} from '../controllers/orderController';

const router = express.Router();

router.get('/', getAllOrders);
router.get('/:id', getOrderByID); 
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;
