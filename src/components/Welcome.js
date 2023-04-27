import React from "react";
import googleSignInButton from "../google-sign-in.png";
import { auth } from "../firebase";
import {GoogleAuthProvider, signInWithRedirect} from "firebase/auth";

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
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