import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faDownLeftAndUpRightToCenter,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

const FullScreenComponent = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeTab, setActiveTab] = useState(0); // Active tab index
  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Save the current scroll position when entering full-screen mode
      setScrollPosition(window.scrollY);
    } else {
      // Restore the scroll position when exiting full-screen mode
      window.scrollTo(0, scrollPosition);
    }
    setIsFullScreen(!isFullScreen);
  };

  // Define the tabs and their content in an array
  const tabs = [
    {
      name: <FontAwesomeIcon icon={faWikipediaW} />,
      content: (
        <div>
          <div className="flex justify-between items-center m-1">
            <h2 className="text-sm text-white font-semibold">Wikipedia.org</h2>
            <button
              onClick={toggleFullScreen}
              className="px-2 py-1 bg-white/30 backdrop-blur-md rounded hover:bg-green-600"
            >
              {isFullScreen ? "Minimise" : <FontAwesomeIcon icon={faExpand} />}
            </button>
          </div>
          <div className="h-[70vh] overflow-auto rounded-xl bg-white p-2 ">
            {/* Example of embedded content */}
            <iframe
              src="https://en.wikipedia.org/wiki/Main_Page"
              className=" w-full h-full "
              title="Wikipedia"
            ></iframe>
          </div>

          {/* Full-screen overlay */}
          {isFullScreen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
              <div className="w-[98%] h-[95%] bg-white p-4 relative overflow-auto shadow-lg">
                <button
                  onClick={toggleFullScreen}
                  className="absolute top-4 right-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
                </button>
                <div className="h-full overflow-auto bg-gray-100  p-2">
                  {/* Embedded content in full-screen mode */}
                  <iframe
                    src="https://en.wikipedia.org/wiki/Main_Page"
                    className="w-full h-full"
                    title="Wikipedia Full Screen"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faNewspaper} />,
      content: (
        <div>
          <div className="flex justify-between items-center m-2">
            <h2 className="text-sm text-white font-semibold">BingNews</h2>
            <button
              onClick={toggleFullScreen}
              className="px-2 py-1 bg-white/30 backdrop-blur-md rounded hover:bg-green-600"
            >
              {isFullScreen ? "Minimise" : <FontAwesomeIcon icon={faExpand} />}
            </button>
          </div>
          <div className="h-[70vh] overflow-auto rounded-xl bg-white p-2 ">
            {/* Example of embedded content */}
            <iframe
              className="h-full w-full"
              src="https://www.bing.com/news/"
            ></iframe>
          </div>

          {/* Full-screen overlay */}
          {isFullScreen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
              <div className="w-[98%] h-[95%] bg-white p-4 relative overflow-auto shadow-lg">
                <button
                  onClick={toggleFullScreen}
                  className="absolute top-4 right-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
                </button>
                <div className="h-full overflow-auto bg-gray-100  p-2">
                  {/* Embedded content in full-screen mode */}
                  <iframe
                    src="https://www.bing.com/news/"
                    className="w-full h-full"
                    title="Wikipedia Full Screen"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex mt-6 space-x-2  overflow-x-auto  ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-7 py-2 text-white text-xl  rounded-xl font-medium   ${
              activeTab === index ? "bg-white/40 " : "bg-white/10"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={` ${activeTab === index ? "block" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullScreenComponent;
