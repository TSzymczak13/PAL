import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems'
// import Logo from '../Logo/Logo'


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


const header = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="Menu"
                        component={Link} 
                        to="/" >
                    <HomeIcon />
                    </IconButton>
                    <Typography 
                        variant="h6" 
                        color="inherit" 
                        className={classes.grow}>Envision Radiology : PAL</Typography>                
                    <NavigationItems />
                    
                    
                </Toolbar>
            </AppBar>
        </div>           
    )
}






export default withStyles(styles)(header)