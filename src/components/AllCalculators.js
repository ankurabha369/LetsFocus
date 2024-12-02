import React, { useState } from "react";

const DesmosCalculators = () => {
  // State to manage which calculator to display
  const [calculatorType, setCalculatorType] = useState("fourfunction");

  // URLs for Desmos calculators
  const calculatorUrls = {
    fourfunction: "https://www.desmos.com/fourfunction",
    scientific: "https://www.desmos.com/scientific",
    graph: "https://www.desmos.com/calculator",
    matrix: "https://www.desmos.com/matrix",
    geometry: "https://www.desmos.com/geometry",
    threeD: "https://www.desmos.com/3d",
  };

  return (
    <div className="calculator-container mt-4">
      {/* Buttons to switch between calculators */}
      <h1 className="text-white text-center  font-serif mt-1">Calculator</h1>

      <div className="flex justify-center rounded-md">
        <div className="flex text-black overflow-x-auto  font-serif text-xs  mb-4">
          <button
            className={`px-4 py-2 mx-2 mt-4 rounded-md ${
              calculatorType === "fourfunction"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => setCalculatorType("fourfunction")}
          >
            Four-Function
          </button>
          <button
            className={`px-4 py-2 mx-2 mt-4 rounded-md ${
              calculatorType === "scientific"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => setCalculatorType("scientific")}
          >
            Scientific
          </button>
          <button
            className={`px-4 py-2 mx-2 mt-4 rounded-md ${
              calculatorType === "graph"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => setCalculatorType("graph")}
          >
            Graphing
          </button>
          <button
            className={`px-4 py-2 mx-2 mt-4 rounded-md ${
              calculatorType === "matrix"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => setCalculatorType("matrix")}
          >
            Matrix
          </button>
          <button
            className={`px-4 py-2 mx-2 mt-4 rounded-md ${
              calculatorType === "geometry"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => setCalculatorType("geometry")}
          >
            Geometry
          </button>
          <button
            className={`px-4 py-2 mx-2 mt-4 rounded-md ${
              calculatorType === "threeD"
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => setCalculatorType("threeD")}
          >
            3D Calculator
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        {/* Display the iframe based on the selected calculator */}
        <iframe
          src={calculatorUrls[calculatorType]}
          className="w-full md:w-[60vw] rounded-md h-[60vh] md:h-[70vh]"
          title="Desmos Calculator"
        ></iframe>
      </div>
    </div>
  );
};

export default DesmosCalculators;
