import React from "react";

const TypingDots = ({ scroll, user }) => {
  if (scroll) {
    setTimeout(() => {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
  return (
    <div className="typing-dots">
      <div className="typing__center">
        <p className="user-message">{user} is typing...</p>
      </div>
    </div>
  );
};

export default TypingDots;
