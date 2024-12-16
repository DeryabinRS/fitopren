import { Col, Grid, Row } from 'antd';
import Hipocratus from '@/assets/images/hipocratus.png';
import products from '@/db/products.json';

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
                                        borderRadius: '5px 0 0 5px',
                                    }}
                                >
                                    <div>
                                        Ваша пища должна быть лекарством, а ваше лекарство должно быть пищей.
                                    </div>
                                    <div style={{ marginTop: 20, textAlign: 'right' }}>
                                        Гиппократ
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
                            <div style={{ height: 30, background: 'linear-gradient(110deg, rgba(55, 65, 81, 0) 0%, rgba(242,150,81,0.8) 45%, rgb(95 181 106 / 55%) 45%, rgb(95 181 106 / 0%) 100%)', marginTop: '150px', }} />
                            <div style={{
                                color: 'white',
                                letterSpacing: 4,
                            }}>
                                <h1 style={{ fontSize: screens.sm ? 30 : 16, textAlign: 'end' }}>
                                    Функциональное питание - это и есть самый естественный способ поддержания здоровья.
                                </h1>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div style={{ background: 'white', position: 'relative' }}>
                <div style={{ 
                    width: '100%',
                    maxWidth: 1300,
                    margin: '0 auto',
                    padding: 20,
                }}>
                    <div className='bg-green-1' style={{marginTop: -60, padding: '20px 30px', color: 'white'}}><h2>КАТАЛОГ</h2></div>
                    <div className='catalog'>
                        {products.map(product => (
                            <div key={product.name} className='card-product'>
                                <div><img src={`/img/products/${product.img}`} alt="" /></div>
                                <div>{product.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage