import React from 'react'

import File from '../../assets/banner.jpg'

import './banner.scss'

const Banner = () => {
  return (
    <div className='container'>
      <img src = {File} alt = 'banner'/>
    </div>
  )
}

export default Banner