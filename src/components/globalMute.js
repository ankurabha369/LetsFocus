import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const GlobalMuteButton = () => {
  const [isMuted, setIsMuted] = useState(false);

  // Function to mute/unmute all audio and video elements
  const toggleMute = () => {
    const audioElements = document.querySelectorAll("audio, video");
    audioElements.forEach((el) => {
      el.muted = !isMuted;
    });
    setIsMuted(!isMuted); // Toggle mute state
  };

  useEffect(() => {
    // Set the initial mute state on page load
    const audioElements = document.querySelectorAll("audio, video");
    audioElements.forEach((el) => {
      el.muted = isMuted;
    });
  }, [isMuted]);

  return (
    <div className="">
      <button
        onClick={toggleMute}
        className={`${
          isMuted ? "bg-red-500 text-white" : "bg-blue-400"
        } text-white text-xl flex justify-center items-center  rounded-md h-8 w-8 md:h-10 md:w-10`}
      >
        {isMuted ? (
          <FontAwesomeIcon icon={faPowerOff} />
        ) : (
          <FontAwesomeIcon icon={faPowerOff} />
        )}
      </button>
    </div>
  );
};

export default GlobalMuteButton;
