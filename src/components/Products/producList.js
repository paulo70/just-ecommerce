import React, {useState, useEffect} from 'react'

import Card from '../Card'
import { getProducts } from '../../../api/'
import Modal from '../modal'

import './product-list.scss'

const ProductList = (props) => {

  const [data, setdata] = useState([])
  const [showDetails, setShowDetails] = useState(false)
  const [details, setDetails] = useState([])

  useEffect(() => {

   const fetchData = async () =>{
    try{
      const response = await getProducts()
      setdata(response.products)
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

  const handleDetails = (e, product) => {
    e.preventDefault()
    setShowDetails(true)
    setDetails(product)
  }

  const handleClose = () => {
    setShowDetails(false)
  }

  return (
    <div className='product-list'>
      { data.map((product, index) => (
        <Card key = {index}>
          <span className='product-list-name'>{product.title}</span>
          <img src = {product.picture} alt='product image' />
          <span className='product-list-price'>{`$ ${product.price}`}</span>
          
          <a href='/' 
            className='product-list-details'
            onClick = {(e) => handleDetails(e, product)}>
            Ver detalhes  
          </a>

          <a href='/' 
            onClick = {(e) => handleBuy(e, product)} 
            className='product-list-button'>
            Comprar
          </a>
        </Card>
      ))}
      <Modal 
        state = {showDetails} 
        title = 'Detalhes do produto'
        handleClose = {handleClose}
        details = {details} 
        />
    </div>
  )
}

export default ProductList