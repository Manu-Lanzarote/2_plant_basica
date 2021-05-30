import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { sliderData } from "./data/sliderData";
import GlobalStyle from "./globalStyle";

function App() {
  return (
    <>
    <GlobalStyle/>
      <NavBar/>
      <Dropdown/>
      <Hero slides={sliderData}/>
    </>
  );
}

export default App;
