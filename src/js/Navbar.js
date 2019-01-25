import React, {Component} from 'react'
import { render } from 'react-dom'
import '../styles/navbar.sass'

class Navbar extends Component{
  subjectsClicked(){
    console.log('Subjects Click!')
  }
  render(){
    return(
      <nav className="navbar navbar-expand-lg  transparent menu navbar-light">
        <a className="navbar-brand" href="#">KRONO</a>
        <div className="navbar-text collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav settings row">
            <li className="nav-item col menu">
              <a className="nav-link" onClick = {this.subjectsClicked} href="#">Subjects</a>
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
