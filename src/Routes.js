import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './pages/auth/Login';
import Register from './pages/auth/Regiser';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/dashboard';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/forgotpassword" exact component={ForgotPassword} />
                <Route path="/resetpassword" exact component={ResetPassword} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}


export default Routes;
