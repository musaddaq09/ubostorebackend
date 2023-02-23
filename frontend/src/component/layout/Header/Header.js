import React from 'react'
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom"
import {FaCartPlus} from "react-icons/fa"

const Header = () => {
  return (
    <div className='main'>
      <div className='first'>
        <img className='logo' src={logo} alt="logo"/>
        <Link to="/search"> <input className='search' type="text" placeholder='search.....'/> </Link>
        <Link className='cart' to="/cart">< FaCartPlus /></Link>
      </div>
      <div className='second'>
         <ul className='navlinks'>
          <Link className='links' to="/">
          <li >
            Home
          </li>
          </Link>
          <Link  className='links' to="/products">
          <li>
            Shop
          </li>
          </Link>
          <Link className='links' to="/about">
          <li>
            About
          </li>
          </Link>
          <Link className='links' to="/contact">
          <li>
            Contact
          </li>
          </Link>
          
          <Link className='links' to='/login'>
          <li>
            Login
          </li>
          </Link>
          
          </ul>
         
      </div>
    </div>
  )
}

export default Header