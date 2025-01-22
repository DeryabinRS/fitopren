import { FC, useEffect, useState } from "react"
import { TProduct } from "../MainPage/components/Catalog"
import { Col, Row } from "antd"

const Product:FC<{product: TProduct}> = ({product}) => {
    const [Content, setContent] = useState<FC | null>(null);

    useEffect(() => {
            loadModalComponent();
        }, [product])

    const loadModalComponent = async () => {
		try {
			/** В папке /widgets/* все файлы index должны быть одного формата (.tsx) */
			const loadResult = await import(`./Product${product.id}.tsx`);
			setContent(() => loadResult.default);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (e) {
			return null;
		}
	};
	return (
		<Row gutter={[16, 16]}>
			<Col
                xs={{ flex: '100%' }}
                sm={{ flex: '30%' }}
            >
				<img 
					src={`/img/products/${product.img}`} 
					alt={product.name}  
					style={{
						float:'left',
						margin: '4px 10px 2px 0px',
                        width: '100%',
					}}/>
			</Col>
			<Col
                xs={{ flex: '100%' }}
                sm={{ flex: '70%' }}
            >
				{Content && <Content />}
			</Col>
		</Row>
	)
}

export default Product;