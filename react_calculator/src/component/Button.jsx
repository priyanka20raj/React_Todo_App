import React from 'react'
import './style.css'

function Button() {
  return (
    <div className='button-box'>
      <div className='main-button'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div className='main-button'>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
      </div>
      <div className='main-button'>
        <button>9</button>
        <button>0</button>
        <button>C</button>
        <button>=</button>
      </div>
      <div className='main-button'>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>%</button>
      </div>
    </div>

  )
}

export default Button