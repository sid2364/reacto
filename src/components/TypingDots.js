import React from "react";

const TypingDots = ({ user }) => {
    return (
        <div className="typing-dots">
            <div className="chat-bubble__center">
                <p className="user-message">{user} is typing...</p>
            </div>
        </div>
    );
};

export default TypingDots;
