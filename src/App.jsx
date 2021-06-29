//Funcionalidad para abrir y cerrar el Dropdown
import {useEffect, useState, useLayoutEffect} from 'react'

import Dropdown from "./components/styled_components/dropdown/Dropdown";
import NavBar from "./components/styled_components/navbar/NavBar";
import Footer from './components/styled_components/footer/Footer';

//Rutas
//useLocation lo necesitamos para que funcione useLayoutEffect
import {Switch, Route, useLocation} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/about/About';
import Homes from './components/pages/homes/Homes';
import Rentals from './components/pages/rentals/Rentals';
import ContactUs from './components/pages/contactUs/ContactUs';

//Animaciones AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

//Botón Flotante
import FloatActionButton from './components/styled_components/fab/FloatActionButton';


function App() {
  //Funcionalidad para el botón de menú y el botón de cerrar del Dropdown
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  //Necesitamos useLayaoutEffect para asegurarnis de que al ir a las páginas desde el menú se abren en el inicio. Arriba del todo.
  const location = useLocation()

  useLayoutEffect(()=>{
    window.scrollTo(0,0)
  }, [location.pathname])

  //Efectos de animaciones AOS - Iniciliación con useEffect para poder usarlas en las diferentes secciones del home o en las páginas de la web.
  useEffect(()=> {
    Aos.init({})
  }, [])

  return (
    <>
      <NavBar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/homes' component={Homes}/>
        <Route path='/rentals' component={Rentals}/>
        <Route path='/contact' component={ContactUs}/>
      </Switch>
      <FloatActionButton/>
      <Footer/>
    </>
  );
}

export default App;
