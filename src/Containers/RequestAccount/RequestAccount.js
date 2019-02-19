import React from 'react'
import classes from './RequestAccount.css'

const requestAccount = () => {
    return (
        <div className={classes.Form}>
            <h1>Request an Account</h1>
            <label className={classes.InputAndLabel} htmlFor="FullNameInput">Full Name:
                <input type="text" id="FullNameInput"/>
            </label>

            <label className={classes.InputAndLabel} htmlFor="EmailInput">Email:
                <input type="text" id="EmailInput"/>
            </label>     

            <label className={classes.InputAndLabel} htmlFor="PasswordInput">Password:
                <input type="text" id="PasswordInput"/>
            </label>

        </div>
    );
};

export default requestAccount