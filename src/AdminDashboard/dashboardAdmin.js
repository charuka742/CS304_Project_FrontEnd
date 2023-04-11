import React from "react";
import Sidebar from "./Sidebar";
//import TwoColumnLayout from "./TwoColumnLayout";


function AdminDashboard() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <p>More content in the dashboard when display dashboard default page, it may be total movie, theatres, and else else</p>


    </div>
  );
}

export default AdminDashboard;