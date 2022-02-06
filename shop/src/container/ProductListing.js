
import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios'
import { useEffect } from 'react';
import { setProducts } from '../redux/actions/ProductActions';

const ProductListing = () => {

  const fetchProducts = async ()=>{
    const res = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
      console.log(err)
    })
    console.log(res.data);
  }

  useEffect(()=>{
    fetchProducts()
  },[])
  console.log('products',products);

  const products = useSelector((state)=> state)

  const dispatch = useDispatch()
  dispatch(setProducts((res.data))
  return(
    <div className="ui grid container">
      <ProductComponent/>
    </div>
  );
};

export default ProductListing;
