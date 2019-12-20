import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Context
import { SignUpProvider } from '../../context/signup';

// Mui
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Components
import SignUpForm from './SignUpForm';

// Styling
const useStyles = makeStyles(theme => ({
    wrapper: {
        width: '500px'
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(),
    },
}));

const SignUp = () => {
    const classes = useStyles();

    /**
     * API request is made (submitForm) with data from Sign Up form.
     * @param {obj} data 
     */
    const submitForm = data => {
        console.log(data);
    }

    /**
     * Set the highest component the provider. Providing the sigup context
     * to all the children components.
     * 
     * Create a wrapper component which will hold all the logic for
     * gathering the data such as a form. 
     */
    return (
        <SignUpProvider>
            <div className={classes.wrapper}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <SignUpForm submitForm={submitForm}/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </SignUpProvider>
    )
}



export default SignUp;