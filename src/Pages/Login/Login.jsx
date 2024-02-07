import React from 'react'
import "./login.css"
import 'tailwindcss/tailwind.css';
import { Link as Anchor } from 'react-router-dom'

export default function Login() {
  return (
    <section class="flex justify-center items-center" id='contLog'>	
        <h2>Ingresar como administrador</h2>
        <div class="mb-3" id='body'>
            <label for="exampleFormControlInput1" class="form-label">Usuario</label>
            <input type="email" class="form-control" name="user" id="usuario"/>
        </div>
        <div class="mb-3" id='body'>
            <label for="exampleFormControlTextarea1" class="form-label">Contraseña</label>
            <input type='password' class="form-control"name="contraseña" id="contraseña" rows="3"/>
        </div>
        <Anchor to={'/'}>Volver a todos los libros</Anchor>
	  </section>
  )
}