import React, { useState, useEffect } from 'react';
import './ApiLibros.css'

function ApiLibros() {
  
    const [books, setBooks] = useState([]);

    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const response = await fetch(
            'https://openlibrary.org/search.json?author=Stephen%20King'
          );
          const data = await response.json();
          setBooks(data.docs);
        } catch (error) {
          console.error('Error recopilando la info:', error);
        }
      };
  
      fetchBooks();
    }, []);
  
    return (
       <> 
       <div className='titulo'><h1>Libros de Stephen King</h1></div>
         
    <main className = "tarjetasFlex">


    {books.map((book, index) => (
    <div className="card">
    <img src= {`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} className="card-img-top" alt="Imágen de la portada del libro {props.titulo}"/>
    <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p>Año de publicación: {book.first_publish_year}</p>
        <div className="botonPrecio">
        <a href="#" className="btn btn-danger">Comprar</a>
        </div>
    </div>
</div>

    ))}</main>
    </>    
    )};

export default ApiLibros;
