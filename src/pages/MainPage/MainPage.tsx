import { Catalog } from './components/Catalog';
import Contacts from './components/Contacts';
import Delivery from './components/Delivery';
import { MainHeader } from './components/MainHeader';
import Posts from './components/Posts';
import Sales from './components/Sales';
import Servises from './components/Servises';

const MainPage = () => {

    return (
        <>
            <MainHeader />
            <Catalog />
            <Servises />
            <Sales />
            <Posts />
            <Delivery />
            <Contacts />
        </>
    )
}

export default MainPage;