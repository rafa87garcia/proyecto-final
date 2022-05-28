import { useContext, useState, useEffect } from 'react';
import Context from '../context/StaticContext';
import { productAPI } from '../shared/services';

function useProducts() {
  const [products, setProducts] = useState([]);
  const { productContext, setProductContext } = useContext(Context);
  useEffect(() => {
    const getData = async () => {
      const { data } = await productAPI.get();

      setProductContext(data);
    };
    if (!productContext.length) {
      getData();
    }
    else {
      setProducts(productContext);
    }
  }, [productContext, setProductContext]);

  return {
    products
  }
}

export default useProducts