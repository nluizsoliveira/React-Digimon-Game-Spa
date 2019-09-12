import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './pages/home/home';
import './index.css'

function App() {
    return (
      <div id = "App" className="App">
          <Home/>
      </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));
