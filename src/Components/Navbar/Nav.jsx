import React, { Component } from 'react'
// import {NavBar, Nav} from 'react-bootstrap';
import {MenuItems} from './MenuItems';
import './Navbar.scss';

class Navbar extends Component {
    state = {
      menuToggle: false
    }

    MenuToggleHandler = () => {
      this.setState({menuToggle: !this.state.menuToggle})
    }

  render() {
    return (

      <nav className='Navbar'>
        {/* <div className="nav-wrapper"> */}

            <h1 className='navbar-logo'><i className="fas fa-wallet"></i>Excent</h1>
 

          <div className='menu-icon' onClick={this.MenuToggleHandler}>
            <i className={this.state.menuToggle ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>

          <ul className={this.state.menuToggle ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
              <li key={index}>
                <a className={item.cName} href={item.url}>{
                item.title}
                </a>
              </li>)
            })}
          </ul>

        {/* </div> */}
      </nav>




    )
  }
}
 
export default Navbar;