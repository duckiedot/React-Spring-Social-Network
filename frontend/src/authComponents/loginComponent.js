import React, {useRef} from 'react';
import AuthStyle from "./style"
import {useLocalState} from "../util/useLocalStorage";

const LoginComponent = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const loginForm = useRef(null)


    const submitForm = (e) => {
        e.preventDefault()
        const requestBody = new FormData(loginForm.current)
        fetch("api/auth/login", {
            "headers": {
                "Content-Type": "application/json"
            },
            "method": "post",
            body: JSON.stringify(requestBody)
        }).then((response) => Promise.all([response.json(), response.headers]))
            .then(([body, headers]) => {
                setJwt(headers.get("authorization"));
            })
    }

    const handleClick = () => {
        window.scrollTo({
            top: 2000,
            left: 100,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <form>
                <h1>Sign in</h1>
                <div>
                    <input type="text" style={AuthStyle.loginInputStyle} placeholder="Username"/>
                    <input type="password" style={AuthStyle.loginInputStyle} placeholder="Password"/>
                </div>
                <button type="submit" style={AuthStyle.loginButtonStyle}>Log In</button>
            </form>
            <h2 style={AuthStyle.registerPrompts}>don't have an account?</h2>
            <h4 onClick={handleClick} style={AuthStyle.registerPrompts}>Click To <span style={AuthStyle.greenText}>Register Now</span>
            </h4>
        </>
    );
};

export default LoginComponent;