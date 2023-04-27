import React from "react";

const Message = () => {
    return (
        <div className={`chat-bubble`}>
            <img className="chat-bubble__left" src="" alt="user avatar" />
            <div className="chat-bubble__right">
                <p className="user-name">Sid Sahay</p>
                <p className="user-message">
                    Hello world!
                </p>
            </div>
        </div>
    );
};

export default Message;