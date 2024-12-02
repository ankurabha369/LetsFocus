import React, { useState, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faDove,
  faPlaceOfWorship,
  faCar,
  faKeyboard,
  faBrain,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import GlobalMuteButton from "../globalMute";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0); // Active tab index
  const Nature = React.lazy(() => import("./nature"));
  const Animals = React.lazy(() => import("./animals"));
  const Places = React.lazy(() => import("./places"));
  const Noise = React.lazy(() => import("./noise"));
  const Things = React.lazy(() => import("./things"));
  const Transport = React.lazy(() => import("./transport"));

  // Define the tabs and their content in an array
  const tabs = [
    {
      name: <FontAwesomeIcon icon={faTree} />,
      content: (
        <div>
          {/* Wrap lazy-loaded components in Suspense */}
          <Suspense
            fallback={
              <p className="text-center text-white m-2">
                <FontAwesomeIcon icon={faSpinner} spinPulse />
              </p>
            }
          >
            <Nature />
          </Suspense>
          {/* <Nature /> */}
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faDove} />,
      content: (
        <div>
          {/* Wrap lazy-loaded components in Suspense */}
          <Suspense
            fallback={
              <p className="text-center text-white m-2">
                <FontAwesomeIcon icon={faSpinner} spinPulse />
              </p>
            }
          >
            <Animals />
          </Suspense>
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faPlaceOfWorship} />,
      content: (
        <div>
          {/* Wrap lazy-loaded components in Suspense */}
          <Suspense
            fallback={
              <p className="text-center text-white m-2">
                <FontAwesomeIcon icon={faSpinner} spinPulse />
              </p>
            }
          >
            <Places />
          </Suspense>
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faCar} />,
      content: (
        <div>
          {/* Wrap lazy-loaded components in Suspense */}
          <Suspense
            fallback={
              <p className="text-center text-white m-2">
                <FontAwesomeIcon icon={faSpinner} spinPulse />
              </p>
            }
          >
            <Transport />
          </Suspense>
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faKeyboard} />,
      content: (
        <div>
          {/* Wrap lazy-loaded components in Suspense */}
          <Suspense
            fallback={
              <p className="text-center text-white m-2">
                <FontAwesomeIcon icon={faSpinner} spinPulse />
              </p>
            }
          >
            <Things />
          </Suspense>{" "}
        </div>
      ),
    },
    {
      name: <FontAwesomeIcon icon={faBrain} />,
      content: (
        <div>
          {/* Wrap lazy-loaded components in Suspense */}
          <Suspense
            fallback={
              <p className="text-center text-white m-2">
                <FontAwesomeIcon icon={faSpinner} spinPulse />
              </p>
            }
          >
            <Noise />
          </Suspense>
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
