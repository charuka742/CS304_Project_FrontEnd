import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MovieTable from "./Components/Movie/MovieTable";
import HeaderComponent  from "./Components/MainComponents/HeaderComponent";
import addMovie from "./Components/Movie/AddMovie";
import Footer from "./Components/MainComponents/Footer";
import Carousel from "./Components/MainComponents/Carousel";
import Navbar from "./Components/MainComponents/Navbar";
import Card from "./Components/MainComponents/Card"
import SignUp from "./Login/SignUp";
import Login from "./Login/Login";
import AddTheatre from "./Components/Theatre/AddTheatre"
import AboutUsPage from "./Components/MainComponents/AboutUs";
import ContactUs from "./Components/MainComponents/Contact";

function App() {
  return (
    <Router>
      <Navbar exact path="/"/>
      <Routes>
        <Route path="/addTheatre" Component={AddTheatre}></Route>
        <Route path="/" Component={Carousel}></Route>
        <Route path="/" Component={HeaderComponent}></Route>
        <Route path="/movies" Component={Card}></Route>
        <Route path="/signin" Component={SignUp}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/moviedetails" Component={MovieTable}></Route>
        <Route path="/addMovie" Component={addMovie}></Route>
        <Route path="/updateMovie/:movieId" Component={addMovie}></Route>
        <Route path="/deleteMovie/:movieId" Component={MovieTable}></Route>
        <Route path="/about" Component={AboutUsPage}></Route>
        <Route path="/contact" Component={ContactUs}></Route>
      </Routes>
      <Footer exact path="/"/>
    </Router>
  );
}

export default App;
