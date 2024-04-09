import React from 'react'
import { Leftbox } from './Leftbox'
import { Rightbox } from './Rightbox'

export const Mainbox = () => {
  return (
    <div className='main-box'>
        <Leftbox/>
        <Rightbox/>
    </div>
  )
}
