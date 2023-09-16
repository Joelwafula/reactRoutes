import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.styles.scss'

const Navbar = () => {
  return (
    <div className='navpage'>
        <nav className='a'>
       < Link to='/' >Home</Link>
      <Link to='/abt' className='a' >About</Link>
        
    </nav>

    </div>
  
  )
}

export default Navbar
