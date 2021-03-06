import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


function Copyright() {
    return (
      <Typography variant="body2" color="primary" align="center">
        {'Copyright @ '}
        <Link color="primary" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: "30.5vh",
   
  },
  main: {
    marginTop: theme.spacing(8),
    
  },
  footer: {
    padding: theme.spacing(4,2),
    marginTop: 'auto',
    backgroundColor:"#000000",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm" >
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}