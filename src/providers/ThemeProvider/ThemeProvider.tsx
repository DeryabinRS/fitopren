import React, { FC, useMemo, useState } from 'react';

import { ConfigProvider, theme as antdTheme } from 'antd';

import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

import { allComponents, darkComponents, darkThemeToken, lightComponents, lightThemeToken } from '@/styles';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.LIGHT;

interface IThemeProviderProps {
	initialTheme?: ETheme
	children: React.ReactNode
}

const ThemeProvider: FC<IThemeProviderProps> = props => {
	const { initialTheme, children } = props;
	const [ theme, setTheme ] = useState<ETheme>(initialTheme || defaultTheme);
	const { darkAlgorithm, defaultAlgorithm } = antdTheme;

	const defaultProps = useMemo(() => ({
		theme,
		setTheme,
	}), [theme]);

	const algorithm = {
		[ETheme.LIGHT]: defaultAlgorithm,
		[ETheme.DARK]: darkAlgorithm,
	};

	const tokens = {
		[ETheme.LIGHT]: lightThemeToken,
		[ETheme.DARK]: darkThemeToken,
	};

	const components = {
		[ETheme.LIGHT]: lightComponents,
		[ETheme.DARK]: darkComponents,
	};

	return (
		<ConfigProvider
			theme={{
				algorithm: algorithm[theme],
				token: tokens[theme],
				components: {
					...allComponents,
					...components[theme],
				},
			}}
		>
			<ThemeContext.Provider value={defaultProps}>
				{children}
			</ThemeContext.Provider>
		</ConfigProvider>
	);
};

export default ThemeProvider;
