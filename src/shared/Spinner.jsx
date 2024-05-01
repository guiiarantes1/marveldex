import React, { useEffect, useState } from 'react'
import "./Spinner.css"

const Spinner = () => {  
  return (
    <div className='spinner'>
                <img className='shield' src="public\images\escudo-spinner.png" alt='Loading Image'/>  
    </div>
  )
}

export default Spinner