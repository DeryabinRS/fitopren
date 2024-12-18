import Logo from '@/assets/images/logo.png';
import { Grid} from 'antd';
const { useBreakpoint } = Grid;

const Footer = () => {
    const screens = useBreakpoint();

    return (
        <div style={{ 
            width: '100%',
            maxWidth: 1300,
            margin: '0 auto',
            color: 'white',
        }}>
            <img 
                src={Logo}
                className="logo"
                style={{
                    width: screens.lg ? 160 : 100,
                    position: 'relative',
                }}
            />
        </div>
    )
}

export default Footer