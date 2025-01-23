import React, { useState } from "react";
import { isCreditCard } from "validator";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const handleBreaks = (e) => {
    let id = parseInt(e.target.id);
    if (e.target.value.length === 4 && id < 4) {
      document.getElementById(`${id + 1}`).focus();
    }
    if (e.target.value.length === 0 && id > 1) {
      document.getElementById(`${id - 1}`).focus();
    }
  };

  const handleCheck = () => {
    const num =
      document.getElementById("1").value +
      document.getElementById("2").value +
      document.getElementById("3").value +
      document.getElementById("4").value;

    if (
      document.getElementById("1").value.length < 4 ||
      document.getElementById("2").value.length < 4 ||
      document.getElementById("3").value.length < 4 ||
      document.getElementById("4").value.length < 4
    ) {
      return toast.error("Fill all fields");
    }

    if (isCreditCard(num)) {
      toast.success("Valid credit card number!");
    } else {
      toast.error("Invalid credit card number");
      document.getElementById("4").focus();
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-[1.5rem] mb-[40px]">Credit Card Validator</h1>
      <div className="space-x-2">
        <input
          id="1"
          maxLength={4}
          onChange={(e) => handleBreaks(e)}
          type="text"
          autoComplete="off"
          className="border-b p-2 focus:outline-0 focus:border-b-2 text-[1.2rem] w-[100px]"
        />
        <input
          id="2"
          maxLength={4}
          onChange={(e) => handleBreaks(e)}
          type="text"
          autoComplete="off"
          className="border-b p-2 focus:outline-0 focus:border-b-2 text-[1.2rem] w-[100px]"
        />
        <input
          id="3"
          maxLength={4}
          onChange={(e) => handleBreaks(e)}
          type="text"
          autoComplete="off"
          className="border-b p-2 focus:outline-0 focus:border-b-2 text-[1.2rem] w-[100px]"
        />
        <input
          id="4"
          maxLength={4}
          onChange={(e) => handleBreaks(e)}
          type="text"
          autoComplete="off"
          className="border-b p-2 focus:outline-0 focus:border-b-2 text-[1.2rem] w-[100px]"
        />
      </div>
      <button
        onClick={handleCheck}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Check
      </button>
      <ToastContainer />
    </div>
  );
};

export default App;
