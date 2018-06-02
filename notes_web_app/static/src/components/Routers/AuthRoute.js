import {Route,Redirect} from 'react-router-dom';
import React from 'react';

const isAuthenticated = () => {
    return window.sessionStorage.getItem('token');
}
const authRoute = ({component , path, exact=false, ...rest}) => {

    if(isAuthenticated()){
    return (
        <Route
            path={path}
            exact={exact}
            render={(props) => React.createElement(component, {...props, ...rest}) }
        />);
    } else {
     return (<Redirect from={path} to='/login'/>);
    }
}
export default authRoute;