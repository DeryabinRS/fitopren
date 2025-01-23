import {  Button, Menu, MenuProps, Space } from "antd";
import { useTranslation } from 'react-i18next';
import { Grid } from 'antd';

import Logo from '@/assets/images/logo.png';
import { headerMenuItems } from "@/config/constants";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const { useBreakpoint } = Grid;

const HeaderMainLayout = () => {
	const { hash, key } = useLocation();
  	const { i18n } = useTranslation();
	const screens = useBreakpoint();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	useEffect(()=>{
		if(hash){
			const targetElement = document.getElementById(hash.substring(1));
			targetElement?.scrollIntoView({behavior: 'smooth'});
		}
	}, [key, hash])

	const menuItems:MenuProps['items'] = headerMenuItems.map(item => ({
		...item, 
		label: <Link to={`/#${item.url}`}>{item.label[i18n.language as keyof typeof item.label]}</Link>,
	})).sort(item => item.order);

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
			<Link to="/">
				<img 
					src={Logo}
					className="logo"
					style={{
						width: screens.lg ? 260 : 100,
						marginTop: screens.lg ? 0 : 20,
						position: 'relative',
					}}
				/>
			</Link>
			<Menu
				theme="light"
				mode="horizontal"
				style={{ flex: 1, minWidth: 0 }}
				selectable={false}
				items={menuItems}
			/>
			<Space>
				<Button type="link" size="small" onClick={() => changeLanguage('ru')}>РУС</Button>
				<Button type="link" size="small" onClick={() => changeLanguage('en')}>EN</Button>
				<Button type="link" size="small" onClick={() => changeLanguage('cn')}>中文</Button>
			</Space>
		</div>
	)
}

export default HeaderMainLayout;

