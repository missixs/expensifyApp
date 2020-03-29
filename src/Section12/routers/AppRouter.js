import React from 'react';

import { Router, BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import NotFoundPage from '../components/404NotFound'
import helpPage from '../components/Help'
import editPage from '../components/edit'
import AddExpensePage from '../components/addExpense'
import ExpensDashBoaedPage from '../components/ExpensDash'
import LoginPage from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();

const AppRouter = () => (
    // <BrowserRouter>
    <Router history={history} >
        <div>
            <Switch> {/** stops at first match */}
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpensDashBoaedPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:thisVar" component={editPage} /> {/** :id is used to catch dynamic id */}
                <PrivateRoute path="/help" component={helpPage} />
                <Route component={NotFoundPage} />
            </Switch>

        </div>
    </Router>
    // </BrowserRouter>
);

export default AppRouter;