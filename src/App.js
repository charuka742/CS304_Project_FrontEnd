import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {MovieTable} from "./Components/MovieTable";
import {HeaderComponent}  from "./Components/HeaderComponent";
import addMovie from "./Components/AddMovie";


function App() {
  return (
    <Router>
      {/* <HeaderComponent /> */}
      <Routes>
        <Route path="/" Component={HeaderComponent}></Route>
        <Route path="/moviedetails" Component={MovieTable}></Route>
        <Route path="/addMovie" Component={addMovie}></Route>
        <Route path="/updateMovie/:movieId" Component={addMovie}></Route>
        <Route path="/deleteMovie/:movieId" Component={MovieTable}></Route>
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
