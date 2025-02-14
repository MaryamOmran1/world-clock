import React, { useState, useEffect } from "react";

const Clock = ({ timeZone }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="clock">
      <span>{timeZone}</span>
      <span>{date.toLocaleString("en-US", { timeZone })}</span>
    </div>
  );
};

export default Clock;
