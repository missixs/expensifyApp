import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
// import './firebase/firebase_playground';
// import './firebase/promises_raw_playground';

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

/*
store.dispatch(addExpense({ description: 'water bill', note: '', amount: 2000, createdAt: 10000 }));
store.dispatch(addExpense({ description: 'Gas bill', note: '', amount: 1000, createdAt: 200 }));
store.dispatch(addExpense({ description: 'Rent', note: '', amount: 109500, createdAt: 0 }));


store.dispatch(setTextFilter(''));
const state = store.getState();
const visibleItems = getVisibleExpenses(state.expenses, state.filters);
*/
//console.log(visibleItems);
// {/** redux provider */}

const jsx = (
    <Provider store={store} >
        <AppRouter />

    </Provider>
);

ReactDOM.render(<p>Loading... </p>, document.getElementById('appdiv'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('appdiv'));
})

