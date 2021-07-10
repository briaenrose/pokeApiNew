import React, { useState, useEffect } from "react";

const Pagination = (props) => {
  const { handlePrevious, handleNext } = props;
  return (
    <div>
      <button className="button" onClick={handlePrevious}>
        <p>Prev</p>
      </button>
      <button className="button" id="Next" onClick={handleNext}>
        <p>Next</p>
      </button>
    </div>
  );
};

export default Pagination;
