import { Catalog } from './components/Catalog';
import Delivery from './components/Delivery';
import { MainHeader } from './components/MainHeader';

const MainPage = () => {

    return (
        <>
            <MainHeader />
            <Catalog />
            <Delivery />
        </>
    )
}

export default MainPage;