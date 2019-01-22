import React, {Component} from 'react'
import { render } from 'react-dom'

import Footer from './js/Footer.js'
import Main from './js/Main.js'
import Navbar from './js/Navbar.js'

import './less/main.less'

class App extends Component{
  render(){
    return(
<div>
     <Navbar />
     <Main />
     <Footer />
    </div>
  );
  }
}

export default App
