import { useContext, useState, useEffect } from 'react';
import Context from '../context/StaticContext';
import { productAPI } from '../shared/services';

function useProducts() {
  
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState(null);
  const { productContext, setProductContext } = useContext(Context);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await productAPI.get();
        setProductContext(data);
      } catch (error) {
        setProductsError(error);
      }
    };
    if (!productContext.length) {
      getData();
    }
    else {
      setProducts(productContext);
    }
  }, [productContext, setProductContext]);

  return {
    products,
    productsError
  }
}

export default useProducts