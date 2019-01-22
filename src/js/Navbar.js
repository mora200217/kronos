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
            <li className="nav-item col">
              <a className="nav-link" href="#">Subjects<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item col">
              <a className="nav-link" href="#">Settings</a>
            </li>
            <li className="nav-item col">
              <a className="nav-link" href="#">Info</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar
