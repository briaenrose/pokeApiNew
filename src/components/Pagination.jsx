import React, { useState, useEffect } from "react";

const Pagination = (props) => {
  const { handlePrevious, handleNext } = props;
  return (
    <div>
      <button onClick={handlePrevious}>Prev</button>
      <button id="Next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
