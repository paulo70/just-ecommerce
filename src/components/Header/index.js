import React from 'react'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faCashRegister, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './header.scss'

const Header = props => {
  return (
    <>
      <header className='header'>
        <h1 className='header-title'>
          Books
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
              

              <NavDropdown.Divider />

              <NavDropdown.Item href=''>
                Total: R$ '0,00'
              </NavDropdown.Item>

              <span className=''>
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