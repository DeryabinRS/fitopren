import {  Menu, Radio, Space } from "antd";
import { useTranslation } from 'react-i18next';
import { Grid } from 'antd';

import Logo from '@/assets/images/logo.png';
const { useBreakpoint } = Grid;

const items = [
    { key: 1, label: 'Каталог' },
    { key: 2, label: 'Акции' },
    { key: 3, label: 'Доставка и Оплата' },
    { key: 4, label: 'Услуги' },
    { key: 5, label: 'Контакты' },
];

const HeaderMainLayout = () => {
  	const { i18n } = useTranslation();
	const screens = useBreakpoint();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div style={{
			top: 0,
			zIndex: 1,
			width: '100%',
			maxWidth: 1300,
			display: 'flex',
			alignItems: 'flex-start',
			gap: 10,
			position: 'relative',
		}}>
			<div>
				<img 
					src={Logo}
					className="logo"
					style={{
						width: screens.lg ? 260 : 100,
						marginTop: screens.lg ? 0 : 20,
						position: 'relative',
					}}
				/>
			</div>
			<Menu
				theme="light"
				mode="horizontal"
				defaultSelectedKeys={['2']}
				items={items}
				style={{ flex: 1, minWidth: 0 }}
			/>
			<Space>
				<Radio.Group size="small" value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
					<Radio.Button value="ru">ru</Radio.Button>
					<Radio.Button value="en">en</Radio.Button>
				</Radio.Group>
			</Space>
		</div>
	)
}

export default HeaderMainLayout;

