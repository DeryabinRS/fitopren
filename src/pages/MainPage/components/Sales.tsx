import { useTranslation } from "react-i18next";
import { headerMenuItems } from "@/config/constants";
import { Badge, Card, Flex } from "antd";
import { FaStar } from "react-icons/fa";

const Sales = () => {
    const itemMenu = headerMenuItems[1];
    const { i18n } = useTranslation();
    return (
        <div>
            <div style={{ 
                width: '100%',
                maxWidth: 1300,
                margin: '0 auto',
                padding: '20px 0',
            }}>
                <div 
                    style={{
                        padding: '20px 30px',
                    }}
                >
                    <h2 id={itemMenu.url} style={{ textTransform: 'uppercase' }}>
                        {itemMenu.label[i18n.language as keyof typeof itemMenu.label]}
                    </h2>
                    {/* <Alert showIcon type="warning" message="На текущий момент акции отсутствуют"/> */}
                    <Flex wrap>
                        <Badge.Ribbon text={<FaStar />} placement="start" color="red">
                            <Card style={{ fontWeight: 600 }}>
                                Продукты реализуются на сумму не менее 5000 рублей. <br />
                                При покупке нашей продукции частными лицами, самозанятыми (подтверждающий документ),
                                индивидуальными предпринимателями (подтверждающий документ) одного наименования — десять
                                единиц, одиннадцатая упаковка передаётся без оплаты.
                            </Card>
                        </Badge.Ribbon>
                    </Flex>
                </div>
                <div>

                </div>
            </div>
            <div className="bg-orange-1" style={{ height: 10 }}></div>
        </div>
    )
}

export default Sales