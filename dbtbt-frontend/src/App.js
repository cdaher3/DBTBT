import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFilteringComponent from './MyFilteringComponent';

function App() {
  //temporary hardcoded search data
  let searchInput =
    [
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "John"
    ];
  return (
    <MyFilteringComponent content={searchInput} />
  );
}

export default App;
