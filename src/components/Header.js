import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',

  }
};


function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar >
          <Typography variant="h5" color="initial" gutterBottom="true" >
            mapa zakażeń covid 19 w polsce
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Navbar);