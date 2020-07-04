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
    padding: theme.spacing(1),
  },
}));

export default function MouseOverPopover(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hoveredRegion, setHoveredRegion] = React.useState(null);
  const [hoveredInfected, setHoveredInfected] = React.useState(null);
  const [hoveredDeceased, setHoveredDeceased] = React.useState(null);

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
        hoveredInfected={setHoveredInfected}
        hoveredDeceased={setHoveredDeceased}
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
          vertical: 'top',
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
            <p>województwo: <span>{hoveredRegion}</span></p>
            <p>zarażeni: <span>{hoveredInfected}</span></p>
            <p>ofiary smiertelne: <span>{hoveredDeceased}</span></p>
          </div>
        )}
        </Typography>
      </Popover>
    </ div >
  );
}