import { useTranslation } from "react-i18next";
import { Grid } from "antd";
import { FcCellPhone, FcFeedback } from "react-icons/fc";
import { headerMenuItems } from "@/config/constants";

const { useBreakpoint } = Grid;

const Contacts = () => {
    const { i18n } = useTranslation();
    const screens = useBreakpoint();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const itemMenu = headerMenuItems[4];

    return (
        <div style={{ 
            width: '100%',
            maxWidth: 1300,
            margin: '0 auto',
            padding: '0 20px',
        }}>
            <div 
                className="bg-gragient-1"
                style={{
                    padding: '20px 30px', 
                    color: 'white',
                    marginBottom: 30,
                }}
            >
                <h2 id={itemMenu.url} style={{ textTransform: 'uppercase' }}>
                    {itemMenu.label[i18n.language as keyof typeof itemMenu.label]}
                </h2>
            </div>
            <div 
                style={{
                    padding: '20px 30px', 
                    marginBottom: 30,
                    fontSize: screens ? 35 : 20,
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <FcCellPhone /> 
                    <div>+7 903 903 1290</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20 }}>
                    <FcCellPhone /> 
                    <div>+7 952 910 9051</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20 }}>
                    <FcFeedback />
                    <div>larix-pacific@inbox.ru</div>
                </div>
            </div>
        </div>
    )
}

export default Contacts