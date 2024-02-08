import React from "react";
import './cardbook.css';

export default function CardBook({ title, category, description }) {
    return (
      <div className="card" style={{ width: "95%", height: "auto", zIndex:"0" }}>
        <div className="card-body" style={{ padding: "15px" }}>
          <div className="card-top-body" style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{category}</h6>
          </div>
          <p className="card-text">{description}</p>
          <a href="#" className="card-link">Link a algun lado</a>
        </div>
      </div>
    );
  }