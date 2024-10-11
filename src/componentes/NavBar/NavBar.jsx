import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'



const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img  className='logogoat' src={"./img/logo_1.jpg"} alt="Logo Goat" />
      </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to="/"> Home </NavLink>
                
                </li>

                <li>
                  <NavLink to="/categoria/Zapatillas"> Zapatillas </NavLink>
                  
                </li>

                <li>
                 <NavLink to="/categoria/Yezzy"> Yezzy Slide </NavLink> 
                </li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar