import React from 'react'
import Buttons from './Buttons'
import { useLocation } from 'react-router-dom'

const Header = ({onAdd,showAdd}) => {
    const location = useLocation()
       return (
       
        <header className='header'>
            <h1 style={{color:'#287'}}>TASK TRACKER</h1>
            {  location.pathname === '/' &&
                <Buttons onAdd={onAdd} text={showAdd ? 'Close' : 'Add'} color={showAdd?'red':'green'}/>}
        </header>
    )
}

//INTERNAL STYLING
// const headingstyle={
//     backgroundColor :"#acacac",
// }

export default Header
