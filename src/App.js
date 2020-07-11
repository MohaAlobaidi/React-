import React,{Component} from 'react';
// import './App.css';
import Index from './component/Index/Index'
import Work from './component/Work/Work'
import Portfolio from './component/Portfolio/Portfolio'
import Profile from './component/Profile/Profilie'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Navbar from './component/Navbar/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Route exact path='/' component={Index}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/work' component ={Work}/>
        <Route path='/portfolio' component ={Portfolio}/>
        <Route path='/profile' component ={Profile}/>
        <Route path='/about' component ={About}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
