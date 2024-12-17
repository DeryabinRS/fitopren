import {  Button, Menu, Space } from "antd";
import { useTranslation } from 'react-i18next';
import { Grid } from 'antd';

import Logo from '@/assets/images/logo.png';
import { headerMenuItems } from "@/config/constants";

const { useBreakpoint } = Grid;

const HeaderMainLayout = () => {
  	const { i18n } = useTranslation();
	const screens = useBreakpoint();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	const menuItems = headerMenuItems.map(item => ({ ...item, label: item.label[i18n.language as keyof typeof item.label] }));

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
				items={menuItems}
				style={{ flex: 1, minWidth: 0 }}
			/>
			<Space>
				<Button type="link" size="small" onClick={() => changeLanguage('ru')}>RU</Button>
				<Button type="link" size="small" onClick={() => changeLanguage('en')}>EN</Button>
			</Space>
		</div>
	)
}

export default HeaderMainLayout;

