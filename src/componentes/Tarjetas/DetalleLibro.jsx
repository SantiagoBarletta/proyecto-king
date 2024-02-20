import React from "react";
import { useParams } from "react-router-dom";
import libros from "./libros"; // Importa el archivo de libros
import imagenes from "./Imagenes"; // Importa el objeto de imágenes si es necesario
import './Tarjeta.css'

function DetalleLibro() {
  const { id } = useParams();
  const libro = libros[parseInt(id)];

  if (!libro) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <div id="mainDetalle">
      <div className="tituloDetalle">
        <h2>{libro.titulo}</h2>
      </div>
      <main className="tarjetaDetalle">
        <div className="detalle">
          <img
            className="card-img-top"
            src={imagenes[libro.imagen]}
            alt={`Imágen de la portada del libro ${libro.titulo}`}
          />
          <p className="sinopsis">{libro.sinopsis}</p>
          <p className="precio">Precio: ${libro.precio}</p>
        </div>
      </main>
    </div>
  );
}

export default DetalleLibro;
