import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <h1 className='navbar-logo'>
          Excent
        </h1>

        <form  className='search-form'>
          <input 
          className=' search-input' 
          type="text"
          
          />
          <button>Search</button>
        </form>

        <ul className='navbar-content'>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </nav>
    </div>
  )
}
 
export default Navbar;