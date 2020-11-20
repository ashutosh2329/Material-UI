import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Loginicon from '@material-ui/icons/AccountBoxRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";



const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  cardElement: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.spacing(5),
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '80%', 
    marginTop: theme.spacing(0.5),
  },
  submit: {
    margin: theme.spacing(1, 0, 1,0),
    borderRadius: theme.spacing(5),
    
  },
  textField: {
    [`& fieldset`]: {
      borderRadius: theme.spacing(5),
    }
  },
  checkBox: {
    margin: theme.spacing(1,0,0,0),
  },
  textStyle: {
    margin: theme.spacing(1,0,0,1)
  },
  textStyleBottom: {
    margin: theme.spacing(0,0,4,1)
  },

}));

 function LogIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
    <div className={classes.card}>
         
   <Card className={classes.cardElement}>

   <Avatar className={classes.avatar}>
      <Loginicon />
   </Avatar>

        <form className={classes.form} noValidate>
          <TextField className={classes.textField}
            variant="outlined"
            size="small"
            margin="dense"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField className={classes.textField}
            variant="outlined"
            margin="dense"
            size="small"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Grid container >
          <Grid item  >  
          <FormControlLabel className={classes.checkBox}
            control={<Checkbox value="remember" color="primary"  />}
            label={<Typography  >Remember me</Typography>}
            color="primary"/>
          </Grid>
          </Grid>
          <Grid container>
          <Grid item className={classes.textStyle}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            color="primary"
            className={classes.submit}><Typography color="secondary">Sign In</Typography></Button>
            <Grid item className={classes.textStyleBottom}>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            <Grid >
            <Typography style={{ textAlign: "center"}}>OR</Typography>
            <FacebookLoginButton style={{borderRadius: "50px"}} />
            <GoogleLoginButton style={{borderRadius: "50px"}} />
            <TwitterLoginButton style={{borderRadius: "50px"}} />
            </Grid>
            </Grid>
        </form>
        
        </Card>
        </div>
    </Container>
  );
}

export default LogIn;