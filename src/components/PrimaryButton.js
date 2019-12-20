import React from 'react';

// Mui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    primaryButton: {
        marginTop: theme.spacing(),
    }
}));

const PrimaryButton = ({ children, handleClick }) => {
    const classes = useStyles();

    return (
        <Button
            className={classes.primaryButton}
            color="primary"
            onClick={handleClick}
            variant="contained">
            {children}
        </Button>

    )
} 

export default PrimaryButton;