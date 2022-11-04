import React, {useRef} from 'react';
import AuthStyle from "./style"

const LoginComponent = () => {

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
                <button style={AuthStyle.loginButtonStyle}>Log In</button>
            </form>
            <h2 style={AuthStyle.registerPrompts}>don't have an account?</h2>
            <h4 onClick={handleClick} style={AuthStyle.registerPrompts}>Click To <span style={AuthStyle.greenText}>Register Now</span></h4>
        </>
    );
};

export default LoginComponent;