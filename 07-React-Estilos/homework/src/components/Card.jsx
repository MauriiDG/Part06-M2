import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  
  return (
    <div className={s.wrapper}>
        <button onClick={props.onClose} className={s.cardBtn}>X</button>
        <h3>{props.name}</h3>
      <div className={s.tempCont}>
        <div> 
          <h6>Min</h6>
          <p>{props.min}°</p>
        </div>
        <div>
          <h6>Max</h6>
          <p>{props.max}°</p>
        </div>  
          <img src= {`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>     
      </div> 
    </div>
    )
  };