import React, {useRef} from 'react';
import AuthStyle from "./style"
import {useLocalState} from "../util/useLocalStorage";

const LoginComponent = () => {

    const [jwt, setJwt] = useLocalState("", "jwt");
    const loginForm = useRef(null)


    const submitForm = (e) => {
        e.preventDefault()
        const requestBody = new FormData(loginForm.current)
        console.log(requestBody.get("username"));
        fetch("api/auth/login", {
            "headers": {
                "Content-Type": "application/json"
            },
            "method": "post",
            body: JSON.stringify(Object.fromEntries(requestBody))
        }).then((response) => Promise.all([response.json(), response.headers]))
            .then(([body, headers]) => {
                setJwt(headers.get("authorization"));
                window.location.href = "/"
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
            <form ref={loginForm} onSubmit={submitForm}>
                <h1>Sign in</h1>
                <div>
                    <input type="text" name="username" style={AuthStyle.loginInputStyle} placeholder="Username"/>
                    <input type="password" name="password" style={AuthStyle.loginInputStyle} placeholder="Password"/>
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