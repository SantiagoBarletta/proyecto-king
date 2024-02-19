import libros from './libros';
import Tarjetas from './Tarjetas';
import './Tarjeta.css';
import Carrusel from '../Carrusel/Carrusel'
import Aside from '../Aside/Aside'

function ListaDeLibros (){



    return(
      <>
      <Carrusel/>

      <div></div>

       <div className="titulo">
        <h1>Libros en Venta</h1>
       </div>
      
      <main className = "tarjetasFlex">
      

        {libros.map((libro, index) => ( <Tarjetas
                
             key = {index}  
             
             titulo = {libro.titulo}
             
             imagen = {libro.imagen}
             
             sinopsis = {libro.sinopsis}

             precio = {libro.precio}
             />))
        }

      </main>
      

      <Aside/>
      </> )
}

export default ListaDeLibros;