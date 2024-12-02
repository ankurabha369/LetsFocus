import React, { useState, useEffect } from "react";
function Clock() {
  const [currentTime, setcurrnetTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setcurrnetTime(new Date().toLocaleTimeString());
    }, 1000);

    // CLean up the Interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return <div className="text-right  ">{currentTime}</div>;
}

export default Clock;
