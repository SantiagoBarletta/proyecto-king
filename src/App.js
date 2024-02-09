
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Carrusel from "./componentes/Carrusel/Carrusel";
import ListaDeLibros from './componentes/Tarjetas/ListaDeLibros';
import Aside from './componentes/Aside/Aside';
import Contacto from './componentes/Contacto/Contacto';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; //Rutas

function App() {
  return (

    //esta pag va a estar routeada
    <Router> 

    
    <Header/>
    <Carrusel/>

    <main>

      <Routes>
        <Route path='/' element={<ListaDeLibros/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/comprar/:id' element={<Aside/>}/>
      </Routes>

    </main>

    <Aside/>
    <Footer/>
    

    </Router>

  );
}

export default App;

