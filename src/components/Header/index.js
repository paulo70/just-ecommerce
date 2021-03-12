import React from 'react'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faCashRegister, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import Badge from '../Badge'


import './header.scss'

const Header = props => {

  const calculateTotal = () =>{

    if(props.product.length === 0){
      return '0,00'
    }

    let total = 0;

    props.product.forEach(products => {
      let price = products.price
      total += parseFloat(price) * products.qtd
    })

    return total.toFixed(2).toString()
  }

  return (
    <>
      <header className='header'>
        <h1 className='header-title'>
          CellPhone
         <span className='header-title-sub'>store</span>
        </h1>
      </header> 
      <Navbar>
        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <NavDropdown title = {
                <div style = {{display:'inline-block'}}>
                  <FontAwesomeIcon icon = {faShoppingCart} />
                  &nbsp;
                  Carrinho
                </div>
              }
              drop='left'>

              <NavDropdown.Item href='' onClick={props.handleShowItens}>
                <FontAwesomeIcon icon={faShoppingBasket} />
                  &nbsp;
                <strong>Produtos</strong>
              </NavDropdown.Item>

              <NavDropdown.Divider />
                <Badge 
                  product = {props.product}
                  deleteProduct = {props.deleteProduct}
                />
              <NavDropdown.Divider />

              <NavDropdown.Item href=''>
                Total: {calculateTotal()}
              </NavDropdown.Item>

              <span className={props.product.length === 0 ? 'hidden' : null}>
                <NavDropdown.Divider />
                <NavDropdown.Item href='' onClick={() => props.handleCloseShopping(calculateTotal())}>
                  <FontAwesomeIcon icon ={faCashRegister} />
                  &nbsp;
                  Finalizar compra
                </NavDropdown.Item>
              </span>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
      <div className='nav-bars'></div>
    </>
  )
}

export default Header