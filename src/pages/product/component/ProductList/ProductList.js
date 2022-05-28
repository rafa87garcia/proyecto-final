import React from 'react';
import useProducts from '../../../../hooks/useProducts';

import "./productList.scss"

const ProductList = () => {


  const { products } = useProducts();
  console.log(products);

  if (!products.length) {
    return (<div>No se han encontrado productos</div>);
  }

  return (
    <div>
      {
        products.map((product) => (
          <div key={product._id}>
            {product.name}
          </div>
        ))
      }
    </div>
  )
}

export default ProductList