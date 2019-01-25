import React, {Component} from 'react'
import { render } from 'react-dom'
import '../styles/main.sass'
import 'jquery'
import Clock from './main/Clock.js'
import TimerNotifications from './main/TimerNotifications.js'
import Background from './main/Background.js'


class Main extends Component{
render(){
  return(
    <section className="main">
      <div className="row main">
      <TimerNotifications />
    <Clock />
    <Background />
      </div>
    </section>
  );
}
}

export default Main
