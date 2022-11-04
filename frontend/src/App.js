import './App.css';
import {Route, Routes} from "react-router-dom";
import AuthComponent from "./authComponents";
import PrivateRoute from "./PrivateRoute";
import Wall from "./Wall";

function App() {

    const homePath = "/"
    const loginPath = "login/"

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
