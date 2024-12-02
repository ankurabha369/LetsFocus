import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faEnvelope,
  faBriefcase,
  faFontAwesome,
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

  return (
    <div className="relative">
      {/* Hamburger/Cross Button */}
      <button
        onClick={toggleMenu}
        className="p-2 bg-white/30 h-8 w-8 md:h-10 md:w-10  flex justify-center items-center  dark:text-white text-[#2a2929] rounded-md"
      >
        {/* Toggle between the hamburger and cross icons */}
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute text-black dark:text-white top-full mt-2   font-dotgothic
        rounded-md w-[150px] z-50 shadow-lg backdrop-blur-sm bg-white/30 p-2"
        >
          <ul className="space-y-2 p-2">
            <li className="group relative flex">
              <details className="expandable hover:bg-white/30 backdrop-blur-md  rounded-3xl ">
                <summary>My Projects</summary>
                <ul className="cursor-pointer  space-y-4  w-[150px] mt-5 bg-white/30 backdrop-blur-md rounded-3xl p-4 relative left-20">
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
              </details>
              {/* Sub-menu */}
              <ul className="hidden rounded-md group-hover:block absolute left-full p-2 top-0 mt-2 ml-1 shadow-lg bg-white text-blue-600">
                <li className="p-2 hover:bg-blue-400 hover:text-white rounded-lg">
                  Beehance
                </li>
                <li className="p-2 hover:bg-blue-400 hover:text-white rounded-lg">
                  LinkedIn
                </li>
                <li className="p-2 hover:bg-blue-400 hover:text-white rounded-lg">
                  Instagram
                </li>
              </ul>
            </li>
            <li>
              <details className="expandable">
                <summary>About Me</summary>
                <ul className="text-center  font-serif cursor-pointer w-[300px] mt-20  bg-white/40 backdrop-blur-md   rounded-3xl p-4">
                  <li>
                    I am passionate about playing with designs and exploring the
                    world of front-end web development and graphic design. I
                    have a solid foundation in web development, having learned
                    HTML, JavaScript, and CSS, along with the basics of React
                    and Tailwind CSS. My curiosity drives me to continuously
                    explore new possibilities to create stunning visuals. As I
                    continue my journey, I aim to develop my skills further and
                    become a professional in this dynamic field.
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="expandable">
                <summary>Contact Me</summary>
                <ul className="text-center  cursor-pointer  mt-8  bg-white/30 backdrop-blur-md  rounded-3xl p-4">
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
              </details>
            </li>
            <li>
              <details className="expandable">
                <summary>Tools Used</summary>
                <ul className="cursor-pointer  mt-6  bg-white/50 backdrop-blur-md  rounded-md p-4">
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
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 54 33"
                      >
                        <g fill="black" clip-path="url(#prefix__clip0)">
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
              </details>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
