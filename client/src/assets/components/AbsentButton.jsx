import React from "react";

const AbsentButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 14px",
        borderRadius: "999px",
        fontSize: "14px",
        fontWeight: "500",
        color: "white",
        display: "inline-block",
        minWidth: "60px",
        textAlign: "center",
        backgroundColor: "#E05353"
      }}
    >
      Absent
    </button>
  );
};

export default AbsentButton;