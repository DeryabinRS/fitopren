import { Catalog } from './components/Catalog';
import Contacts from './components/Contacts';
import Delivery from './components/Delivery';
import { MainHeader } from './components/MainHeader';

const MainPage = () => {

    return (
        <>
            <MainHeader />
            <Catalog />
            <Delivery />
            <Contacts />
        </>
    )
}

export default MainPage;