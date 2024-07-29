import React, {useState, useEffect} from 'react';
import styles from "./index.module.css";
import { useParams } from 'react-router-dom';

function Detailes(props) {
  const [product, setProduct] = useState({})
  const {image, name,  category, newPrice} = props;
  const params=useParams();
  console.log(params.id);
  let id=params.id
  async function getDataFromApi(url) {
    try {
      const resp = await fetch(url);
      let data = [];
      if (resp.status == 200) {
        data = await resp.json();
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDataFromApi(`https://cars-pagination.onrender.com/products/${id}`)
      .then(data=>{
       setProduct(data)
      })
      .catch(error=>{
        console.log(error);
      })
  }, [])
  return (
    <div className={styles.detail}>
      <h3>Detailes</h3>
      <div className={styles.detailes}>
        <img src={product.image} alt="" />
        <div className={styles.about}>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <strong>{product.newPrice}</strong>
        </div>
      </div>
    </div>
  )
}

export default Detailes
