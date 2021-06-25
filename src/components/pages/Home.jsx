import Hero from "./homeContent/hero/Hero";
import InfoSection from './homeContent/infoSection/InfoSection';
import Listings from './homeContent/listings/Listings';
import Features from './homeContent/features/Features';

//Data de Hero
import { sliderData } from "../../data/sliderData";

//Data de la infoSection
import { InfodataOne, InfodataTwo } from '../../data/infoData'

const Home = () => {
    return (
        <div>
            <Hero slides={sliderData}/>
            <InfoSection {...InfodataOne}/>
            <Listings/>
            <Features/>
            <InfoSection {...InfodataTwo}/>
        </div>
    )
}

export default Home;
