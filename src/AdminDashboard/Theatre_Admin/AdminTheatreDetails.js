import React from "react";
import Sidebar from "../Dashboard/Sidebar";
// import TwoColumnLayout from "./TwoColumnLayout";
import TheatreTable from "../../Components/Theatre/TheatreTable";

function AdminTheatreDetails() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <TheatreTable />

      
    </div>
  );
}

export default AdminTheatreDetails;
