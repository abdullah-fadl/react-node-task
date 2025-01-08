import React, { useState, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createOrder, updateOrder, fetchOrderById } from '../api/ordersApi';
import { useNavigate, useParams } from 'react-router-dom';

const CreateEditOrder = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState({
        customerName: '',
        product: '',
        quantity: 1,
        price: 0,
        status: 'pending',
    });

    const { data: order } = useQuery(['order', id], () => fetchOrderById(id!), {
        enabled: !!id,
    });

    useEffect(() => {
        if (order) {
            setFormData(order);
        }
    }, [order]);

    const mutation = useMutation(
        (data: any) => {
            // If there's an id, update the order, otherwise create a new order
            if (id) {
                return updateOrder(id, data);  // Pass id and order data
            } else {
                return createOrder(data);  // Only pass order data
            }
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('orders');
                navigate('/');
            },
        }
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ ...formData, id });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{id ? 'Edit Order' : 'Create Order'}</h2>
            <input
                type="text"
                placeholder="Customer Name"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
            />
            <input
                type="text"
                placeholder="Product"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: +e.target.value })}
            />
            <input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: +e.target.value })}
            />
            <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="canceled">Canceled</option>
            </select>
            <button type="submit">{id ? 'Update Order' : 'Create Order'}</button>
        </form>
    );
};

export default CreateEditOrder;
