import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
//import jwt from "jsonwebtoken";

import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Navbar} from './components/navbar/navbar'

import './index.css'

function App() {
    return (
      <div id = "App" className="App">
          <Navbar/>
          <Home/>
      </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
