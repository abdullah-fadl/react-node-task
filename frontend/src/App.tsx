import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRoutes from './routes';
import Sidebar from './Layout/Sidebar';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Container } from '@mui/material';

const queryClient = new QueryClient();

const App: React.FC = () => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <div style={{ display: 'flex', height: '100vh' }}>
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: '250px' }}>
                    {/* Header */}
                    <Header />

                    {/* Main Content */}
                    <Container style={{ flex: 1, padding: '20px' }}>
                        <AppRoutes />
                    </Container>

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    </QueryClientProvider>
);

export default App;
