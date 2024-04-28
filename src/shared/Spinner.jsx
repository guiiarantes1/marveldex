import React, { useEffect, useState } from 'react'
import "./Spinner.css"

const Spinner = () => {
    const [text, setText] = useState('');
    const [showImg, setShowImg] = useState(true)

    useEffect(()=> {
        setTimeout(()=> {
            setShowImg(false)
            setText(
                'Loading...'
            )
        }, 100000)
    },[]);
  return (
    <div className='spinner'>
        {
            showImg ? (
                <img src="src\assets\escudo-spinner.png"/>
            ) : (
                <h3>{}</h3>
            )
        }
    </div>
  )
}

export default Spinner