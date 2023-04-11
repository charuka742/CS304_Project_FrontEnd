import React from "react";
import Sidebar from "../Dashboard/Sidebar";
// import TwoColumnLayout from "./TwoColumnLayout";
import AddMovieForm from "../../Components/Movie/AddMovie";

function AddMovieAdmin() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <AddMovieForm />

    </div>
  );
}

export default AddMovieAdmin;
