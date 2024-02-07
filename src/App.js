
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Carrusel from "./componentes/Carrusel/Carrusel";
import ListaDeLibros from './componentes/Tarjetas/ListaDeLibros';
import Aside from './componentes/Aside/Aside';
import Contacto from './componentes/Contacto/Contacto';

function App() {
  return (

    <div>
    <Header/>
    <Carrusel/>
    <ListaDeLibros/>
    <Aside/>
    <Contacto/>
    <Footer/>
   
    </div>

  );
}

export default App;

