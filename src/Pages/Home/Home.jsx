import React, { useState, useEffect } from 'react';
import './home.css';
import axios from 'axios';
import ModaleCreateBook from '../../Components/ModalCreateBook/ModalCreateBook';
import CardBook from '../../Components/CardBook/CardBook';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(!true);
  const [open, setOpen] = useState(!true);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/book')
      .then(response => {
        setBooks(response.data.books); // Suponiendo que response.data contiene los libros
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
    
    // Verificar si hay un token almacenado en el localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []); // Solo ejecutar una vez al montar el componente
    // Función para cerrar sesión
    const handleLogout = () => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
    };

    function openSettings() {
      setOpen(true);
    }
     function closeModal2() {
    setOpen(false);
    setIsClosed(true);
  }

  

  return (
    <div className='home'>
      <div className="headerHome">
        <h1>BIBLIOTECA MUNICIPAL DE LA CARLOTA</h1>
        {isLoggedIn && <button onClick={openSettings}>Agregar libro</button>}
        {open && (
                  <ModaleCreateBook key={isClosed} onClose={closeModal2} />
                )}
        {isLoggedIn && <button onClick={() => handleLogout()}>Cerrar Sesión</button>}
        {!isLoggedIn && <a href="/login">Admin</a>}
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