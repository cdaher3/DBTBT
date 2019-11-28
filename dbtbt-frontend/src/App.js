import React from 'react';
import './App.css';
import Search from './Search';
import NavbarPage from './NavbarPage';
// import Form from './form';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  //temporary hardcoded search data
  let searchInput =
    [
      "Afghanistan",
      "Åland Islands",
      "Albania",
      "Algeria",
      "John",
      "Mark",
      "Matthew",
      "Luke",
    ];
  return (
    <div>
      <NavbarPage />
      <h1> Don't Buy That, Buy This!</h1>
      <h4> (Insert Logo Here)</h4>
      <Search content={searchInput} />
      <div></div>
    </div>
  );
}

export default App;
