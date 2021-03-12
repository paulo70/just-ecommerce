import React, {useState} from 'react'

import Header from './components/Header'
import List   from './components/Products'
import Banner from './components/Banner'

import Alert  from 'react-bootstrap/Alert'

const App = () => {
  const [ car, setCar ] = useState({products: []})
  const [ showProducts, setShowProducts] = useState(true)
  const [ checkout, setCheckout] = useState(false)
  const [ total, seTotal] = useState('0,00')
  const [ msgDeleteProduct, setMsgDeleteProduct] = useState(false)
  const [ msgCheckout, setMsgCheckout] = useState(false)

  const addProduct = (product) =>{
    const copyCar = Object.assign({}, car)

    // UPDATE QTD

    let newProduct = true

    copyCar.products.forEach((prod, index) => {
      
      if(prod.title === product.title){
        copyCar.products[index].qtd++
        newProduct = false
      }
    })

    // ADD PRODUCT

    if(newProduct){
     copyCar.products.push({
        title: product.title, price: product.price, qtd: 1
      })
    }
    

    setCar(copyCar)
  }

  const handleShowItens = () => {
    setCheckout(false)
    setShowProducts(true)
  }

  const handleCloseShopping = (total) => {
    setShowProducts(false)
    seTotal(total)
    setCar({products: []})
    setMsgCheckout(true)

    setTimeout(() => {
      setShowProducts(true)
      setMsgCheckout(false)
    },3000)
  }

  const deleteProduct = (index) => {
    const copy = Object.assign({}, car)
    const obj = car.products.splice(index)
    setCar(copy)
    setMsgDeleteProduct(true)

    setTimeout(() => {
      setMsgDeleteProduct(false)
    },3000)
  }
  
  return (
    <>
      <Header
        product = {car.products}
        handleShowItens={handleShowItens}
        handleCloseShopping = {handleCloseShopping}
        deleteProduct = {deleteProduct}
      />
      
      <Alert show = {msgDeleteProduct} variant='success' className='msg'>
        Produto removido com sucesso do carrinho
      </Alert>
      
      <Alert show = {msgCheckout} variant='success' className='msg'>
        Um email será enviado para sua caixa de mensagem
      </Alert>
      
      <Banner />
      
      <List 
        visible={showProducts}
        addProduct={addProduct}
      />
    </>
  )
}

export default App