import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core'
import Logout from './App'

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      marginBottom: theme.spacing(3)
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
}));


const Header = ({user,Logout}) => {
    const classes = useStyles();
    console.log(user)
   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" className={classes.title}>
                        Bienvenido, {user}
               </Typography>
               <Button
							variant='contained'
							color='primary'
                            onClick={Logout}
						>
							Sign out
						</Button>
            </Toolbar>
         </AppBar>
      </div>
   )
}

export default Header;