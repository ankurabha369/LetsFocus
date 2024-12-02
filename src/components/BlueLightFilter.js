import React, { useState } from "react";
import useSound from "use-sound";
import switchsound from "./switch.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const BlueLightFilter = () => {
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [play] = useSound(switchsound);
  const toggleFilter = () => {
    setIsFilterOn(!isFilterOn);
    if (!isFilterOn) {
      document.body.style.filter = "brightness(0.9) sepia(0.3)";
    } else {
      document.body.style.filter = "none";
    }
    play();
  };

  return (
    <button
      onClick={toggleFilter}
      className={`px-4 py-2 text-[#0f0f0f]  h-8 w-8 md:h-10 md:w-10 flex justify-center items-center shadow-md rounded-lg ${
        isFilterOn
          ? "bg-yellow-200 text-[#0f0f0f]"
          : "bg-white/30 text-[#0f0f0f]"
      } focus:outline-none`}
    >
      {isFilterOn ? (
        <FontAwesomeIcon icon={faEye} />
      ) : (
        <FontAwesomeIcon icon={faEyeSlash} />
      )}
    </button>
  );
};

export default BlueLightFilter;
