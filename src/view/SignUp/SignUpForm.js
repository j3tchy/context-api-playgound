import React from 'react';

// Context
import { useSignUp } from '../../context/signup';

// Mui
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel } from '@material-ui/core';

// Components
import StyledButton from '../../components/PrimaryButton';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(),
    },
    formControl: {
        marginBottom: theme.spacing(2),
    },
    button: {

    },
    heading: {
        marginBottom: theme.spacing(),
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
}));

const SignUpForm = ({ submitForm }) => {
    const classes = useStyles();
    /**
     * Create custom hooks to pass context into a variable
     */
    const signUp = useSignUp();

    const handleSubmit = () => {
        /**
         * Grab data from context
         */
        const { location, name } = signUp;
        const data = { location, name };

        /**
         * Pass data to function in parent component
         */
        submitForm(data);
    }

    return (
        <form className={classes.form}>
            <Typography
                className={classes.heading}
                component='h1'
                variant='h6'
            >
                Member Sign Up
            </Typography>
            <FormControl className={classes.formControl}>
                <TextField
                    label="Name"
                    onChange={e => signUp.setName(e.target.value)}
                    value={signUp.name}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="location">Select location</InputLabel>
                <Select
                    labelId="location"
                    onChange={e => signUp.setLocation(e.target.value)}
                    value={signUp.location}>
                    <MenuItem value={1}>Gloucester</MenuItem>
                    <MenuItem value={2}>London</MenuItem>
                    <MenuItem value={3}>Guildford</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <div className={classes.buttonWrapper}>
                    <StyledButton handleClick={handleSubmit}>Sign Up</StyledButton>
                </div>
            </FormControl>
        </form>
    )
}

export default SignUpForm;