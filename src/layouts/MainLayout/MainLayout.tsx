import { FC, Suspense } from "react";
import { Layout, Spin } from "antd";
import { Outlet } from "react-router-dom";

import HeaderMainLayout from "./components/HeaderMainLayout";

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
            <Layout.Footer>
                Footer
            </Layout.Footer>
        </Layout>
    )
}

export default MainLayout;