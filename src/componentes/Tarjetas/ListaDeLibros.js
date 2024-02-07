import libros from './libros';
import Tarjetas from './Tarjetas';
import './Tarjeta.css';

function ListaDeLibros (){



    return(
      <>
       <div className="titulo">
     <h1>Obras Escritas</h1>
       </div>
      
      <main className = "tarjetasFlex">
      

        {libros.map((libro, index) => ( <Tarjetas
                
             key = {index}  
             
             titulo = {libro.titulo}
             
             imagen = {libro.imagen}
             
             sinopsis = {libro.sinopsis}
             />))
        }

      </main></> )
}

export default ListaDeLibros;