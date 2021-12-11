import React from 'react'

const Buttons = ({text,color,onAdd}) => {
  
    return (
        <button onClick={onAdd} className='btn' style={{backgroundColor:color}}>{text}</button>
    )
}

Buttons.defaultProps={
   color:'steelblue',
    text :'Add'
}


export default Buttons
