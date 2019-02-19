import React from 'react'
import Logo from '../Logo/Logo'
import classes from './Header.css'
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'

const header = () => {
    return (
        <header className={classes.Header}>
            <Logo />
            
            <nav>
                <NavigationItems />
            </nav>
        </header>           
    )
}

export default header