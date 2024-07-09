import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(AuthContext);

    const handleClick = () => {
        const memoPath = localStorage.getItem('memoPath') || '/';

        console.log(memoPath);
        dispatch({
            type: types.login,
            payload: {
                name: 'Username'
            }
        });

        history.push(memoPath); //don't delete back history
    }

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={handleClick}>
                Login
            </button>

        </div>
    )
}
