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

  // const getProductById = (id) => {

  //   debugger
  //   console.log(id);
  //  const productReturn= products.find((product) => product._id === id);

  //  console.log(productReturn);

  //  return productReturn;
  
  // };

  const getProductById = (id) => products.find(({_id}) => _id === id);
    

  return {
    products,
    getProductById
  }
}

export default useProducts