import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { setExpenses } from '../../actions/expenses';
import { extract } from 'extract-text-webpack-plugin';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([])
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        teBeDeleted: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);

});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        teBeDeleted: '-1'
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);

});

test('edit expense', () => {
    const updatedValue = {
        id: '0',
        description: 'fwefwfwfwf',
        note: 'xczx zxczx zfafq',
        amount: 234234,
        createdAt: 6786868
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: updatedValue
    };

    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual(updatedValue);
});


test('edit expense no change', () => {
    const updatedValue = {
        id: '-1',
        description: 'fwefwfwfwf',
        note: 'xczx zxczx zfafq',
        amount: 234234,
        createdAt: 6786868
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: updatedValue
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '10145',
        description: 'laptop',
        note: '',
        amount: 29500,
        createdAt: 200000
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense: expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);

});

test('should set expenses', () => {

    const alreadyExistedExpense = [
        {
            id: '1616',
            description: 'Gym',
            note: '',
            amount: 98520,
            createdAt: 150
        }
    ];
    const action = {
        type:'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    
    setExpenses(expenses);
    const state = expensesReducer(alreadyExistedExpense, action);
    expect(state).toEqual([expenses[1]]);

});