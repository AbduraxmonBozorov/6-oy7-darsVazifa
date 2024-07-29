import React from 'react';
import styles from './index.module.css'
import { useNavigate } from 'react-router-dom';

function Card(props) {
    const {image, name, id, category} = props.product
    const navigate=useNavigate();

    function handleClick(){
      navigate(`/detailes/${id}`)
    }
  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{category}</p>
    </div>
  )
}

export default Card
