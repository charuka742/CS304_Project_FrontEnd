import React from "react";
import Sidebar from "../Dashboard/Sidebar";
// import TwoColumnLayout from "./TwoColumnLayout";
import AddTheatre from "../../Components/Theatre/AddTheatre";

function AddTheatreAdmin() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <AddTheatre />

      
    </div>
  );
}

export default AddTheatreAdmin;