import React, { useState, useEffect } from 'react';
import './home.css';
import axios from 'axios';
import CardBook from '../../Components/CardBook/CardBook';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/book')
      .then(response => {
        setBooks(response.data.books); // Suponiendo que response.data contiene los libros
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []); // Solo ejecutar una vez al montar el componente

  return (
    <div className='home'>
      <div className="headerHome">
        <h1>BIBLIOTECA MUNICIPAL DE LA CARLOTA</h1>
        <a href="/login">Admin</a>
      </div>
      <div className="contFiltros">
        <h3>Buscá tu libro</h3>
        <input type="text" />
      </div>
      <div className="contlibros">
        {books.map(book => (
          <CardBook
            key={book._id}
            title={book.titulo}
            category={book.categoria}
            description={book.descripcion}
          />
        ))}
      </div>
    </div>
  );
}