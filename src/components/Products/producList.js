import React, {useState, useEffect} from 'react'

import Card from '../Card'
import { getProducts } from '../../../api/'

import './product-list.scss'

const ProductList = (props) => {

  const [data, setdata] = useState([])

  useEffect(() => {

   const fetchData = async () =>{
    try{
      const response = await getProducts()
      setdata(response.products)
      console.log(response.products, 'data')
    } catch(error){
      console.log('ERROR', error)
    }
   }

   fetchData() 

  },[])

  return (
    <div className='product-list'>
      { data.map((product, index) => (
        <Card key = {product.id}>
          <span className='product-list-name'>{product.title}</span>
          <img src = {product.picture} alt='product image' />
          <a href="/" 
            onClick = {(e) => handleBuy(e, product)} 
            className='product-list-button'>
            Comprar
          </a>
        </Card>
      ))}
    </div>
  )
}

export default ProductList