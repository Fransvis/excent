import React from 'react';
import './App.css';
import Brand from './Components/Navbar/brand.jsx';
import Navlink from './Components/Navbar/links.jsx';



const name = 'Frans Visser';


function App() {
  return (
    <div className="App">
      <Brand />
      <Navlink />
      <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
