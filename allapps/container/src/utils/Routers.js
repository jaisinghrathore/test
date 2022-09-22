import React from "react";
import Authentication from "../Pages/auth/Authentication";
import Admin from "../Pages/admin/Admin";
import { Route, Switch } from "react-router-dom";

const Routers = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Admin}></Route>
                <Route path="/auth" component={Authentication}></Route>
                <Route path="/admin" component={Admin}></Route>
            </Switch>
        </>
    );
};

export default Routers;
