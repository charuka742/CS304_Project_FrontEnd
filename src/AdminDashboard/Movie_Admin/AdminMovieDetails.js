import React from "react";
import Sidebar from "../Dashboard/Sidebar";
// import TwoColumnLayout from "./TwoColumnLayout";
import MovieTable from "../../Components/Movie/MovieTable";

function AdminMovieDetails() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <MovieTable />
      
    </div>
  );
}

export default AdminMovieDetails;
