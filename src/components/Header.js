import React from 'react'
import Buttons from './Buttons'

const Header = ({onAdd,showAdd}) => {
       return (
       
        <header className='header'>
            <h1 style={{color:'#287'}}>TASK TRACKER</h1>
            <Buttons onAdd={onAdd} text={showAdd ? 'Close' : 'Add'} color={showAdd?'red':'green'}/>
        </header>
    )
}

//INTERNAL STYLING
// const headingstyle={
//     backgroundColor :"#acacac",
// }

export default Header
