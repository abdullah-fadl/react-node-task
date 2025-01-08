import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchOrderById } from '../api/ordersApi';
import { Button, Container, Grid, Typography, CircularProgress, Box, Paper } from '@mui/material';

const OrderDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Fetch order details using the ID from the URL
    const { data: order, isLoading, error } = useQuery(['order', id], () => fetchOrderById(id!), {
        enabled: !!id, // Only fetch if ID exists
    });

    if (isLoading) return <CircularProgress sx={{ display: 'block', margin: 'auto', marginTop: '20%' }} />;
    if (error) return <Typography variant="h6" color="error" align="center">Error fetching order details.</Typography>;
    if (!order) return <Typography variant="h6" color="textSecondary" align="center">Order not found.</Typography>;

    return (
        <Container maxWidth="md" sx={{ marginTop: 4 }}>
            <Paper sx={{ padding: 3, boxShadow: 2 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Order Details
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginBottom: 3 }}
                    onClick={() => navigate('/')}
                >
                    Back to Orders
                </Button>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box className="order-info-item">
                            <Typography variant="body1" fontWeight="bold">Order ID:</Typography>
                            <Typography variant="body1">{order.id}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box className="order-info-item">
                            <Typography variant="body1" fontWeight="bold">Customer Name:</Typography>
                            <Typography variant="body1">{order.customerName}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box className="order-info-item">
                            <Typography variant="body1" fontWeight="bold">Product:</Typography>
                            <Typography variant="body1">{order.product}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box className="order-info-item">
                            <Typography variant="body1" fontWeight="bold">Quantity:</Typography>
                            <Typography variant="body1">{order.quantity}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box className="order-info-item">
                            <Typography variant="body1" fontWeight="bold">Price per Unit:</Typography>
                            <Typography variant="body1">${order.price.toFixed(2)}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box className="order-info-item">
                            <Typography variant="body1" fontWeight="bold">Total Price:</Typography>
                            <Typography variant="body1">${order.totalPrice.toFixed(2)}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box className="order-info-item">
                            <Typography variant="body1" fontWeight="bold">Status:</Typography>
                            <Typography variant="body1">{order.status}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box className="order-info-item">
                            <Typography variant="body1" fontWeight="bold">Created At:</Typography>
                            <Typography variant="body1">{new Date(order.createdAt).toLocaleString()}</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box className="order-info-item">
                            <Typography variant="body1" fontWeight="bold">Updated At:</Typography>
                            <Typography variant="body1">{new Date(order.updatedAt).toLocaleString()}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default OrderDetails;
