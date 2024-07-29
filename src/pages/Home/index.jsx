import React, { useState, useEffect } from 'react'
import styles from "./index.module.css";
import Card from "../../components/Card";

function Home() {
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
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  useEffect(() => {
    getDataFromApi(`https://cars-pagination.onrender.com/products`)
      .then(data=>{
        setProducts(data)
        setProducts2(data)
      })
      .catch(error=>{
        console.log(error);
      })
  }, [])

  function handleChange(event){
    console.log(event.target.value);
    let copiedProducts=JSON.parse(JSON.stringify(products));
    copiedProducts=copiedProducts.filter((product, ind)=>{
      return product.category==event.target.value
    })
    console.log(copiedProducts);
    setProducts2(copiedProducts);
  }

  return (
    <div>
      <div style={{margin: "20px 100px" }}>
        <select name="" id="category" onChange={handleChange}>
          <option value="не популярен">не популярен</option>
          <option value="известный">известный</option>
          <option value="средний">средний</option>
        </select>
      </div>
      <div className={styles.cards}>
        {
          products2.length > 0 && products2.map((product, index)=>{
            return (<Card key={index} product={product}></Card>)
          })
        }
      </div>
    </div>
  )
}

export default Home
