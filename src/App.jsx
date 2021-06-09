//Funcionalidad para abrir y cerrar el Dropdown
import {useEffect, useState, useLayoutEffect} from 'react'

import Dropdown from "./components/styled_components/Dropdown";
import NavBar from "./components/styled_components/NavBar";
import Footer from './components/styled_components/Footer';
import FloatButton from './components/styled_components/FloatButton';

//Rutas
//useLocation lo necesitamos para que funcione useLayoutEffect
import {Switch, Route, useLocation} from 'react-router-dom'
import Home from './components/pages';
import About from './components/pages/About';
import Homes from './components/pages/Homes';
import Rentals from './components/pages/Rentals';
import ContactUs from './components/pages/ContactUs';

//Animaciones AOS
import Aos from 'aos'
import 'aos/dist/aos.css'

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
      <Footer/>
      <FloatButton/>
    </>
  );
}

export default App;
