import { Col, Row } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import dbPosts from '@/db/posts.json';

interface IPost { id: number; title: string; img: string; }

const PostItem = () => {
    const { id } = useParams();
    const [ Content, setContent ] = useState<FC | null>(null);
    const [ currentPost, setCurrentPost ] = useState<IPost>({ id: 0, title: "", img: "" });

    useEffect(() => {
        if (id) {
            const currentPost = dbPosts.find(item => item.id === +id);
            if (currentPost) {
                setCurrentPost(currentPost)
                loadModalComponent(currentPost);
            }
        }
    }, [ id ]);

    const loadModalComponent = async (currentPost: IPost) => {
		try {
			const loadResult = currentPost && await import(`./PostItem${currentPost.id}.tsx`);
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
					src={`/img/posts/${currentPost.img}`} 
					alt={currentPost.title}  
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

export default PostItem