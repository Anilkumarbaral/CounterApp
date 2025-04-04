import React, { useState } from "react";
import { useRef } from "react";
export const Timer = () => {
  let [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };
  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
    intervalRef.current = null; // Reset the interval reference
  };
  return (
    <div
      style={{
        textAlign: "center",
        margin: "50px auto",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        width: "300px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Timer: {timer}</h2>
      <br />
      <br />
      <button
        style={{
          padding: "15px",
          margin: "5px",
          borderRadius: "10px",
          color: "green",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        }}
        onClick={startTimer}
      >
        Start
      </button>
      <button
        style={{
          padding: "15px",
          margin: "5px",
          borderRadius: "10px",
          color: "blue",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        }}
        onClick={stopTimer}
      >
        Stop
      </button>
      <button
        style={{
          padding: "15px",
          margin: "5px",
          borderRadius: "10px",
          color: "red",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f0f0f0",
          border: "1px solid #ccc",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        }}
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  );
};
