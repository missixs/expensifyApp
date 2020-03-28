import uuid from 'uuid';
import database, {logAllDatabase, firebaseConfig} from '../firebase/firebase';

export const addExpense = ({ description: desc = '', note = '', amount: amnt = 0, createdAt: crtat = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: desc,
        note: note,
        amount: amnt,
        createdAt: crtat
    }
});

export const addExpenseSimple = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {

    return (dispatch) => { //it is called by redux and dispatch is passed in it.
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;//just simple destructuring

        const expense = { description, note, amount, createdAt }; // constructing an object 
        return database.ref('expenses').push(expense).then((ref) => { //return added for chaining 
            //logAllDatabase();
            dispatch(addExpenseSimple({ id: ref.key, ...expense }))
        }).catch((e)=>{
            console.log('Failed !...', e)
        });
    }
}
//these functions just return objects
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    teBeDeleted: id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_EXPENSES
export const setExpenses = (expenses) =>({
    type:'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () =>{
    setTimeout(()=>{}, 1500);
    // return {
    //     type:'s'
    // };

    return (dispatch) => { //it is called by redux and dispatch is passed in it.
  
        
        return database.ref('expenses').once('value').then((snapshot)=>{
            const expenses = [];

            snapshot.forEach((childSnapshot)=>{
              expenses.push({
                id:childSnapshot.key,
                ...childSnapshot.val()
              });
            });

            dispatch(setExpenses(expenses));
        
        }).catch((e)=>{
            console.log('Failed !...', e)
        });
        
    }

} ;