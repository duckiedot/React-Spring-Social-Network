import './App.css';
import {useEffect, useState} from "react";
import {useLocalState} from "./util/useLocalStorage";
import {Route, Routes} from "react-router-dom";
import AuthComponent from "./authComponents";
import PrivateRoute from "./PrivateRoute";
import Wall from "./Wall";

function App() {

    const homePath = "/"
    const loginPath = "login/"

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
        <Routes>
            <Route
                path={homePath}
                element={
                    <PrivateRoute>
                        <Wall/>
                    </PrivateRoute>
                }
            />
            <Route path={loginPath} element={<AuthComponent/>}/>
        </Routes>
    );
}

export default App;
