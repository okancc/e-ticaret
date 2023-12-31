import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts} from '../../redux/productSlice'
import Loading from '../Loading';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch()
  const {products, productsStatus} = useSelector(state => state.products);


  console.log(products, "products");



  useEffect(()=> {
    dispatch(getProducts())
  },[dispatch])
  return (
    <div>
      {
        productsStatus == "LOADİNG" ? <Loading/> :
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>

          {
              products?.map((product,i) => (
                <Product key={i} product = {product}/>
              ) )  
          
          }
        </div>
      }
    </div>
  )
}

export default Products;