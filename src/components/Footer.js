import React from "react";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer">
      <p>Copyright &#169;{getCurrentYear()}</p>
    </footer>
  );
}
