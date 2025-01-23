import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Card, Col, Row } from "antd";

import { headerMenuItems } from "@/config/constants";

import dbPosts from '@/db/posts.json';

const Posts = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const itemMenu = headerMenuItems[5];
    console.log(dbPosts, i18n)
    return (
        <div 
            style={{ 
            position: 'relative', 
            background: 'linear-gradient(110deg, transparent 0%, transparent 10%, rgba(242,150,81, 0.5) 20%, rgba(242,150,81, 0.5) 30%, rgb(83, 157, 45, 0.5) 40%, rgb(83, 157, 45, 0.7) 50%, transparent 60%)' 
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
                        marginTop: -20, 
                        padding: '20px 30px', 
                        color: 'white',
                        marginBottom: 30,
                    }}
                >
                    <h2 id={itemMenu?.url} style={{ textTransform: 'uppercase' }}>
                        {itemMenu.label[i18n.language as keyof typeof itemMenu.label]}
                    </h2>
                </div>
                <div className='catalog'>
                    <Row gutter={[16, 16]}>
                        {dbPosts.map(post => (
                            <Col 
                                key={post.id} 
                                xs={{ flex: '100%' }}
                                sm={{ flex: '50%' }}
                                md={{ flex: '33.3333%' }}
                                lg={{ flex: '25%' }}
                            >
                                <Card
                                    hoverable
                                    cover={<img alt="example" src={`/img/posts/${post.img}`} style={{ height: 270, objectFit: 'cover' }} />}
                                    style={{ height: '100%', background: '#ffffff82' }}
                                    onClick={() => navigate(`/posts/${post.id}`)}
                                >
                                    <div style={{ margin: -10 }}><span style={{ fontSize: 14, fontWeight: 600 }}>{post.title}</span></div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <div className="bg-green-1" style={{ height: 10 }}></div>
        </div>
    )
}

export default Posts