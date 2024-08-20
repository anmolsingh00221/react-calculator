import React from "react";

const Display = ({ checkDisplayValue }) => {
  return (
    <div class="input-group mb-4">
      <input
        type="text"
        class="form-control cal-input"
        aria-label="Amount (to the nearest dollar)"
        value={checkDisplayValue}
        readOnly
      />
    </div>
  );
};

export default Display;
