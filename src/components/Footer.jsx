import React from "react";

function Footer() {
  // Get the current year dynamically
  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Display copyright text with the current year */}
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
