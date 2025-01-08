import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchOrderById } from '../api/ordersApi';

const OrderDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Fetch order details using the ID from the URL
    const { data: order, isLoading, error } = useQuery(['order', id], () => fetchOrderById(id!), {
        enabled: !!id, // Only fetch if ID exists
    });

    if (isLoading) return <p>Loading order details...</p>;
    if (error) return <p>Error fetching order details.</p>;
    if (!order) return <p>Order not found.</p>;

    return (
        <div>
            <h2>Order Details</h2>
            <button onClick={() => navigate('/')}>Back to Orders</button>
            <div>
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Customer Name:</strong> {order.customerName}</p>
                <p><strong>Product:</strong> {order.product}</p>
                <p><strong>Quantity:</strong> {order.quantity}</p>
                <p><strong>Price per Unit:</strong> ${order.price.toFixed(2)}</p>
                <p><strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}</p>
                <p><strong>Status:</strong> {order.status}</p>
                <p><strong>Created At:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                <p><strong>Updated At:</strong> {new Date(order.updatedAt).toLocaleString()}</p>
            </div>
        </div>
    );
};

export default OrderDetails;
