import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";

function Login() {
    const signIn = () => {
        // Google Login
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;