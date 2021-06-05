//Funcionalidad para abrir y cerrar el Dropdown
import {useState} from 'react'

import Dropdown from "./components/styled_components/Dropdown";
import NavBar from "./components/styled_components/NavBar";

import GlobalStyle from "./globalStyle";

import Footer from './components/Footer';
import FloatButton from './components/styled_components/FloatButton';

//Rutas
import {Switch, Route} from 'react-router-dom'
import Home from './components/pages';
import About from './components/pages/About';
import Homes from './components/pages/Homes';
import Rentals from './components/pages/Rentals';
import ContactUs from './components/pages/ContactUs';

function App() {
  //Funcionalidad para el botón de menú y el botón de cerrar del Dropdown
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <GlobalStyle/>
      <NavBar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/homes' component={Homes}/>
        <Route path='/rentals' component={Rentals}/>
        <Route path='/contact' component={ContactUs}/>
      </Switch>
      <Footer/>
      <FloatButton/>
    </>
  );
}

export default App;
