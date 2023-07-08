import React, { useEffect, useRef, useState } from "react";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import ClearMessages from "./ClearMessages"
import TypingDots from "./TypingDots";

const ChatBox = () => {
    const { displayName } = auth.currentUser;
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState(false)

    const scroll = useRef();

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return () => unsubscribe;
    }, []);

    function handleTypingMessage() {
        scroll.current.scrollIntoView({ behavior: "smooth" });
        setTyping(true)
        console.log("typing...")
        setTimeout(() => {
            setTyping(false)
        }, 2000);
    }

    return (
        <main className="chat-box">
            <div className="messages-wrapper">
                {messages?.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
                { typing ? <TypingDots scroll={scroll} user={displayName}/> : null }
            </div>
            <span ref={scroll}></span>
            <SendMessage scroll={scroll} handleTypingMessage={handleTypingMessage} />
            <ClearMessages/>
        </main>
    );
};

export default ChatBox;
