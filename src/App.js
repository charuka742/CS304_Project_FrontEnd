import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MovieTable from "./Components/Movie/MovieTable";
import HeaderComponent from "./Components/MainComponents/HeaderComponent";
import addMovie from "./Components/Movie/AddMovie";
import Footer from "./Components/MainComponents/Footer";
import Carousel from "./Components/MainComponents/Carousel";
import Navbar from "./Components/MainComponents/Navbar";
import Card from "./Components/MainComponents/Card";
import SignUp from "./Login/SignUp";
import Login from "./Login/Login";
import AddTheatre from "./Components/Theatre/AddTheatre";
import AboutUsPage from "./Components/MainComponents/AboutUs";
import ContactUs from "./Components/MainComponents/Contact";
import TheatreTable from "./Components/Theatre/TheatreTable";
import Sidebar from "./AdminDashboard/Sidebar";
import SingleMovie from "../src/Components/Movie/SingleMovie";
import FeedbackPage from "./Components/Feedback/Feedback";
import Promotions from "./Components/Promotions/Promotions"
import FeedbackAll from "./Components/Feedback/FeedbackAll";



function App() {
  return (
    <Router>
      {/* <Navbar exact path="/" /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> <HeaderComponent /> <Footer />
            </>
          }
        ></Route>
        <Route path="/" Component={Carousel}></Route>

        <Route path="/movies" Component={Card}></Route>

        <Route path="/signin" Component={SignUp}></Route>
        <Route path="/login" Component={Login}></Route>

        <Route path="/moviedetails" Component={MovieTable}></Route>
        <Route path="/addMovie" Component={addMovie}></Route>
        <Route path="/updateMovie/:movieId" Component={addMovie}></Route>
        <Route path="/deleteMovie/:movieId" Component={MovieTable}></Route>

        <Route path="/theatredetails" Component={TheatreTable}></Route>
        <Route path="/addTheatre" Component={AddTheatre}></Route>

        <Route path="/about" Component={AboutUsPage}></Route>
        <Route path="/contact" Component={ContactUs}></Route>
        <Route path="/dashboard" Component={Sidebar}></Route>
        <Route path="/SingleMovie" Component={SingleMovie}></Route>

        <Route path="/feedbacks" Component={FeedbackAll}></Route>
        <Route path="/promotions" Component={Promotions}></Route>
        
      </Routes>
      {/* <Footer exact path="/" /> */}
    </Router>
  );
}

export default App;
