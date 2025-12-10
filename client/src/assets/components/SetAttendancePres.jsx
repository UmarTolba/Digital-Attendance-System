import React from "react";
import  { useState } from "react";
const AttendanceButton= () => {
  const [status, setStatus] = useState("Absent");

  const markPresent = () => {
    setStatus("Present");
  };

  return (
    <div>
      <button
        onClick={markPresent}
        style={{
        padding: "6px 14px",
        borderRadius: "999px",
        fontSize: "14px",
        fontWeight: "500",
        color: "white",
        display: "inline-block",
        minWidth: "60px",
        textAlign: "center",
        backgroundColor: "#4CAF50"
        }}
      >
        present
      </button>
    </div>
  );
};

export default AttendanceButton;