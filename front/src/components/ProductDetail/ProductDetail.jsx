import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import config from '../../Config';
function ProductDetail() {

  const { id } = useParams();

  const BASEURL = `${config.BASE_URL}/products/${parseInt(id)}`;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [product, setproduct] = useState({
    id: "",
    title: "",
    category: "",
    description: "",
    image: "",
    price: "",
    rating: {
      count: "",
      rate: "",
    },
  });

  useEffect(() => {
    fetch(BASEURL)
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setproduct(data);
      }).catch((err) => {
        setError(err);
      })

  }, [id])


  return (
    <div>
      {error}
      <h2>{product.title}</h2>
      <img src={product.image} alt="" />
      <p>{product.description}</p>
      <span>{product.price}</span>
      <div>{product.category}</div>
      <div>{product.rating.count}</div>

      <input type="range" min="0" max="5" value={product.rating.rate} />
    </div>
  )
}

export default ProductDetail