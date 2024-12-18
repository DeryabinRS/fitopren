import { FC, Suspense } from "react";
import { Layout, Spin } from "antd";
import { Outlet } from "react-router-dom";

import HeaderMainLayout from "./components/HeaderMainLayout";
import Footer from "./components/Footer";

const MainLayout:FC = () => {

    return (
        <Layout style={{
            minHeight: '100vh',
        }}>
            <Layout.Header 
                style={{ 
                    justifyItems: 'center', 
                    color: 'white', 
                    background: 'white',
                    padding: '0 10px', 
                }}
            >
                <HeaderMainLayout />
            </Layout.Header>
            <Layout.Content>
                <Suspense fallback={<Spin />}>
                    <Outlet />
                </Suspense>
            </Layout.Content>
            <Layout.Footer className="bg-orange-1">
                <Footer />
            </Layout.Footer>
            <div className="bg-green-1" style={{ textAlign: 'center', padding: 4, color: 'white' }}>
                Ларикс © 2014 - {new Date().getFullYear()}
            </div>
        </Layout>
    )
}

export default MainLayout;