import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Mapa from './Map';

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function MouseOverPopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hoveredRegion, setHoveredRegion] = React.useState({ region: '', infected: '', deceased: '' });
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    < div >
      <Mapa
        className="mapa"
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        data={props.data}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        hoveredRegion={setHoveredRegion}
        setActiveRegion={props.setActiveRegion}
      />
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography component={'div'} variant={'body2'}>{(
          <div className="popup">
            <p>województwo: <span>{hoveredRegion.region}</span></p>
            <p>zarażeni: <span>{hoveredRegion.infected}</span></p>
            <p>ofiary smiertelne: <span>{hoveredRegion.deceased}</span></p>
          </div>
        )}
        </Typography>
      </Popover>
    </ div >
  );
}