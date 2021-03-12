import React, {useState, useEffect} from 'react'

import Card from '../Card'
import { getProducts } from '../../../api/'
import Modal from '../modal'

import './product-list.scss'

const ProductList = (props) => {

  const [data, setdata] = useState([])
  const [showDetails, setShowDetails] = useState(false)

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

  const handleBuy = (e, product) =>{
    e.preventDefault()
    props.addProduct(product)
    props.showMsg(product)
  }

  const handleDetails = (e) => {
    e.preventDefault()
    setShowDetails(true)
    console.log('oi')
  }

  const handleClose = () => {
    setShowDetails(false)
  }

  return (
    <div className='product-list'>
      { data.map((product, index) => (
        <Card key = {product.id}>
          <span className='product-list-name'>{product.title}</span>
          <img src = {product.picture} alt='product image' />
          <span className='product-list-price'>{`$ ${product.price}`}</span>
          
          <a href='/' 
            className='product-list-details'
            onClick = {(e) => handleDetails(e)}>
            Ver detalhes  
          </a>

          <a href='/' 
            onClick = {(e) => handleBuy(e, product)} 
            className='product-list-button'>
            Comprar
          </a>

          <Modal 
            state = {showDetails} 
            title = 'Detalhes do produto'
            handleClose = {handleClose}
            description = {product.description}
          />
        </Card>
      ))}
    </div>
  )
}

export default ProductList