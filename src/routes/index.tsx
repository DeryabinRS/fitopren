import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';

import MainLayout from '@/layouts/MainLayout';
import MainPage from '@/pages/MainPage';
import PostItem from '@/pages/PostPage/PostItem';
import Content from '@/layouts/MainLayout/components/Content';

const AppRoutes:FC = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />}/>
            <Route path="/posts/:id" element={<Content><PostItem /></Content>} />
        </Route>
    </Routes>
);

export default AppRoutes;