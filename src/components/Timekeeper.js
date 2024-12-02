import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHourglassHalf,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import Alarm from "./Alarm";
import Timer from "./Timer";
import Stopwatch from "./Stopwatch";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Active tab index

  // Define the tabs and their content in an array
  const tabs = [
    {
      name: <FontAwesomeIcon icon={faBell} />,
      content: (
        <div>
          <Alarm />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faHourglassHalf} />,
      content: (
        <div>
          <Timer />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faStopwatch} />,
      content: (
        <div>
          <Stopwatch />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full mt-4 p-4">
      {/* Tabs (Header Section) */}
      <div className="flex justify-center space-x-4  overflow-x-auto  ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-7 py-2 text-white text-xl  rounded-t-xl font-medium   ${
              activeTab === index ? "bg-white/20 " : "bg-white/10"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex justify-center">
        <div className="w-96 h-80  p-4 flex justify-center items-center  backdrop-blur-sm  rounded-xl bg-white/20">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={` inset-0 ${activeTab === index ? "block" : "hidden"}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
