import React, {Component} from 'react'
import { render } from 'react-dom'
import '../styles/footer.sass'

class Footer extends Component{
  render(){
    return(
      <section className="footer">
        <div className="fluid-container">
          <span>Majors 2018 |  Andrés Morales</span>
        </div>
      </section>
    );
  }
}

export default Footer
