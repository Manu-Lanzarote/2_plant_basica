import Hero from "../Hero";
import InfoSection from '../InfoSection';
import Listings from '../Listings';
import Features from '../Features';

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
