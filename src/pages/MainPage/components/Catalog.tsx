import { FC, useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "antd";
import { useTranslation } from "react-i18next";

import products from '@/db/products.json';
import { headerMenuItems } from "@/config/constants";

export type TProduct = typeof products[0];

export const Catalog = () => {
    const { i18n } = useTranslation();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const itemMenu = headerMenuItems[0];
    return (
        <div 
            style={{ 
            position: 'relative', 
            background: 'linear-gradient(110deg, transparent 0%, transparent 10%, rgba(242,150,81, 0.5) 20%, rgba(242,150,81, 0.5) 30%, rgb(83, 157, 45, 0.5) 30%, rgb(83, 157, 45, 0.7) 50%, transparent 40%)' 
            }} 
        >
            <div style={{ 
                width: '100%',
                maxWidth: 1300,
                margin: '0 auto',
                padding: 20,
            }}>
                <div 
                    className="bg-gragient-1"
                    style={{
                        marginTop: -60, 
                        padding: '20px 30px', 
                        color: 'white',
                        marginBottom: 30,
                    }}
                >
                    <h2 id={itemMenu.url} style={{ textTransform: 'uppercase' }}>
                        {itemMenu.label[i18n.language as keyof typeof itemMenu.label]}
                    </h2>
                </div>
                <div className='catalog'>
                    <Row gutter={[16, 16]}>
                        {products.map(product => (
                            <Col 
                                key={product.id} 
                                xs={{ flex: '100%' }}
                                sm={{ flex: '50%' }}
                                md={{ flex: '33.3333%' }}
                                lg={{ flex: '20%' }}
                            >
                                <ProductPageInModal product={product} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <div className="bg-orange-1" style={{ height: 50 }}></div>
        </div>
    )
}

const ProductPageInModal:FC<{product: TProduct}> = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [ModalComponent, setModalComponent] = useState<FC<{ product: TProduct }> | null>(null);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        loadModalComponent();
    }, [product])

    const loadModalComponent = async () => {
		try {
			/** В папке /widgets/* все файлы index должны быть одного формата (.tsx) */
			const loadResult = await import(`../../products/Product${product.id}.tsx`);
			setModalComponent(() => loadResult.default);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (e) {
			return null;
		}
	};

    return (
        <>
            <Card
                hoverable
                cover={<img alt="example" src={`/img/products/${product.img}`} style={{ height: 270, objectFit: 'cover' }} />}
                style={{ height: '100%' }}
                onClick={showModal}
            >
                <div style={{ margin: -10 }}><span style={{ fontSize: 14, fontWeight: 600 }}>{product.name}</span></div>
            </Card>
            
            <Modal 
                title={product.name}
                open={isModalOpen} 
                onCancel={handleCancel}
                footer={() => (
                    <Button onClick={handleCancel}>Закрыть</Button>
                )}
                style={{ maxWidth: 1300 }}
                width={'100%'}
            >
                {ModalComponent ? <ModalComponent product={product}/> : 'Нет данных'}
            </Modal>
        </>
    );
}
