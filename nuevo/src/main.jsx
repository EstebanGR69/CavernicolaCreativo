import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const raiz=ReactDOM.createRoot(document.getElementById('root'))
 function Saludar(){
  return (
    <div>
    <h1>Este es un componente</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia obcaecati enim possimus, facere cum, debitis illum in ea placeat a explicabo reprehenderit. Nam, quo repellat! Fugit eaque quis quibusdam!</p>
  </div>
  ) 
 }
 const Muerto=()=>{
  var muerto=true
  return <h1>{muerto?"Estás muerto":"Estás vivo"}</h1>
 }
 const Usuario=()=>{
  const usr={
    nombre:"Esteban",
    apellido:"Galvan"
  }
  return (  
  <div>
    <h1>Nombre: {usr.nombre}</h1>
    <h1>Apellido: {usr.apellido}</h1>
  </div>)
 }
raiz.render(
<div>
  <Saludar/>
  <Muerto/>
  <Usuario/>
</div>)
