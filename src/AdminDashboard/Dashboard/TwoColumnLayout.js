import React from "react";

function TwoColumnLayout({ leftColumn, rightColumn }) {
  return (
    <div className="flex flex-row">
      <div className="w-1/2">{leftColumn}</div>
      <div className="w-1/2">{rightColumn}</div>
    </div>
  );
}

export default TwoColumnLayout;
