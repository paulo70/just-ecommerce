import React, { useState } from 'react'

import './product.scss'

import List  from './producList'
import Alert from 'react-bootstrap/Alert'

const Product = props => {

  const [showMessage, setShowMessage] = useState('')
  const [productsName, setProductsName] = useState('')

  const visible = () => {
    return props.visible ? null : 'hidden'
  }

  const message = (products) => {
    setShowMessage(true)
    setProductsName(products.title)

    setTimeout(() => {
      setShowMessage(false)
    },3000)
  }

  return(
    <div className={`container ${visible()}`}>
      <Alert show = {showMessage} variant='success'>
          { productsName } adicionado com sucesso ao carrinho
      </Alert>
      <List 
        showMsg = {message}
        addProduct  = {props.addProduct}
      />
    </div>
  )
}

export default Product