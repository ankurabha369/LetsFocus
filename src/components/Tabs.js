import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Youtube from "./Youtube";
import Timekeeper from "./Timekeeper";
import ToDoList from "./ToDoList";
import ScientificCalculator from "./AllCalculators";
import RichTextEditor from "./RichTextEditor";
import SoundTabs from "./Audios/SoundTabs";
import FullScreenComponent from "./fullscreen";
import useSound from "use-sound";
import backtotop from "./backtotop.mp3";
import screentap from "./screentap.mp3";

import {
  faListCheck,
  faClock,
  faCalculator,
  faPenToSquare,
  faGlobe,
  faHeadphonesSimple,
  faAnglesUp,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons";
import SpotifyGrid from "./spotify";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Active tab index
  const [back] = useSound(backtotop);
  const [tap] = useSound(screentap);

  // Define the tabs and their content in an array
  const tabs = [
    {
      name: <FontAwesomeIcon icon={faListCheck} />,
      content: (
        <div>
          <ToDoList />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faClock} />,
      content: (
        <div>
          <Timekeeper />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faCalculator} />,
      content: (
        <div>
          <ScientificCalculator />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faPenToSquare} />,
      content: (
        <div>
          <RichTextEditor />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faGlobe} />,
      content: (
        <div>
          {/* <WikipediaEmbed /> */}
          <FullScreenComponent />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faYoutube} />,
      content: (
        <div className="flex justify-center">
          <Youtube />
        </div>
      ),
    },

    {
      name: <FontAwesomeIcon icon={faSpotify} />,
      content: (
        <div className=" flex  justify-center">
          <SpotifyGrid />
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faHeadphonesSimple} />,
      content: (
        <div className=" flex  justify-center">
          <SoundTabs />
        </div>
      ),
    },
  ];

  const scrollToTop = () => {
    back();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="p-1 flex justify-center">
        {/* Content Section */}
        <div className=" rounded-lg w-[93%] h-[85vh]">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`inset-0 ${activeTab === index ? "block" : "hidden"}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>

      {/* Tabs (Header Section) or the Menu icons */}
      <div className="flex md:top-7 mx-2 relative -bottom-10  rounded-md  md:overflow-visible  justify-center">
        <div className="flex items-center overflow-x-scroll  text-black gap-4 rounded-lg justify-center  md:overflow-visible  py-2 px-3  bg-white/20  backdrop-blur-sm  ">
          <div className="flex overflow-x-scroll md:overflow-visible  gap-x-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`h-10 w-10  text-3xl  p-2 flex justify-center items-center font-medium rounded-md   ${
                  activeTab === index ? "bg-blue-500 text-white" : "bg-gray-300"
                }  transition ease-in-out  bg-blue-500 md:hover:-translate-y-2 md:hover:scale-125 hover:text-white hover:bg-indigo-600 duration-300`}
                onClick={() => {
                  setActiveTab(index);
                  tap();
                }}
              >
                {tab.name}
              </button>
            ))}
            <button
              className="h-10 w-10 py-2 px-3 flex justify-center items-center bg-white  text-black  rounded-lg"
              onClick={scrollToTop}
            >
              <FontAwesomeIcon icon={faAnglesUp} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
