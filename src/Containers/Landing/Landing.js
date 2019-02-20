import React from 'react';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

    const styles = () => ({
        title:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            width:'50%',
        },
        topDivider:{
            height:'2px'
        }
    });

const landing = (props) => {
    const { classes } = props;
    return (
        
        <div className={classes.title}>
        <Typography 
            variant="h6" align="center" style={{fontSize:36}}>
            Welcome to PAL
        </Typography>
        <Divider className={classes.topDivider} variant="middle" />
        <Typography 
            style={{fontSize:16}}
            variant="caption" 
            align="center"
            gutterBottom>
            Patients and physicians in need of diagnostic imaging services can turn to our trusted team at Envision Radiology. Our imaging professionals deliver world-class services at all of our conveniently located centers. See for yourself why we lead the way in quality of care and patient satisfaction.
        </Typography>


        </div>
    );
};

export default withStyles(styles)(landing);