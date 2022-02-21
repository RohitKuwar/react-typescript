import React from 'react'
import { Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <div className='container'>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
    </div>
  );
}
export default App;
