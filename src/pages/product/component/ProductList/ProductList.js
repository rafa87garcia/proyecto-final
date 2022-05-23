import React, { useState, useEffect } from 'react';

import "./productList.scss"

function ProductList() {

    const BASEURL = "https://fakestoreapi.com/products";
    
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(BASEURL)
        .then ((response) => response.json())
        .then(
            (response) => {
                console.log(response);
                setProducts(response);
            }
        )

    },[])
   
    return (
        <div >
        {products.map((product) => {
          return (
            <div className="product-grid" key={product.id}>
            
              <h3 class="product-grid__title">{product.title}</h3>
              
              <p class="product-grid__price">{product.price}</p>
              <img class="product-grid__image"src={product.image} alt=""/>
            </div>
          );
        })}
      </div>
    
  )
}

export default ProductList