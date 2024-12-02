import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import timeUp from "./time-up.mp3";
import {
  faPlay,
  faStop,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && (hours > 0 || minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((prev) => prev - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    } else if (hours === 0 && minutes === 0 && seconds === 0 && isRunning) {
      play();
      setTimeout(() => {
        alert("Time is up! let the alarm ring");
        stop();
      }, 200);
      clearInterval(interval);
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, hours, minutes, seconds]);

  const [play, { stop }] = useSound(timeUp);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
  };

  const handleHoursChange = (e) => {
    const value = Math.min(24, Math.max(0, parseInt(e.target.value) || 0)); // Clamp to 0-24
    setHours(value);
  };

  const handleMinutesChange = (e) => {
    const value = Math.min(59, Math.max(0, parseInt(e.target.value) || 0)); // Clamp to 0-59
    setMinutes(value);
  };

  const handleSecondsChange = (e) => {
    const value = Math.min(59, Math.max(0, parseInt(e.target.value) || 0)); // Clamp to 0-59
    setSeconds(value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      toggleTimer();
    }
  };

  return (
    <div className="text-center">
      <div>
        <h2 className="text-2xl  font-serif mb-4">Timer</h2>
        <div className="text-6xl font-dotgothic">
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </div>
        <div className="my-4 text-3xl">
          <input
            type="number"
            className="text-black  font-dotgothic text-xl p-2 w-[65px] rounded-lg mx-2"
            placeholder="Hours (0-24)"
            value={hours}
            onChange={handleHoursChange}
            onKeyPress={handleKeyPress} // Add Enter key press functionality
          />
          :
          <input
            type="number"
            className="text-black  font-dotgothic text-xl p-2 w-[65px] rounded-lg mx-2"
            placeholder="Minutes (0-59)"
            value={minutes}
            onChange={handleMinutesChange}
            onKeyPress={handleKeyPress} // Add Enter key press functionality
          />
          :
          <input
            type="number"
            className="text-black  font-dotgothic text-xl p-2 w-[65px] rounded-lg mx-2"
            placeholder="Seconds (0-59)"
            value={seconds}
            onChange={handleSecondsChange}
            onKeyPress={handleKeyPress} // Add Enter key press functionality
          />
        </div>
        <div className="flex justify-center space-x-2">
          {/* Toggle between Start and Stop */}
          <button
            className={`px-4 py-2 text-white rounded ${
              isRunning ? "bg-red-500" : "bg-blue-500"
            }`}
            onClick={toggleTimer}
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
            className="px-3 py-2 bg-red-500 text-white rounded"
            onClick={resetTimer}
          >
            <FontAwesomeIcon icon={faArrowsRotate} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
