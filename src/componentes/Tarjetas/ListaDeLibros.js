import libros from './libros';
import Tarjetas from './Tarjetas';
import './Tarjeta.css';

function ListaDeLibros (){

    return(
        
      <div>

        {libros.map((libro, index) => ( <Tarjetas
                
             key = {index}  
             
             titulo = {libro.titulo}
             
             imagen = {libro.imagen}
             
             sinopsis = {libro.sinopsis}
             />))
        }

      </div>
    )
}

export default ListaDeLibros;