import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import clockcalarm from "./clock-alarm.mp3";

const Alarm = () => {
  const [time, setTime] = useState("");
  const [alarmTime, setAlarmTime] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);

      if (alarmTime === currentTime) {
        play(); // Start the alarm sound
        setTimeout(() => {
          alert(`Alarm is ringing at ${currentTime}`);
          stop(); // Stop sound after alert is closed
        }, 100);

        setAlarmTime(null); // Reset alarm time

        setMessage(""); // Clear the message
      }
    });

    return () => clearInterval(interval);
  }, [alarmTime]);

  const setAlarm = () => {
    if (time) {
      setAlarmTime(time);
      setMessage(`Alarm is set for ${time}`);
    }
  };
  const [play, { stop }] = useSound(clockcalarm);

  return (
    <div className="flex flex-col text-center">
      <h1 className="text-2xl text-white font-serif mb-4">Set Alarm</h1>
      <div className="flex items-center flex-wrap gap-y-4 justify-center">
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="text-2xl p-2 rounded-md bg-white text-black font-dotgothic"
        />
        <button
          onClick={setAlarm}
          className="bg-green-500 hover:bg-green-600 rounded-lg text-xm font-serif text-white px-4
           py-3 ml-2 "
        >
          Done
        </button>
      </div>
      {message && (
        <p className="text-red-500 font-semibold underline text-xl mt-4">
          {message}
        </p>
      )}
    </div>
  );
};

export default Alarm;
