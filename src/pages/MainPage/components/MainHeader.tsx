import { Col, Grid, Row } from 'antd';
import { useTranslation } from 'react-i18next';

import Hipocratus from '@/assets/images/hipocratus.png';

const { useBreakpoint } = Grid;

export const MainHeader = () => {
    const { t } = useTranslation();
    const screens = useBreakpoint();
    return (
        <div className="main-header">
            <ul className="animation_bubble">
                {[...Array(50)]
                    .map((_, i) => {
                        const wh = `${Math.floor(Math.random() * (30 - 10 + 1) + 3)}px`;
                        return (
                            <li
                                key={i}
                                style={{
                                    top: `${Math.floor(Math.random() * (100) + 0)}%`,
                                    left: `${Math.floor(Math.random() * (100 - 5 + 1) + 0)}%`,
                                    width: wh,
                                    height: wh,
                                    opacity: 0.5,
                                    animationIterationCount: 'infinite',
                                    animation: `animation_bubble ${Math.random() * (28 - 14 + 1) + 20}s linear infinite`,
                                }}
                            ></li>
                        );
                    })}
            </ul>
            <div style={{ 
                width: '100%',
                maxWidth: 1300,
                margin: '0 auto',
            }}>
                <Row style={{ paddingTop: screens.lg ? 50 : 0 }}>
                    <Col
                        xs={{ flex: '100%' }}
                        sm={{ flex: '100%' }}
                        md={{ flex: '100%' }}
                        lg={{ flex: '100%' }}
                        xl={{ flex: '60%' }}
                    >
                        <div style={{ 
                            padding: '20px 30px', 
                            margin: 10
                        }}>
                            <div>
                                <img 
                                    src={Hipocratus} 
                                    alt="Hipocratus"
                                    width={screens.sm ? 400 : 220}
                                    style={{
                                        filter: 'drop-shadow(5px 5px 55px #222)',
                                    }}
                                />
                            </div>
                            <div 
                                style={{ 
                                    color: '#fff', 
                                    fontSize: screens.sm ? 25 : 16, 
                                    fontWeight: 500,
                                    padding: '20px 30px',
                                    letterSpacing: 4,
                                    background: 'rgba(0, 0, 0, 0.5)',
                                    borderRadius: '15px',
                                }}
                            >
                                <div>
                                    {t('main_page_header.title_1')}
                                </div>
                                <div style={{ marginTop: 20, textAlign: 'right' }}>
                                    {t('main_page_header.title_1_signature')}
                                </div>
                            </div>
                        </div>
                        
                    </Col>
                    <Col
                        xs={{ flex: '100%' }}
                        sm={{ flex: '100%' }}
                        md={{ flex: '100%' }}
                        lg={{ flex: '100%' }}
                        xl={{ flex: '40%' }}
                    >
                        <div 
                            style={{ 
                                height: 30, 
                                background: 'linear-gradient(110deg, rgba(55, 65, 81, 0) 0%, rgba(242,150,81,0.8) 45%, rgb(95 181 106 / 55%) 45%, rgb(95 181 106 / 0%) 100%)', 
                                marginTop: screens.lg ? 150 : 0, }} 
                        />
                        <div style={{
                            color: 'white',
                            letterSpacing: 4,
                            padding: 10,
                        }}>
                            <h1 style={{ fontSize: screens.sm ? 30 : 16, textAlign: 'end' }}>
                                {t('main_page_header.title_2')}
                            </h1>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
