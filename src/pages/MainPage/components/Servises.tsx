import { headerMenuItems } from "@/config/constants";
import { Card, Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs";
import { FaMedrt } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";

const Servises = () => {
    const itemMenu = headerMenuItems[3];
    const { i18n } = useTranslation();
    return (
        <div>
            <div style={{ 
                width: '100%',
                maxWidth: 1300,
                margin: '0 auto',
                padding: '0 20px 50px',
            }}>
                <div 
                    style={{
                        padding: '20px 30px',
                    }}
                >
                    <h2 id={itemMenu.url} style={{ textTransform: 'uppercase' }}>
                        {itemMenu.label[i18n.language as keyof typeof itemMenu.label]}
                    </h2>
                    <h3>Наша компания предлагает услуги по углекислотной экстракции растительного сырья.</h3>
                    <h4>СК-СО2 экстракты широко применяются в производстве современных косметических и фармацевтических продуктов по следующим причинам:</h4>
                    <Row gutter={[16, 16]} style={{ marginTop: 30 }}>
                        <Col
                            md={{ flex: '50%' }}
                        >
                            <Card
                                style={{ height: '100%' }} hoverable>
                                <Card.Meta 
                                    avatar={<RiPlantFill style={{ color: '#539d2d' }} size={60}/>}
                                />
                                    <div style={{ marginTop: 10 }}>СК-СО2 экстракт представляет собой абсолютно натуральный продукт. В его состав входят только те вещества, которые находятся в исходном сырье. Он не содержит остатков растворителя и посторонних примесей.</div>
                            </Card>
                        </Col>
                        <Col
                            md={{ flex: '50%' }}
                        >
                            <Card
                                style={{ height: '100%' }} hoverable>
                                <Card.Meta 
                                    avatar={<FaMedrt style={{ color: '#539d2d' }} size={60}/>}
                                />
                                    <div style={{ marginTop: 10 }}>Каждый СК-СО2 экстракт обладает индивидуальными функциональными свойствами, которые придают соответствующие качества конечному продукту. Это могут бытьантиоксидантные, консервантные, ароматические, лечебно-профилактическиесвойства, в зависимости от наименования и рекомендуемого применения данного СК-СО2 экстракта.</div>
                            </Card>
                        </Col>
                        <Col
                            md={{ flex: '50%' }}
                        >
                            <Card
                                style={{ height: '100%' }} hoverable>
                                <Card.Meta 
                                    avatar={<BsFillFileEarmarkMedicalFill style={{ color: '#539d2d' }} size={60}/>}
                                />
                                    <div style={{ marginTop: 10 }}>СК-СО2 экстракты совместимы с рецептурами большинства косметических и фармацевтических продуктов. В настоящее время ГОРОФИТЫ используют в производстве кремов, шампуней, гелей для душа, мыла, зубных паст, массажных масел, профессиональной и детской косметики.</div>
                            </Card>
                        </Col>
                        <Col
                            md={{ flex: '50%' }}
                        >
                            <Card
                                style={{ height: '100%' }} hoverable>
                                <Card.Meta 
                                    avatar={<FaMoneyBillTrendUp style={{ color: '#539d2d' }} size={60}/>}
                                />
                                    <div style={{ marginTop: 10 }}>СК-СО2 экстракты (ГОРОФИТЫ) экономически выгодны для производителей косметических и фармацевтических продуктов, поскольку обладают низкими нормами ввода (0,1-0,01% в зависимости от рецептуры).</div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Servises