import React from "react";
import Authentication from "./Pages/Authentication";
import { Route, Redirect, Switch } from "react-router-dom";

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Authentication}></Route>
                <Route
                    exact
                    path="/forget_password"
                    component={Authentication}></Route>
            </Switch>
        </>
    );
};

export default App;
