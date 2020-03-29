import { editExpense, removeExpense, addExpense, addExpenseSimple, startAddExpense , setExpenses, startSetExpenses, startRemoveExpense, startEditExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const uid = 'ThisIsMyUid';
const defaultAuthState = { auth:{uid} }

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt})=>{
        expensesData[id] = {description, note, amount, createdAt};
    });

    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>{
        done();
    });
});

let originalTimeout;
beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100 * 1000; //in ms 
});

afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({ // To equal is used to compare objects 
        type: 'REMOVE_EXPENSE',
        teBeDeleted: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const id = 42424242425;
    const update = { note: 'New Note DD' }
    const edit = editExpense(id, update);
    expect(edit).toEqual({
        type: 'EDIT_EXPENSE',
        id: id,
        updates: update
    });
});

test('Shouls setup add expense action object with provided values', () => {
    //it is changed 
    // const expenseDate={
    //     id: 'asd',
    //     description: 'Rent',
    //     amount:1300,
    //     note: 'This is that',
    //     createdAt: 1200
    // };
    // const actionAdd =addExpense(expenseDate);
    // expect(actionAdd).toEqual({
    //     type: 'ADD_EXPENSE',
    //     expense:expenses[2]
    // });

    const actionAdd = addExpenseSimple(expenses[2]);
    expect(actionAdd).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]

    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'THis one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        //expect(1).toBe(2);
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        //1)
        // database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
        //     expect(snapshot.val()).toEqual(expenseData);
        //      done();
        // });

        //2)
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        //console.log(snapshot.val());
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});


test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);

    const expenseDataDefault = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    store.dispatch(startAddExpense()).then((done) => {
        //expect(1).toBe(2);
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDataDefault
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        //console.log(snapshot.val());
        expect(snapshot.val()).toEqual(expenseDataDefault);
        done();
    });
});

test('should setup set expense action object with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from database ', (done)=>{
    const store = createMockStore(defaultAuthState);

    store.dispatch(startSetExpenses()).then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('should remove expense from firebase ', (done)=>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startRemoveExpense({id:expenses[0].id})).then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:'REMOVE_EXPENSE',
            teBeDeleted: expenses[0].id
        });

        return database.ref(`users/${uid}/expenses/${action[0].teBeDeleted}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeNull();
        done();

    });

});


test('should edit expense in database ', (done)=>{
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;

    const toBeUpdated= {
        createdAt: 15152022,
        description:'This Edited Txt.'
    }
    
    store.dispatch(startEditExpense(id, toBeUpdated)).then( ()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,
            updates: toBeUpdated
        });

        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        
        expect(snapshot.val()).toEqual({
                description:toBeUpdated.description ,
                amount:expenses[0].amount ,
                createdAt:toBeUpdated.createdAt ,
                note:expenses[0].note ,
            });

        // expect(subscription.val()).toEqual({
        //     description:toBeUpdated.description ,
        //     amount:expenses[0].amount ,
        //     createdAt:toBeUpdated.createdAt ,
        //     note:expenses[0].note ,
        // });
        done();

    });
});
/*

*/
// not his responsibity anymore, someone else is filling defaults 
// test('Shouls setup add expense action object with default values',()=>{
//     const expected = { description: '', note : '', amount: 0, createdAt: 0 };
//     const actionAdd =addExpense();
//     expect(actionAdd).toEqual({
//         type:'ADD_EXPENSE' ,
//         expense:{
//             ...expected,
//             id: expect.any(String)
//         }
//     });
// });