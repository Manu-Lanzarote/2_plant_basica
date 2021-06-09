import Hero from "../pages/index/Hero";
import InfoSection from '../pages/index/InfoSection';
import Listings from '../pages/index/Listings';
import Features from '../pages/index/Features';

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
