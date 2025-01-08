import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchOrders, deleteOrder } from '../api/ordersApi';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const OrdersList: React.FC = () => {
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
        <Container>
            <Typography variant="h4" gutterBottom>
                Orders
            </Typography>

            {/* Create Order Button */}
            <Button variant="contained" color="primary" onClick={() => navigate('/create')} style={{ marginBottom: '20px' }}>
                Create Order
            </Button>

            {/* Orders Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Total Price</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order: any) => (
                            <TableRow key={order._id}>
                                <TableCell>{order._id}</TableCell>
                                <TableCell>{order.customerName}</TableCell>
                                <TableCell>{order.product}</TableCell>
                                <TableCell>{order.quantity}</TableCell>
                                <TableCell>${order.totalPrice.toFixed(2)}</TableCell>
                                <TableCell>{order.status}</TableCell>
                                <TableCell>
                                <Button variant="contained" color="primary" onClick={() => navigate(`/details/${order._id}`)} style={{ marginRight: '10px' }}>
                                        View Details
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => navigate(`/edit/${order._id}`)} style={{ marginRight: '10px' }}>
                                        Edit
                                    </Button>
                                    <Button variant="outlined" color="error" onClick={() => deleteMutation.mutate(order._id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default OrdersList;
