
import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios'
import { useEffect } from 'react';
import { setProducts } from '../redux/actions/ProductActions';

const ProductListing = () => {
  
  const products = useSelector((state)=> state)
  const dispatch = useDispatch()
  const fetchProducts = async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
      console.log(err)
    })
    dispatch(setProducts((response.data)))
  }
    // console.log(response.data);

  useEffect(()=>{
    fetchProducts()
  },[])
  console.log('products',products);

  

  
  return(
    <div className="ui grid container">
      <ProductComponent/>
    </div>
  );
};

export default ProductListing;
