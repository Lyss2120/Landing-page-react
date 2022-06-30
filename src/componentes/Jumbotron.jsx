import React from 'react'
import '../hojas estilo/Jumbotron.css'


function Jumbotron(props) {
  return (
        <div className="mt-5 pt-4 container-sm" > 
            <div className="mt-3 pb-3 pt-5 px-4 container bg"> 
                <h1 className='display-2 fw-normal p-1'>{props.titulo}</h1>
                <p>{props.texto}</p>
                <button className='btn btn-primary mb-3' >{props.boton}</button>
            </div>
        </div>
  )
}

export default Jumbotron