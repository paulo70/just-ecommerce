import React from 'react'
import { Modal, Button } from 'react-bootstrap'

import './modal.scss'

const Details = (props) => {
  return (
    <Modal show = { props.state } onHide = {props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title><span className='modal-title'>{props.title}</span></Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <ul className='modal-infos'>
          <li>ID: {props.details.id}</li>
          <li><strong>Marca</strong>: {props.details.brand}</li>
          <li><strong>Memória</strong>: {props.details.memory}</li>
          <li><strong>Chip</strong>: {props.details.chipType}</li>
          <li><strong>Estoque</strong>: {props.details.quantity}</li>
          <li><strong>Descrição</strong>: {props.details.description}</li>
        </ul>
      </Modal.Body>
    </Modal>
  )
}

export default Details