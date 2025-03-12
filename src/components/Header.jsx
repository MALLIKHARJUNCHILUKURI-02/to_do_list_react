import React, { useState, useEffect } from "react";
import FactCheckIcon from '@mui/icons-material/FactCheck'; // Importing a checklist icon from Material UI

function Header() {

  // State to store the current time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect to update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString()); // Update time every second
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <header>
      {/* Displaying an icon, app title, and real-time clock */}
      <h1><FactCheckIcon /> To-Do-List {time}</h1>
    </header>
  );
}

export default Header;
