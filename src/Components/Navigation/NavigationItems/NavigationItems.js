import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/requestAccount" exact>Request Account</NavigationItem>
            <NavigationItem link="/login">Sign In</NavigationItem>
        </ul>
    );
};

export default navigationItems;