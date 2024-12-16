import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';

import MainLayout from '@/layouts/MainLayout';
import MainPage from '@/pages/MainPage';

const AppRoutes:FC = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />}/>
        </Route>
    </Routes>
);

export default AppRoutes;