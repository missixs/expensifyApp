import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })  || compose;

export default () => {
    // Store creation 
    const store = createStore(
        //combine arguments are key-value objects, key is root state name, value is reducer
        combineReducers(
            {
                expenses: expensesReducer,
                filters: filterReducer,
                auth:authReducer

            }
        ),
        //now you can have both redux and thunk
        composeEnhanders(applyMiddleware(thunk))
        //with below method you can only use redux devtools and not thunk.
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


    );

    return store;
}

