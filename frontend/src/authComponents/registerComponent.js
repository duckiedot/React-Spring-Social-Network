import React, {useRef, useState} from 'react';
import AuthStyle from "./style"
import axios from "axios";

const RegisterComponent = () => {

    const registerForm = useRef(null)
    const registerStyle = {
        color: "white"
    }

    const submitForm = (e) => {
        e.preventDefault()
        let data = new FormData(registerForm.current)
        console.log(data.get("username"))
        axios({
            method: "post",
            url: "api/auth/register",
            data: data,
            headers: {
                "Content-Type": "application/json"
            },
        })
    }


    return (
        <div>
            <h2 style={registerStyle}>Register</h2>
            <div style={AuthStyle.registerStyle}>
                <form ref={registerForm} onSubmit={submitForm}>
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" style={AuthStyle.registerInputStyle}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" style={AuthStyle.registerInputStyle}/>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" style={AuthStyle.registerInputStyle}/>
                    </div>
                    <button type="submit" style={AuthStyle.registerButtonStyle}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterComponent;