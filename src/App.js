
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Carrusel from "./componentes/Carrusel/Carrusel";
import ListaDeLibros from './componentes/Tarjetas/ListaDeLibros';

function App() {
  return (

    <div>
    <Header/>
    <Carrusel/>
    <ListaDeLibros/>
    <Footer/>
   
    </div>

  );
}

export default App;

