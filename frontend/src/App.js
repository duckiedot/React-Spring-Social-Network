import './App.css';
import {useEffect, useState} from "react";
import {useLocalState} from "./util/useLocalStorage";

function App() {

    const [jwt, setJwt] = useLocalState("", "jwt");

    useEffect(() => {
        if (jwt) {
            return;
        }
        const requestBody = {
            "username": "duckie",
            "password": "matt2001"
        }

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
    }, []);

    return (
        <div className="App">
            {jwt}
        </div>
    );
}

export default App;
