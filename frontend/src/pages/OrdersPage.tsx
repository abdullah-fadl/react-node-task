import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import OrdersList from '../components/OrdersList';
import CreateEditOrder from '../components/CreateEditOrder';
import OrderDetails from '../components/OrderDetails';

const OrdersPage = () => {
    return (
        <div>
            <h1>Orders Management</h1>
            <Routes>
                {/* Orders List */}
                <Route path="/" element={<OrdersList />} />

                {/* Create or Edit an Order */}
                <Route path="/create" element={<CreateEditOrder />} />
                <Route path="/edit/:id" element={<CreateEditOrder />} />

                {/* View Order Details */}
                <Route path="/details/:id" element={<OrderDetails />} />

                {/* Redirect unknown routes */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
};

export default OrdersPage;
