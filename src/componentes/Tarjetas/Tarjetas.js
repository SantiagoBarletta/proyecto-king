import './Tarjetas';
import imagenes from './Imagenes';
import PropTypes from "prop-types";
import { propTypes } from 'react-bootstrap/esm/Image';


function Tarjetas (props) {

    return(

   

        <div className="card">
            <img src= {imagenes[props.imagen]} className="card-img-top" alt="Imágen de la portada del libro {props.titulo}"/>
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.sinopsis}</p>
                <div className="botonPrecio">
                <p className='precio'>Precio: $ {props.precio}</p>
                <a href="#" className="btn btn-danger">Comprar</a>
                </div>
            </div>
        </div>


    )

}

Tarjetas.propTypes={ nombre: propTypes.string, sinopsis: propTypes.string, imagen: propTypes.string}

export default Tarjetas;