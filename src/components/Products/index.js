import React, { useState } from 'react'

import './product.scss'

import List  from './producList'
import Alert from 'react-bootstrap/Alert'

const Product = props => {

  return(
    <div className='container'>
      <List/>
    </div>
  )
}

export default Product