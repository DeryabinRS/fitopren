import { useContext } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
	toggleTheme: (themeName: ETheme) => void,
	theme: ETheme,
}

export function useTheme(): IUseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = (themeName: ETheme) => {
		if (setTheme) {
			setTheme(themeName);
		}
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeName);
	};

	return {
		theme: theme || ETheme.LIGHT,
		toggleTheme,
	};
}
