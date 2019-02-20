import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    footer: {
        backgroundColor: '#EAF2F8',
        display:'flex',
        justifyContent:'center',
        width:'100%',
        position: 'fixed',
        bottom:0,
        padding: `${theme.spacing.unit * 3}px 0`,
        
        
    },
})


const footer = (props) => {
    const { classes } = props;
    return (
        <footer className={classes.footer}>
            <Typography 
                variant="subtitle1" 
                align="center" 
                color="textSecondary" 
                component="p"  
                style={{ borderRight: '0.1em solid grey', padding: '0.5em' }}>Terms of Service</Typography>
            <Typography 
                variant="subtitle1" 
                align="center" 
                color="textSecondary" 
                component="p"               
                style={{ borderRight: '0.1em solid grey', padding: '0.5em' }}>Copyright 2019. All Rights Reserved</Typography>
            <Typography 
                variant="subtitle1" 
                align="center" 
                color="textSecondary" 
                component="p"
                style={{ padding: '0.5em' }}>Privacy Policy</Typography>
        </footer>
    );
};

export default withStyles(styles)(footer);