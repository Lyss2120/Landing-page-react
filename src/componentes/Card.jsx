import React from 'react';


function Card(props) {
  return (
    <div className='card shadow' >
      <img src={require(`../imagenes/${props.img}.png`)} alt="imagen" />
      <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.text}</p>
      </div>
    </div>
  )
}

export default Card