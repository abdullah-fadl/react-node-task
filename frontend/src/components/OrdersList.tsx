import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchOrders, deleteOrder } from '../api/ordersApi';
import { useNavigate } from 'react-router-dom';

const OrdersList = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: orders, isLoading, error } = useQuery('orders', fetchOrders);

    const deleteMutation = useMutation(deleteOrder, {
        onSuccess: () => {
            queryClient.invalidateQueries('orders');
        },
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching orders.</p>;

    return (
        <div>
            <h2>Orders</h2>
            <button onClick={() => navigate('/create')}>Create Order</button>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order: any) => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.customerName}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{order.totalPrice}</td>
                            <td>{order.status}</td>
                            <td>
                                <button onClick={() => navigate(`/edit/${order._id}`)}>Edit</button>
                                <button onClick={() => deleteMutation.mutate(order._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersList;
