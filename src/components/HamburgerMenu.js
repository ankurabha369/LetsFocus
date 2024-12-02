import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
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

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="font-dotgothic ">
      {/* Hamburger/Cross Button */}
      <button
        onClick={toggleMenu}
        className={`p-2 ${
          isOpen ? "bg-[#212326] text-white" : "bg-white/30"
        } h-8 w-8 md:h-10 md:w-10  flex justify-center items-center  dark:text-white text-[#2a2929] rounded-md`}
      >
        {/* Toggle between the hamburger and cross icons */}
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-3 bg-[#212326] text-white dark:bg-[#0F1226] p-4 rounded-3xl">
          {/* Accordion Item 1 */}
          <div>
            <button
              onClick={() => toggleAccordion(1)}
              className=" flex items-center  "
            >
              <span className="mb-2">My Projects</span>
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
            <div
              className={`max-h-0 absolute left-40 top-0 overflow-hidden  ${
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
            <button
              onClick={() => toggleAccordion(2)}
              className=" flex items-center  "
            >
              <span className="mb-2">Tools Used</span>
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
            <div
              className={`max-h-0 absolute left-36 top-0 overflow-hidden  ease-in-out ${
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
            <button
              onClick={() => toggleAccordion(3)}
              className=" flex items-center  "
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
            <div
              className={`max-h-0 absolute overflow-hidden  ${
                activeIndex === 3 ? "max-h-[1000px]" : ""
              }`}
            >
              <div className="pb-5 text-sm ">
                <ul className="text-center  cursor-pointer  mt-8  bg-[#212326] text-white dark:bg-[#0F1226]  rounded-3xl p-4">
                  <li>
                    <FontAwesomeIcon className="text-xl" icon={faEnvelope} />
                    <a
                      href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqszkPfWhxbkXnGpVqJCrWlTDvqcQztpqvPCstvWnfHsnhZSZJTrCvJTmwftxbjMRWJfg"
                      target="_blank"
                      className="ml-3 font-serif underline underline-offset-2"
                    >
                      ankurrabha113@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
