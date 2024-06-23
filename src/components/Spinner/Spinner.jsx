import "./Spinner.css";
import React from "react";

const Spinner = () => {
  const range = (start_i, stop_i) => {
    const array = [];
    for (let index = start_i; index < stop_i + 1; index++) {
      array.push(index);
    }

    return array;
  };

  return (
    <div className="spinner-layout">
      <div className="loader">
        <div className="dots">
          {range(1, 15).map((value, index) => (
            <span style={{ "--i": value }} key={index}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spinner;
