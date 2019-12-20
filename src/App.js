import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SignUp from './view/SignUp';

const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f4f4f4',
      height: '100vh',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignUp />
    </div>
  )
};

export default App;
