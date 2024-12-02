import React, { useState, useEffect } from "react";
import {
  faPlay,
  faStop,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Stopwatch() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds((prev) => prev + 1);
        if (milliseconds >= 99) {
          setMilliseconds(0);
          setSeconds((prev) => prev + 1);
        }
        if (seconds >= 60) {
          setSeconds(0);
          setMinutes((prev) => prev + 1);
        }
        if (minutes >= 60) {
          setMinutes(0);
          setHours((prev) => prev + 1);
        }
      }, 10); // 10 ms for precise stopwatch timing
    }

    return () => clearInterval(interval);
  }, [isRunning, milliseconds, seconds, minutes]);

  const toggleStopwatch = () => {
    setIsRunning((prev) => !prev);
  };

  const resetStopwatch = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setMilliseconds(0);
    setIsRunning(false);
  };

  return (
    <div className=" text-center">
      <div>
        <h2 className="text-2xl font-serif mb-4">Stopwatch</h2>
        <div className="text-5xl font-dotgothic">
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}.
          {String(milliseconds).padStart(2, "0")}
        </div>
        <div className="flex justify-center space-x-2 my-4">
          {/* Toggle between Start and Stop */}
          <button
            className={`px-4 py-2 text-white rounded ${
              isRunning ? "bg-red-500" : "bg-blue-500"
            }`}
            onClick={toggleStopwatch}
          >
            {isRunning ? (
              <>
                <FontAwesomeIcon icon={faStop} />
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPlay} />
              </>
            )}
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={resetStopwatch}
          >
            <FontAwesomeIcon icon={faArrowsRotate} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
