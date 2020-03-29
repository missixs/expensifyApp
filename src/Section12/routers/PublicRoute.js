import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticate,
    component: Component,
    ...otherStuff
}) => {
    return (

        <Route {...otherStuff} component={(props) => (
            isAuthenticate ? (
                <Redirect to="/dashboard" />
            ) : (
                    <Component {...props} />
                )
        )} />
    );
};

const mapState2Props = (state) => ({
    isAuthenticate: !!state.auth.uid
});

export default connect(mapState2Props)(PublicRoute);
