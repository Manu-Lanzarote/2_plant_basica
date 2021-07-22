import Hero from "./homeContent/hero/Hero";
import InfoSection from './homeContent/infoSection/InfoSection';
import Listings from './homeContent/listings/Listings';
import Features from './homeContent/features/Features';

//Data de Hero
import { sliderData } from "./homeContent/hero/sliderData";

//Data de la infoSection
import { InfodataOne } from './homeContent/infoSection/infoData'
import Cards from "./homeContent/cards/Cards";

const Home = () => {
    return (
        <div>
            <Hero slides={sliderData}/>
            <InfoSection {...InfodataOne}/>
            <Listings/>
            <Features/>
            <Cards/>
            {/* <InfoSection {...InfodataTwo}/> */}
        </div>
    )
}

export default Home;
