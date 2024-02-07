import React from 'react'
import './home.css'
import { Link as Anchor } from 'react-router-dom'

export default function Home() {

  return (
    <div className='home'>
        <div className="headerHome">
            <h1>BIBLIOTECA MUNICIPAL DE LA CARLOTA</h1>
            <Anchor to={'/login'}>Admin</Anchor>
        </div>
        <div className="contFiltros">
            <h3>Buscá tu libro</h3>
            <input type="text" />
        </div>
        <div className="contlibros">
            <div class="card" style={{width: "95%", height:"auto"}}>
                <div class="card-body" style={{padding:"15px"}}>
                    <div className="card-top-body" style={{display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
                        <h5 class="card-title">Titulo</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Categoria</h6>
                    </div>
                    <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus libero odio blanditiis perspiciatis repellat illum vel similique delectus, iure, praesentium voluptatum cupiditate, qui voluptates fugit molestiae numquam obcaecati assumenda quae?</p>
                    <a href="#" class="card-link">Link a algun lado</a>
                </div>
            </div>
        </div>
    </div>
  )
}