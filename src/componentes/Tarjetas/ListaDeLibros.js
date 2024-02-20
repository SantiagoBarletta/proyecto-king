import libros from './libros';
import Tarjetas from './Tarjetas';
import './Tarjeta.css';
import Carrusel from '../Carrusel/Carrusel'
import Aside from '../Aside/Aside'
import { Link } from 'react-router-dom'; // Agrega la importación de Link

function ListaDeLibros (){

    return(
      <>
      <Carrusel/>

      <div className="titulo">
        <h1>Libros en Venta</h1>
       </div>
      
      <main className = "tarjetasFlex">
      
        {libros.map((libro, index) => (
          <Tarjetas
            id={index}
            titulo={libro.titulo}
            imagen={libro.imagen}
            sinopsis={libro.sinopsis}
            precio={libro.precio}
          />
        ))}
      
      </main>

      <Aside/>
      </>
    )
}

export default ListaDeLibros;
