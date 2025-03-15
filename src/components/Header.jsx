import React, { useState, useEffect } from "react";
import FactCheckIcon from '@mui/icons-material/FactCheck'; // Importing a checklist icon from Material UI

function Header() {
  const [time, setTime] = useState(new Date());
  
  // useEffect to update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); // Update time every second
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Format time
  const formattedTime = time.toLocaleTimeString();

  // Format date
  const formattedDate = time.toLocaleDateString();

  // Determine greeting based on hours
  const hours = time.getHours();
  let greeting = "";
  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning ☀️";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon 🌤️";
  } else {
    greeting = "Good Night 🌙";
  }

  return (
    <header>
      <h1>
        <FactCheckIcon /> To-Do-List  
        <span> {greeting} </span>
        <span className="time"> {formattedTime} </span>
        <span className="date"> {formattedDate} </span>
      </h1>
    </header>
  );
}

export default Header;
