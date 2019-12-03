import React from "react";
import "./App.css";
import Search from "./Search";
import Submit from "./Submit";
import Main from "./Main";
import NavbarPage from './NavbarPage';
// import Form from './form';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  //temporary hardcoded search data
  let searchInput = [
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "John",
    "Mark",
    "Matthew",
    "Luke"
  ];
  return (
    <div>
      {/* <Main /> */}
      {/* <Search content={searchInput} /> */}
      <Submit content={searchInput} />
      {/* <HomePage /> */}
      {/* <NavbarPage/> */}
    </div>
  );
}

export default App;
