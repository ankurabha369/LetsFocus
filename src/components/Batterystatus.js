import { faBolt, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import safebattery from "./safebattery.mp3";
import charging from "./charging.mp3";

const BatteryStatusNavbar = () => {
  const [battery, setBattery] = useState({
    level: null,
    charging: false,
    chargingTime: null,
    dischargingTime: null,
  });

  const [onsafe] = useSound(safebattery);
  const [oncharge] = useSound(charging);

  const isDesktop = () =>
    /Win|Mac|Linux/.test(navigator.userAgent) &&
    !/Mobile/.test(navigator.userAgent);

  // Play sound effect whenever charging state changes to true
  useEffect(() => {
    if (battery.charging) {
      oncharge();
    }
  }, [battery.charging, oncharge]);

  useEffect(() => {
    const fetchBatteryInfo = async () => {
      if ("getBattery" in navigator) {
        const batteryManager = await navigator.getBattery();

        const updateBatteryStatus = () => {
          setBattery({
            level: batteryManager.level * 100,
            charging: batteryManager.charging,
            chargingTime: batteryManager.chargingTime,
            dischargingTime: batteryManager.dischargingTime,
          });
        };

        // Initial update
        updateBatteryStatus();

        // Add event listeners
        batteryManager.onlevelchange = updateBatteryStatus;
        batteryManager.onchargingchange = updateBatteryStatus;
        batteryManager.onchargingtimechange = updateBatteryStatus;
        batteryManager.ondischargingtimechange = updateBatteryStatus;

        // Set interval to check battery level once it exceeds 85%
        const safeBatteryCheckInterval = setInterval(() => {
          if (batteryManager.level * 100 > 85 && batteryManager.charging) {
            onsafe();
            alert("Your battery is above 85%. Unplug for safe battery level.");
            clearInterval(safeBatteryCheckInterval);

            // Clear the interval to prevent repeated alerts
          }
        }, 10000); // Checks every 60 seconds

        return () => clearInterval(safeBatteryCheckInterval);
      }
    };

    fetchBatteryInfo();
  }, []);

  const formatTime = (time) => {
    if (time === Infinity || time === null || isNaN(time)) return "N/A";
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    return `${hours > 0 ? hours + " hr " : ""}${minutes} min`;
  };

  // Circular progress configurations
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const progress = battery.level ? (battery.level / 100) * circumference : 0;

  if (!isDesktop()) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 text-white  p-2 h-16 w-18 ">
      {/* Circular Battery Indicator with Dot */}
      <div className="relative flex items-center justify-center">
        {/* Circular SVG Progress Indicator */}
        <svg
          className="w-20 h-20 transform -rotate-90"
          width="100%"
          height="100%"
          viewBox="0 0 150 150"
        >
          {/* Background Circle */}
          <circle
            cx="75"
            cy="75"
            r={radius}
            fill="none"
            stroke="rgb(224,224,224, 0.5)" // Background color of circle
            strokeWidth="15"
          />
          {/* Progress Circle */}
          <circle
            cx="75"
            cy="75"
            r={radius}
            fill="none"
            stroke={battery.charging ? "#22c55e" : "#ffffff"}
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            transition="stroke 0.2s ease, stroke-dashoffset 0.2s ease"
          />
        </svg>
        {/* Center Text for Battery Level */}
        <span className="absolute text-xl font-semibold">
          {battery.charging && <FontAwesomeIcon icon={faBolt} />}
        </span>
      </div>

      {/* Battery Info */}
      <div className="flex flex-col items-start pr-4">
        <div className="flex items-center space-x-1 text-sm">
          <span>
            {battery.level !== null ? `${battery.level.toFixed(0)}%` : "N/A"}
          </span>
          {battery.charging && <FontAwesomeIcon icon={faBolt} fade />}
        </div>

        {/* Time Remaining */}
        <div className="text-xm text-white">
          {battery.charging ? (
            <FontAwesomeIcon icon={faFaceSmile} />
          ) : (
            `${formatTime(battery.dischargingTime)}`
          )}
        </div>
      </div>
    </div>
  );
};

export default BatteryStatusNavbar;
