import React from "react";

const Buttons = ({ toHandleButton }) => {
  let calBtnValue = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "/",
    "7",
    "8",
    "*",
    "9",
    "0",
    "=",
    ".",
  ];

  return (
    <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
      {calBtnValue.map((buttonValue) => (
        <button
          type="button"
          class="btn btn-secondary p-2 fs-2"
          onClick={() => toHandleButton(buttonValue)}
        >
          {buttonValue}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
