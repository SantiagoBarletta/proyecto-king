import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import ListaDeLibros from "./componentes/Tarjetas/ListaDeLibros";
import Contacto from "./componentes/Contacto/Contacto";
import { BrowserRouter as Router, Routes, Route, Pagination } from "react-router-dom"; //Rutas
import DetalleLibro from "./componentes/Tarjetas/DetalleLibro";
import ApiLibros from './componentes/ApiLibros/ApiLibros';


function App() {
  return (
    //esta pag va a estar routeada
    <Router>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<ListaDeLibros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/libros/:id" element={<DetalleLibro/>} />
          <Route path="/informacion/" element={<ApiLibros/>} />
          <Route path="*" element={<h1>Pagina no encontrada</h1>} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
