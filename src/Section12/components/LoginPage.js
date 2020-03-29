import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin })=>{
    return (
        <div>
            <button onClick={startLogin}> Login </button>
        </div>
    );
}

const mapDispatch2Props = (dispatch)=>({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatch2Props)(LoginPage);
// export default LoginPage;