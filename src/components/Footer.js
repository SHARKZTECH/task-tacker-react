import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy;  Sharkz Tech 2021</p>
            <Link to='/about'>About</Link>
        </footer>
    )
}

export default Footer
