import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


const navigationItems = () => {
    return (
        <div>
            <Button 
                component={Link} 
                to="/requestAccount" 
                variant="contained">Request Account</Button> 
            <Button 
                component={Link} 
                to="/Login" 
                color="inherit">Login</Button>             
        </div>     
    );
};

export default navigationItems;