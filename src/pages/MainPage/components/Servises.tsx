import { headerMenuItems } from "@/config/constants";
import { useTranslation } from "react-i18next";

const Servises = () => {
      const itemMenu = headerMenuItems[3];
      const { i18n } = useTranslation();
      return (
          <div>
              <div style={{ 
                  width: '100%',
                  maxWidth: 1300,
                  margin: '0 auto',
                  padding: '0 20px',
              }}>
                  <div 
                      style={{
                          padding: '20px 30px',
                      }}
                  >
                      <h2 id={itemMenu.url} style={{ textTransform: 'uppercase' }}>
                          {itemMenu.label[i18n.language as keyof typeof itemMenu.label]}
                      </h2>
                  </div>
                  <div>
  
                  </div>
              </div>
          </div>
      )
}

export default Servises