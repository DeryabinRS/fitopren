import { AliasToken } from 'antd/es/theme/interface';
import { ThemeConfig } from 'antd/lib/config-provider/context';

export const lightThemeToken: Partial<AliasToken> = {
    colorTextBase: '#212529',
    colorPrimaryBg: '#e6f7ff',
    colorBgLayout: '#f7f7f7',
    colorBgContainer: '#ffffff',
    colorPrimary: '#0e9243',
    colorBorder: '#e4e4e4',
};

export const darkThemeToken: Partial<AliasToken> = {
    colorTextBase: '#f8f8f8',
    colorPrimaryBg: '#676767',
    colorBgLayout: '#2f3136',
    colorBgContainer: '#202225',
    colorPrimary: '#0e9243',
    colorBorder: '#353535',
};

export const allComponents: ThemeConfig['components'] = {
    Alert: {
        colorText: '#212529',
    },
    Button: {
        primaryShadow: 'none',
    },
};

export const lightComponents: ThemeConfig['components'] = {
    Table: {
        borderColor: '#ccc',
    },
};
export const darkComponents: ThemeConfig['components'] = {
    Alert: {
        colorText: darkThemeToken.colorTextBase,
    },
};
