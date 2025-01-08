import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders';

export const fetchOrders = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const fetchOrderById = async (id: string) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createOrder = async (order: any) => {
    const response = await axios.post(API_URL, order);
    return response.data;
};

export const updateOrder = async (id: string, order: any) => {
    const response = await axios.put(`${API_URL}/${id}`, order);
    return response.data;
};

export const deleteOrder = async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
};
