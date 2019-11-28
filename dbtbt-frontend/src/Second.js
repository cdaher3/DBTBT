import React from 'react';
import './App.css';
import Search from './Search';
import NavbarPage from './NavbarPage';
import NavigationNavPage from './NavigationNavPage';
// import listSearch from './ListSearch';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  //temporary hardcoded search data
  // let searchInput =
  //   [
  //   "Afghanistan",
  //   "Åland Islands",
  //   "Albania",
  //   "Algeria",
  //   "John",
  //   "Mark",
  //   "Matthew",
  //   "Luke",
  //   ];
  return (
      // <ListSearch />
    
    <div>
    <NavbarPage/>
    {/* <Search content={searchInput} /> */}
    </div>
  );
}

export default App;
