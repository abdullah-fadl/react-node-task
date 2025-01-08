import React, { useState, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createOrder, updateOrder, fetchOrderById } from '../api/ordersApi';
import { useNavigate, useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import {
    Container,
    Typography,
    Button,
    Grid,
    TextField,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    FormHelperText,
    CircularProgress
} from '@mui/material';

// Type for the order
interface Order {
    customerName: string;
    product: string;
    quantity: number;
    price: number;
    status: 'pending' | 'completed' | 'canceled';
}

const CreateEditOrder: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // Initialize form data
    const { data: order, isLoading, isError } = useQuery<Order | null>(
        ['order', id],
        () => fetchOrderById(id!),
        {
            enabled: !!id, // Only fetch if there's an id
        }
    );

    const {
        register,
        handleSubmit,
        control, // Destructure control here
        formState: { errors },
        setValue,
        reset,
    } = useForm<Order>({
        defaultValues: {
            customerName: '',
            product: '',
            quantity: 1,
            price: 0,
            status: 'pending',
        },
    });

    useEffect(() => {
        if (order) {
            setValue('customerName', order.customerName);
            setValue('product', order.product);
            setValue('quantity', order.quantity);
            setValue('price', order.price);
            setValue('status', order.status);
        }
    }, [order, setValue]);

    const mutation = useMutation(
        (data: Order) => {
            if (id) {
                return updateOrder(id, data);
            } else {
                return createOrder(data);
            }
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('orders');
                navigate('/');
            },
            onError: (error: any) => {
                console.error('Error creating/updating order:', error);
            },
        }
    );

    const onSubmit = (data: Order) => {
        mutation.mutate(data);
    };

    if (isLoading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <CircularProgress />
                <Typography variant="h6">Loading...</Typography>
            </div>
        );
    }

    if (isError) {
        return <div>Error loading order data.</div>;
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom align="center">
                {id ? 'Edit Order' : 'Create Order'}
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Customer Name"
                            variant="outlined"
                            id="customerName"
                            {...register('customerName', {
                                required: 'Customer name is required',
                            })}
                            error={!!errors.customerName}
                            helperText={errors.customerName?.message}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Product"
                            variant="outlined"
                            id="product"
                            {...register('product', { required: 'Product name is required' })}
                            error={!!errors.product}
                            helperText={errors.product?.message}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Quantity"
                            variant="outlined"
                            type="number"
                            id="quantity"
                            {...register('quantity', {
                                required: 'Quantity is required',
                                min: { value: 1, message: 'Quantity must be at least 1' },
                            })}
                            error={!!errors.quantity}
                            helperText={errors.quantity?.message}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Price"
                            variant="outlined"
                            type="number"
                            id="price"
                            {...register('price', {
                                required: 'Price is required',
                                min: { value: 0, message: 'Price cannot be negative' },
                            })}
                            error={!!errors.price}
                            helperText={errors.price?.message}
                        />
                    </Grid>

                    <Grid item xs={12}>
                    <FormControl fullWidth error={!!errors.status}>
                        <InputLabel>Status</InputLabel>
                        <Controller
                            name="status"
                            control={control} // Pass control here
                            defaultValue={order?.status || 'pending'} // Default value
                            render={({ field }) => (
                                <Select {...field} label="Status">
                                    <MenuItem value="pending">Pending</MenuItem>
                                    <MenuItem value="completed">Completed</MenuItem>
                                    <MenuItem value="canceled">Canceled</MenuItem>
                                </Select>
                            )}
                        />
                        {errors.status && <FormHelperText>{errors.status.message}</FormHelperText>}
                    </FormControl>
                </Grid>
                    <Grid item xs={12} className="form-actions">
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type="submit"
                            disabled={mutation.isLoading}
                        >
                            {mutation.isLoading
                                ? 'Submitting...'
                                : id
                                ? 'Update Order'
                                : 'Create Order'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default CreateEditOrder;
