import React from "react";
import "./FloatingElements.css";

const FloatingElements = () => {
  return (
    <div className="floating-wrapper">
      {/* Floating video icons */}
      <span className="float-item video-icon" style={{ top: '20%', left: '10%' }}>📹</span>
      <span className="float-item video-icon" style={{ top: '50%', left: '80%' }}>🎥</span>

      {/* Floating bubbles */}
      <span className="float-item bubble" style={{ top: '30%', left: '60%' }}></span>
      <span className="float-item bubble" style={{ top: '70%', left: '20%' }}></span>
    </div>
  );
};

export default FloatingElements;
