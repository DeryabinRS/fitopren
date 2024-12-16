import { Col, Grid, Row } from 'antd';
import Hipocratus from '@/assets/images/hipocratus.png';

const { useBreakpoint } = Grid;

const MainPage = () => {
    const screens = useBreakpoint();
    return (
        <>
            <div className="main-header">
                <ul className="animation_bubble">
                    {[...Array(50)]
                        .map((_, i) => {
                            const wh = `${Math.floor(Math.random() * (30 - 10 + 1) + 10)}px`;
                            return (
                                <li
                                    key={i}
                                    style={{
                                        left: `${Math.floor(Math.random() * (150 - 5 + 1) + 0)}%`,
                                        width: wh,
                                        height: wh,
                                        animationIterationCount: 'infinite',
                                        // animationDuration: `${Math.random() * (8 - 4 + 1) + 15}s`,
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
                    <Row style={{ paddingTop: 50 }}>
                        <Col
                            xs={{ flex: '100%' }}
                            sm={{ flex: '100%' }}
                            lg={{ flex: '50%' }}
                            style={{ 
                                background: 'rgb(0, 0, 0, 0.4)', 
                                padding: '20px 30px', 
                                display: 'flex',
                                gap: 10,
                                borderRadius: 10,
                                boxShadow: '0 0 40px #000',
                            }}
                        >
                            <div>
                                <img src={Hipocratus} alt="Hipocratus" width={screens.sm ? 200 : 120} />
                            </div>
                            <div 
                                style={{ 
                                    color: '#d9d9d9', 
                                    fontSize: screens.sm ? 25 : 16, 
                                    fontWeight: 600,
                                    padding: 10,
                                    letterSpacing: 2,
                                    fontFamily: 'cursive',
                                }}
                            >
                                <div>
                                    Ваша пища должна быть лекарством, а ваше лекарство должно быть пищей.
                                </div>
                                <div style={{ marginTop: 20, textAlign: 'right' }}>
                                    Гиппократ
                                </div>
                            </div>
                        </Col>
                        <Col
                            xs={{ flex: '100%' }}
                            sm={{ flex: '100%' }}
                            lg={{ flex: '50%' }}
                        ></Col>
                    </Row>
                </div>
            </div>
            <div style={{ 
                width: '100%',
                maxWidth: 1300,
                margin: '0 auto'
            }}>
                <div style={{
                    background: 'white',
                    padding: '30px 20px',
                    marginTop: '-20px',
                    borderRadius: '5px',
                }}>
                    MainPage
                </div>
            </div>
        </>
    )
}

export default MainPage