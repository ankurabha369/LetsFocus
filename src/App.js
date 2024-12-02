import React, { useState, useEffect } from "react";
import "./App.css";
import Clock from "./components/Clock";
import WeatherWidget from "./components/WeatherWidget";
import BlueLightFilter from "./components/BlueLightFilter";
import QuoteGenerator from "./components/Quotes";
import {
  faCloudMoon,
  faCloudSun,
  faAnglesDown,
  faEnvelope,
  faBriefcase,
  faFontAwesome,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faBehance,
  faInstagram,
  faReact,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HamburgerMenu from "./components/HamburgerMenu";
import Tabs from "./components/Tabs";
import useSound from "use-sound";
import switchsound from "./components/switch.mp3";
import startup from "./components/start.mp3";
import backtotop from "./components/backtotop.mp3";
// import BatteryStatus from "./components/Batterystatus";

const today = new Date();
const options = {
  day: "numeric",
  month: "long",
  year: "numeric",
};
const dateOnly = today.toLocaleDateString("en-GB", options);

function App() {
  // DARK AND LIGHT MODE TOGGLE
  const [darkMode, setDarkMode] = useState(false);
  const [playClick] = useSound(switchsound);
  const [intro] = useSound(startup);
  const [back] = useSound(backtotop);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    playClick();
  };
  const scrollToBottom = () => {
    intro();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  const scrollToBottom2 = () => {
    back();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={` ${darkMode ? "background-night " : "background-day"} `}>
      {/* <div className="fixed bottom-4 right-4">
        <BatteryStatus />
      </div> */}
      {/* NAVBAR */}
      <div className="navbar flex pt-3 ">
        <div className="w-[50%]  flex ml-6  items-center">
          <div
            className={`font-serif  sm:block   hidden  ${
              darkMode ? "text-white" : "text-[#2a2929]"
            } `}
          >
            <div>
              <div className="ForBtns flex gap-4">
                {/* Button 1 */}
                <button
                  onClick={() => toggleAccordion(1)}
                  className=" flex items-center hover:bg-white/30 backdrop-blur-md px-4 py-3 rounded-3xl  "
                >
                  <span>My Projects</span>
                  <span className=" transition-transform duration-300">
                    {activeIndex === 1 ? (
                      <div className="mx-2 text-[8px] flex ">
                        <FontAwesomeIcon icon={faCircle} />
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </span>
                </button>
                {/* Button 2 */}
                <button
                  onClick={() => toggleAccordion(2)}
                  className=" flex items-center  hover:bg-white/30 backdrop-blur-md px-4 py-3 rounded-3xl "
                >
                  <span>Tools Used</span>
                  <span className=" transition-transform duration-300">
                    {activeIndex === 2 ? (
                      <div className="mx-2  text-[8px] flex ">
                        <FontAwesomeIcon icon={faCircle} />
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </span>
                </button>

                {/* Button 3 */}
                <button
                  onClick={() => toggleAccordion(3)}
                  className=" flex items-center  hover:bg-white/30 backdrop-blur-md px-4 py-3 rounded-3xl  "
                >
                  <span>Contact Me</span>
                  <span className=" transition-transform duration-300">
                    {activeIndex === 3 ? (
                      <div className="mx-2 mt-1 text-[8px] flex ">
                        <FontAwesomeIcon icon={faCircle} />
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </span>
                </button>
              </div>
              {/* Accordion Item 1 */}
              <div
                className={`max-h-0 absolute  top-14 overflow-hidden  ${
                  activeIndex === 1 ? "max-h-[1000px]" : ""
                }`}
              >
                <div className="pb-5 text-sm ">
                  <ul className="cursor-pointer  space-y-4  w-[130px] mt-5 bg-[#212326] text-white dark:bg-[#0F1226] rounded-3xl p-4 relative ">
                    <li>
                      <FontAwesomeIcon className="text-xl" icon={faLinkedin} />
                      <a
                        href="https://www.linkedin.com/in/ankur-rabha-555519225/"
                        target="_blank"
                        className="ml-3"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon className="text-xl" icon={faBehance} />
                      <a
                        href="https://www.behance.net/ankurrabha2"
                        target="_blank"
                        className="ml-2 "
                      >
                        Beehance
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon className="text-xl" icon={faInstagram} />
                      <a
                        href="https://www.instagram.com/ankursdesigns/"
                        target="_blank"
                        className="ml-3"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className="text-gray-700 line-through">
                      <FontAwesomeIcon icon={faBriefcase} />{" "}
                      <a href="#" className="ml-2">
                        Portfolio
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Accordion Item 2 */}
            <div className="">
              <div
                className={`max-h-0 absolute  top-14 left-36 overflow-hidden  ease-in-out ${
                  activeIndex === 2 ? "max-h-[1000px]" : ""
                }`}
              >
                <div>
                  <ul className="cursor-pointer  mt-6 bg-[#212326] text-white dark:bg-[#0F1226] rounded-3xl p-4">
                    <li className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faFontAwesome} />
                      <p>Fontawsome</p>
                    </li>
                    <li className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faReact} /> <p>ReactJs</p>
                    </li>
                    <li className="flex gap-1 items-center">
                      <FontAwesomeIcon icon={faHtml5} />
                      <p>HTML5</p>
                    </li>
                    <li className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faCss3} />
                      <p>CSS</p>
                    </li>
                    <li>
                      <div className="flex gap-1 items-center">
                        <svg
                          className="h-3"
                          fill="white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 54 33"
                        >
                          <g clip-path="url(#prefix__clip0)">
                            <path
                              d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                              clip-rule="evenodd"
                            />
                          </g>
                        </svg>
                        Tailwind
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Accordion Item 3 */}
            <div className="">
              <div
                className={`max-h-0 absolute top-20 left-60  overflow-hidden  ${
                  activeIndex === 3 ? "max-h-[1000px]" : ""
                }`}
              >
                <div className="rounded-3xl p-4  bg-[#212326] text-white dark:bg-[#0F1226] text-sm ">
                  <div className="text-center    cursor-pointer ">
                    <FontAwesomeIcon className="text-xl" icon={faEnvelope} />
                  </div>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqszkPfWhxbkXnGpVqJCrWlTDvqcQztpqvPCstvWnfHsnhZSZJTrCvJTmwftxbjMRWJfg"
                    target="_blank"
                    className="ml-3 font-serif underline underline-offset-2"
                  >
                    ankurrabha113@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hamburber for small screens */}
          <div className="md:hidden sm:hidden">
            <HamburgerMenu />
          </div>
        </div>
        <div className="flex  justify-end mt-2 mb-2 mr-6 w-[50%] ">
          <div className="mr-3 ">
            <button
              onClick={scrollToBottom2}
              className={`h-8 w-8 md:h-10 md:w-10 rounded-lg shadow-md  bg-white/30 backdrop-blur-md  ${
                darkMode ? "text-white" : "text-[#2a2929]"
              }`}
            >
              <FontAwesomeIcon icon={faAnglesDown} />
            </button>
          </div>
          <div className="rounded-lg">
            <BlueLightFilter />
          </div>
          {/* DARK MODE TOGGLE */}
          <div className="ml-3 rounded-lg ">
            <button
              onClick={toggleDarkMode}
              className={`h-8 w-8 md:h-10 md:w-10  shadow-md bg-white/30 backdrop-blur-md rounded-lg ${
                darkMode ? "text-white" : "text-[#2a2929]"
              }`}
            >
              <FontAwesomeIcon
                icon={darkMode ? faCloudMoon : faCloudSun}
                className={
                  darkMode ? "rotate-clockwise" : "rotate-anticlockwise"
                }
              />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[100vh]">
        {/* THE MAIN LANDING */}
        <div className="flex  justify-center mt-14  align-middle m-6">
          <div>
            <div className="typewriter">
              <span
                className={`text-5xl md:text-8xl flex  flex-wrap  justify-center font-dotgothic ${
                  darkMode ? "text-white" : "text-[#2a2929]"
                }`}
              >
                Let's Focus
              </span>
            </div>
            <div className="sm:flex ">
              <div className="Date&Time sm:w-1/2">
                <div>
                  <div
                    className={`Timer mt-5  flex justify-center sm:justify-start  font-dotgothic text-3xl sm:text-4xl    ${
                      darkMode ? "text-white" : "text-[#2a2929]"
                    }`}
                  >
                    <Clock />
                  </div>
                  <p
                    className={`mt-2  text-xl sm:text-2xl  font-dotgothic flex justify-center sm:justify-start ${
                      darkMode ? "text-white" : "text-[#2a2929]"
                    }`}
                  >
                    {dateOnly}
                  </p>
                </div>
              </div>

              <div
                className={` sm:w-1/2 flex justify-center sm:justify-end my-3  font-dotgothic  ${
                  darkMode ? "text-white" : "text-[#2a2929]"
                } `}
              >
                <WeatherWidget />
              </div>
            </div>
            <div
              className={` ${
                darkMode ? "text-white" : "text-[#0f0f0f]"
              } mt-4  justify-center font-dotgothic`}
            >
              <QuoteGenerator />
            </div>
          </div>
        </div>
        <div className="flex justify-center relative bottom-8">
          <button
            onClick={scrollToBottom}
            className={` mt-8 hover:bg-white/30 backdrop-blur-md  animate-pulse   font-dotgothic ${
              darkMode
                ? "text-white border-white"
                : " border-[#2a2929] text-[#0f0f0f]"
            }  font-semibold rounded-3xl text-lg px-10 py-2.5 text-center me-2 mb-2`}
          >
            Start
          </button>
        </div>
      </div>
      <div
        className={`h-[100vh] ${darkMode ? "text-white" : "  text-[#0f0f0f]"} `}
      >
        <Tabs />
      </div>

      {/* <FullScreenComponent /> */}
    </div>
  );
}

export default App;
