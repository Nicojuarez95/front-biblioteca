import React, { useState, useEffect } from "react";
import axios from 'axios';
import './cardbook.css';

export default function CardBook({ id, title, category, description, onBookDeleted, isLoggedIn }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    axios.delete(`http://localhost:8080/book/delete/${id}`)
      .then(response => {
        console.log('Libro eliminado:', response.data);
        setDeleted(true);
        setShowConfirmation(false);
      })
      .catch(error => {
        console.error('Error al eliminar el libro:', error);
        setShowConfirmation(false);
      });
  };

  useEffect(() => {
    if (deleted) {
      // Actualiza la lista de libros después de la eliminación
      onBookDeleted(id);
    }
  }, [deleted, id, onBookDeleted]); // Se ejecuta cuando deleted cambia

  useEffect(() => {
    if (showConfirmation) {
      // Muestra la alerta de confirmación
      const confirm = window.confirm('¿Estás seguro de borrar este libro?');
      if (confirm) {
        confirmDelete();
      } else {
        setShowConfirmation(false);
      }
    }
  }, [showConfirmation]); // Se ejecuta cuando showConfirmation cambia

  
  return (
    <div className="card" style={{ width: "95%", height: "auto", zIndex:"0" }}>
      <div className="card-body" style={{ padding: "10px" }}>
        <div className="card-top-body" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
          <h5 className="card-title">{title}</h5>
          {isLoggedIn && <button style={{ background:"red", color:"white", padding:"5px", fontSize:"10px", border:"1px", borderRadius:"5px" }} onClick={handleDelete}>BORRAR</button>}
        </div>
        <p className="card-text">{description}</p>
        <a href="#" className="card-link">Link a algun lado</a>
      </div>
    </div>
  );
}