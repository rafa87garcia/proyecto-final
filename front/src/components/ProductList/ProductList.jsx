import React, { useState, useEffect } from 'react';

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
        <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <img src={product.image} alt=""/>
            </div>
          );
        })}
      </div>
    
  )
}

export default ProductList