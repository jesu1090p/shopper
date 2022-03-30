import React from 'react';
import '../styles/testimonio.css';

function Testimonio(props){
  return (
    <div className='contenedor-testimonio container'>
      <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}.png`)} alt={`Imagen de ${props.nombre} de ${props.empresa}`} title={`Imagen de ${props.nombre} de ${props.empresa}`}/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> de {props.pais}</p>
        <p className='text-wrap empresa-testimonio'>Trabaja como {props.cargo} en <strong>{props.empresa}</strong></p>
        {props.testimonio}
      </div>
    </div>
  );
};

export default Testimonio;