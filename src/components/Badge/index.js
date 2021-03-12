import React from 'react'

import { NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSadTear } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Description = props =>{
  
  function render(){
    
    if(props.product.length === 0) {
      return (
        <NavDropdown.Item href=''>
          <FontAwesomeIcon icon = {faSadTear} />
          &nbsp;
          Carrinho vazio
        </NavDropdown.Item>
      )
    }

    const itens = props.product.map((products, index) => (
      <NavDropdown.Item href='' key = {index}>
        {products.title} - {products.qtd} x {products.price}
        <span 
          onClick={() => props.deleteProduct(index)}> 
          &nbsp;
        <FontAwesomeIcon icon = {faTrashAlt} /> 
        </span>
        
      </NavDropdown.Item>
    ))

    return itens
  }

  return render()
}

export default Description