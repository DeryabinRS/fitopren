import { useTranslation } from "react-i18next";
import { Alert, Col, Grid, Row } from "antd";
import { FcCellPhone, FcFeedback } from "react-icons/fc";
import { headerMenuItems } from "@/config/constants";

const { useBreakpoint } = Grid;

const Contacts = () => {
    const { i18n } = useTranslation();
    const screens = useBreakpoint();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const itemMenu = headerMenuItems[4];

    return (
        <div style={{ background: 'linear-gradient(60deg, transparent 0%, transparent 50%, rgba(242,150,81, 0.5) 60%, rgb(83, 157, 45, 0.5) 60%, transparent 100%)' }}>
            <div style={{ 
                width: '100%',
                maxWidth: 1300,
                margin: '0 auto',
                padding: '0 20px 50px',
            }}>
                <div 
                    className="bg-gragient-1"
                    style={{
                        padding: '20px 30px', 
                        color: 'white',
                    }}
                >
                    <h2 id={itemMenu.url} style={{ textTransform: 'uppercase' }}>
                        {itemMenu.label[i18n.language as keyof typeof itemMenu.label]}
                    </h2>
                </div>
                <div 
                    style={{
                        padding: '40px 30px', 
                        marginBottom: 30,
                    }}
                >
                    <Row>
                        <Col
                            md={{ flex: '100%' }}
                            lg={{ flex: '50%' }}
                            style={{ fontSize: screens.lg ? 32 : 20 }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <FcCellPhone /> 
                                <div>+7 903 903 1290</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20 }}>
                                <FcCellPhone /> 
                                <div>+7 952 910 9051</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20 }}>
                                <FcFeedback />
                                <div>larix-pacific@inbox.ru</div>
                            </div>
                        </Col>
                        <Col
                            lg={{ flex: '50%' }}
                            hidden={!screens.lg}
                        >
                            <div
                                style={{
                                    clipPath: 'polygon(10% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)',
                                    height: '100%',
                                    width: '100%',
                                    rotate: '180deg',
                                    background: 'linear-gradient(90deg, transparent, rgb(83, 157, 45, 0.4), rgba(242,150,81,0.8))'
                                }}
                            />
                        </Col>
                    </Row>
                </div>
                <div>
                    <Alert 
                        type="warning"
                        showIcon
                        message={'Внимание!'}
                        description={
                            (
                                <p>
                                    Будьте бдительны, опасайтесь подделок . Приобретайте продукцию Фитопрен<sup>®</sup> только в компании <strong>ООО НПК "Ларикс"</strong> , либо у официальных дилеров компании.
                                    Приобретение Фитопрен<sup>®</sup> у иных поставщиков не гарантирует истинности и качества продукции.
                                </p>
                            )
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default Contacts