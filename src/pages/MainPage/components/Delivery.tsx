import { headerMenuItems } from "@/config/constants";
import { useTranslation } from "react-i18next";

const Delivery = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const itemMenu = headerMenuItems[2];
    const { i18n } = useTranslation();

    return (
        <>
            <div style={{ background: '#539d2d', height: 50 }}></div>
            <div style={{ 
                width: '100%',
                maxWidth: 1300,
                margin: '0 auto',
                padding: '0 20px',
            }}>
                <div 
                    style={{
                        padding: '20px 30px', 
                        marginBottom: 30,
                    }}
                >
                    <h2 id={itemMenu.url}>
                        {itemMenu.label[i18n.language as keyof typeof itemMenu.label]}
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Delivery
