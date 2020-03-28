import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense, startRemoveExpense, startEditExpense } from '../actions/expenses';

// named export to be used in test 
export class EditExpensePage extends React.Component {

    onClick=()=>{
        //this.props.dispatch(removeExpense({ id: props.expense.id }))
        this.props.onDeleteClick({ id: this.props.expense.id });
        this.props.history.push('/'); //navigate to /
    }

    onEdit = (expense) => {

        //console.log('Updated', expense);
        //this.props.dispatch(editExpense(props.expense.id, expense));
        this.props.onEditClick(this.props.expense.id, expense);
        this.props.history.push('/'); //navigate to /
    }

    render() {
        return (
            <div>
                cccc
                <ExpenseForm expense={this.props.expense} onSubmit={this.onEdit} />
                <button onClick={this.onClick}>Remove</button>
            </div>
        );
    }
}

const mapStore2State = (state, props) => ({ //we can access props here!
    expense: state.expenses.find((expense) => (expense.id === props.match.params.thisVar))
});

const mapDispatch2Props = (dispatch, props)=>{
    return {
        onEditClick:  (id, expense) => dispatch(startEditExpense(id, expense)),
        onDeleteClick: (obj) => dispatch(startRemoveExpense(obj))
    };
}


// export default EditExpensePage;
//defalut export to use in actual application 
export default connect(mapStore2State, mapDispatch2Props)(EditExpensePage);