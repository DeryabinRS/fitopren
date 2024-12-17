export interface IHeaderMenuItem {
    key: number,
    label: { ru: string, en: string },
}

export const headerMenuItems: IHeaderMenuItem[] = [
    { key: 1, label: { ru: 'Каталог', en: 'Catalog' } },
    { key: 2, label: { ru: 'Акции', en: 'Sales' } },
    { key: 3, label: { ru: 'Доставка и Оплата', en: 'Delivery and Payment' } },
    { key: 4, label: { ru: 'Услуги', en: 'Services' } },
    { key: 5, label: { ru: 'Контакты', en: 'Contacts' } },
];