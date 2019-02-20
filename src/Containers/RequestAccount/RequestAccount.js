import React from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'



const styles = theme => ({
    root:{
        width:'50%',
    },   
    container: {
        display: 'flex', 
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,   
        flexDirection:'column'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,   
        paddingBottom: theme.spacing.unit,
    },
    header: {
        margin:'auto',
        fontweight:'bold'
    },
    buttonDiv:{
        display:'flex',
        justifyContent:'flex-end',
        margin: theme.spacing.unit,
    },
    button:{
        display:'flex',
        justifyContent:'center',
        margin: theme.spacing.unit,
    }
});



const requestAccount = (props) => {

    const { classes } = props;
    
    return (
        <Paper className={classes.root} >
            <form className={classes.container}>     
                <Typography variant="title" gutterBottom className={classes.header}>
                    Request an Account
                </Typography>
                <TextField
                    className={classes.textField}          
                    id="FullNameInput"
                    label="Full Name"                
                    variant="outlined"
                    margin="normal" />
                <TextField
                    className={classes.textField}
                    id="EmailInput"
                    label="Email Address"                
                    variant="outlined"
                    margin="normal" />
                <TextField
                    className={classes.textField}
                    id="Passwordnput"
                    label="Password"                
                    variant="outlined"
                    margin="normal" />
                <div className={classes.buttonDiv}>
                    <Button 
                        className={classes.button}
                        variant="outlined" 
                        color="secondary">CANCEL</Button>      
                    <Button 
                        className={classes.button}
                        variant="contained" 
                        color="primary">Sumbit</Button>       
                </div>
            </form>        
        </Paper>
    );
};

export default withStyles(styles)(requestAccount)