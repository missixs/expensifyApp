import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header.js'

export const PrivatRoute = ({
    isAuthenticate,
    component: Component,
    ...otherStuff
}) => {
    return (

        <Route {...otherStuff} component={(props) => (
            isAuthenticate ? (
                <div>
                    <Header />
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to="/" />
                )
        )} />
    );
};

const mapState2Props = (state) => ({
    isAuthenticate: !!state.auth.uid
});

export default connect(mapState2Props)(PrivatRoute);
