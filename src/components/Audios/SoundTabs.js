import React, { useState } from "react";
import Nature from "./nature";
import Animals from "./animals";
import Places from "./places";
import Noise from "./noise";
import Things from "./things";
import Transport from "./transport";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faDove,
  faPlaceOfWorship,
  faCar,
  faKeyboard,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import GlobalMuteButton from "../globalMute";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Active tab index

  // Define the tabs and their content in an array
  const tabs = [
    {
      name: <FontAwesomeIcon icon={faTree} />,
      content: (
        <div>
          <Nature />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faDove} />,
      content: (
        <div>
          <Animals />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faPlaceOfWorship} />,
      content: (
        <div>
          <Places />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faCar} />,
      content: (
        <div>
          <Transport />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faKeyboard} />,
      content: (
        <div>
          <Things />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faBrain} />,
      content: (
        <div>
          <Noise />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Tabs (Header Section) */}
      <div className="flex justify-end   mt-4 md:mx-8">
        <div className="flex w-full m-2 md:space-x-2   justify-between   overflow-x-scroll">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-xl font-medium   ${
                activeTab === index ? "text-white" : "text-white/40"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className=" mt-4 md:mt-2 mx-1">
          <GlobalMuteButton />
        </div>
      </div>

      {/* Content Section */}
      <div className="rounded-3xl">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${activeTab === index ? "block" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
