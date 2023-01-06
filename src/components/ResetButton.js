import React from "react";
import "./ResetButton.css";

export default function ResetButton({ resetBoard }) {
  return (
    <button className="reset-button" onClick={resetBoard}>
      Reset
    </button>
  );
}
