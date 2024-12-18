import { Catalog } from './components/Catalog';
import Contacts from './components/Contacts';
import Delivery from './components/Delivery';
import { MainHeader } from './components/MainHeader';
import Sales from './components/Sales';
import Servises from './components/Servises';

const MainPage = () => {

    return (
        <>
            <MainHeader />
            <Catalog />
            <Sales />
            <Delivery />
            <Servises />
            <Contacts />
        </>
    )
}

export default MainPage;