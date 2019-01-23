import React, {Component} from 'react'
import { render } from 'react-dom'
import '../less/navbar.less'

class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg  transparent menu navbar-light">
        <a className="navbar-brand" href="#">KRONO</a>
        <div className="navbar-text collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav settings row">
            <li className="nav-item col menu">
              <a className="nav-link" href="#">Subjects</a>
              <span/>
            </li>
            <li className="nav-item col">
              <a className="nav-link" href="#">Settings</a>
                <span/>
            </li>
            <li className="nav-item col">
              <a className="nav-link" href="#">Info</a>
                <span/> 
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar