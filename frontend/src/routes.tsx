import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrdersList from './components/OrdersList';
import CreateEditOrder from './components/CreateEditOrder';
import OrderDetails from './components/OrderDetails'; // Import the missing component

const AppRoutes = () => (
    <Routes>
        {/* Route for Orders List */}
        <Route path="/" element={<OrdersList />} />
        
        {/* Route for Create or Edit Order */}
        <Route path="/create" element={<CreateEditOrder />} />
        <Route path="/edit/:id" element={<CreateEditOrder />} />
        
        {/* Route for Order Details */}
        <Route path="/details/:id" element={<OrderDetails />} />
    </Routes>
);

export default AppRoutes;
