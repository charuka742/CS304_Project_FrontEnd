import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Components/MainComponents/Footer";
import Carousel from "./Components/MainComponents/Carousel";
import Navbar from "./Components/MainComponents/Navbar";
import Card from "./Components/MainComponents/Card";
import SignUp from "./User/SignUp";
import Login from "./User/Login";
// import AddTheatre from "./Components/Theatre/AddTheatre";
import AboutUsPage from "./Components/MainComponents/AboutUs";
import ContactUs from "./Components/MainComponents/Contact";
import Sidebar from "./AdminDashboard/Dashboard/Sidebar";
import SingleMovie from "./Components/Movie/FilmDetails";

import Promotions from "./Components/Promotions/Promotions";
import FeedbackList from "./Components/Feedback/FeedbackList";
import AddFeedback from "./Components/Feedback/AddFeedback"; 

import AdminMovieDetails from "./AdminDashboard/Movie_Admin/AdminMovieDetails";
import AdminTheatreDetails from "./AdminDashboard/Theatre_Admin/AdminTheatreDetails";
// import DashboardAdmin from "./AdminDashboard/dashboardAdmin";
import AddMovieAdmin from "./AdminDashboard/Movie_Admin/AddMovieAdmin";
import AddTheatreAdmin from "./AdminDashboard/Theatre_Admin/AddTheatreAdmin";

// import FilmDetails from "./Components/Movie/FilmDetails";

function App() {
  return (
    <Router>
      <Navbar exact path="/" />
      <Routes>

        <Route path="/" Component={Carousel}></Route>
        <Route path="/movies" Component={Card}></Route>
        
        {/* singleMovie */}
              <Route path="/SingleMovie" Component={SingleMovie}></Route>
        
        <Route path="/signin" Component={SignUp}></Route>
        <Route path="/login" Component={Login}></Route>
        
        {/* <Route path="/addTheatre" Component={AddTheatre}></Route> */}
        <Route path="/about" Component={AboutUsPage}></Route>
        <Route path="/contact" Component={ContactUs}></Route>
        <Route path="/feedbackList" Component={FeedbackList}></Route>
        <Route path="/addfeedback" Component={AddFeedback}></Route>
        <Route path="/promotions" Component={Promotions}></Route>
        {/* <Route path="/movie" Component={FilmDetails}></Route> */}


        {/* Admin Dashboard */}
        <Route path="/dashboard" Component={Sidebar}></Route>
        
        {/* Movie */}
        <Route path="/movieDetails" Component={AdminMovieDetails}></Route>
        <Route path="/addMovie" Component={AddMovieAdmin}></Route>
        <Route path="/updateMovie/:movieId" Component={AddMovieAdmin}></Route>
        <Route path="/deleteMovie/:movieId" Component={AdminMovieDetails}></Route>



        {/* Theatre */}
        <Route path="/theatreDetails" Component={AdminTheatreDetails}></Route>
        <Route path="/addTheatre" Component={AddTheatreAdmin}></Route>
        {/* <Route path="/updateTheatre/:theatreId" Component={AddTheatreAdmin}></Route> */}
        {/* <Route path="/deleteTheatre/:theatreId" Component={AdminTheatreDetails}></Route>  */}



        {/* User */}
        {/* <Route path="/deleteUser/:userId" Component={AdminUserDetails}></Route>
        <Route path="/userDetails" Component={AdminUserDetails}></Route> */}

        

      </Routes>
      <Footer exact path="/" />
    </Router>
  );
}

export default App;
