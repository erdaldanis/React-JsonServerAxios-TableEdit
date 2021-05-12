import React, { Component } from 'react';
import './App.css';
import Navbar from "./layout/Navbar";
import VeriEkle from "./forms/VeriEkle";
import VeriGuncelle from "./forms/VeriGuncelle";
import Users from "./components/Users";
import NotFound from "./pages/NotFound";



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Table from './pages/Table';

class App extends Component {
  // <Navbar title = "User App"/>
  //      <hr/>
  //       <AddUser/>
  //       <Users/>
 // fake authentication Promise
 authenticate(){
  return new Promise(resolve => setTimeout(resolve, 1000)) // 2 seconds
}

componentDidMount(){
  this.authenticate().then(() => {
    const ele = document.getElementById('ipl-progress-indicator')
    if(ele){
      // fade out
      ele.classList.add('available')
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = ''
      }, 2000)
    }
  })
}
  render() {

    return (
      <Router >
 
        <div className="container">
          <Navbar title="ERDAL PROJECT" />
          
          <hr />

          <Switch>
            <Route exact path="/" component={Users} className='loader' />
            <Route exact path="/add" component={VeriEkle} className="loader" />
            <Route exact path="/Table" component={Table} />
            <Route exact path="/edit/:id" component={VeriGuncelle} />

            <Route component={NotFound} />

          </Switch>








        </div>
      </Router>








    );

  }
}

export default App;
