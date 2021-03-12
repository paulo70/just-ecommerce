import React from 'react'

import File from '../../assets/banner.jpg'

import './banner.scss'

const Banner = () => {
  return (
    <div className='container-banner'>
      <img src = {File} alt = 'banner' className='container-banner-image'/>
    </div>
  )
}

export default Banner