
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type) {
        case 'REMOVE_EXPENSE':
            const rr = state.filter(element => {
                return element.id !== action.teBeDeleted;
            });


            /* with destructuring 
                 const rr =  state.filter(({id}) => {
             return id !== action.teBeDeleted;
              });*/
            //console.log('This ', rr);

            return rr;

        case 'ADD_EXPENSE':
            //2 ways to do that: 1)concat 
            /*
            concat does not change array at all.
            const name = ['ali', 'sds'];
            undefined
            name.push('jen');
            3
            name.concat('Jafar')
                (4)["ali", "sds", "jen", "Jafar"]
            name
                (3)["ali", "sds", "jen"]
            */
            //return state.concat(action.expense);

            //2) spread operator 
            // const names = ['ali', 'mamad']
            // undefined
            // ['adam', ...names, 'Ko']
            // (4)["adam", "ali", "mamad", "Ko"]
            return [...state, action.expense];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });

        case 'SET_EXPENSES':
            return action.expenses;

        default:

            return state;
    }
}

export default expensesReducer;