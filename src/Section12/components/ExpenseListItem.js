import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


numeral.register('locale', 'fr', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: '﷼'
    }
});

// switch between locales
numeral.locale('fr');

// const ExpenseLisItem = (props) => {
//     return (
//         <div>
//             <h3>{props.description}</h3>
//             <p>{props.amount}, {props.createdAt}</p>
//         </div>
//     );
// };

// const ExpenseLisItem = (props) => {
//     const {description, amount, createdAt} = props.expense;
//     const id = props.id;

//     return (
//         <div>
//             <h3>{description}</h3>
//             <p>{amount}, {createdAt}</p>
//             <button onClick={()=>{     console.log(id);
//                  props.dispatch(removeExpense({ id:id  }))}}>Remove</button>

//         </div>
//     );
// };

//named export to use in test files 
//better way 
export const ExpenseLisItem = ({ dispatch, id, description, amount, createdAt }) => {

    return (
        <div>
            <Link to={`/edit/${id}`}> <h3>{description}</h3> </Link>
            <p>
            \\\\{numeral(amount/100.).format('$0,0.00')}\\\\
            -
            {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
        

        </div>
    );
};

// export default connect()(ExpenseLisItem); // this is valid!, we dont want to access stores elements, we just need connect to access dispatch(); 


export default ExpenseLisItem; 