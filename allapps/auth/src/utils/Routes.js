import React from "react";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import ForgetPassword from "../pages/forgetPassword/ForgetPassword";
import ChangePassword from "../pages/changePassword/ChangePassword";
import { Switch, Route } from "react-router-dom";

const Routers = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route
                    exact
                    path="/registration"
                    component={Registration}></Route>
                <Route
                    exact
                    path="/change_password"
                    component={ChangePassword}></Route>
                <Route
                    exact
                    path="/forget_password"
                    component={ForgetPassword}></Route>
            </Switch>
        </>
    );
};

export default Routers;
