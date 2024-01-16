import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleClick = () => {
        history.push('/'); //don't delete back history
        /* history.replace('/'); don't delete back history */
    }
 
    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />

            <button 
            className='btn btn-primary'
            onClick={ handleClick }>
                Login
            </button>

        </div>
    )
}
