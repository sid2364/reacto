import React from "react";
import googleSignInButton from "../google-sign-in.png";

const Welcome = () => {
    const googleSignIn = () => {
    };

    return (
        <main className="welcome">
            <h1>Welcome to Reacto</h1>
            <p>Sign in with Google to chat!</p>
            <button className="sign-in">
                <img
                    onClick={googleSignIn}
                    src={googleSignInButton}
                    type="button"
                />
            </button>
        </main>
    );
};

export default Welcome;