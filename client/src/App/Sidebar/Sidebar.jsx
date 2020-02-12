import React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  Sidebar: {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightgray'
  },
  SelectionSection: {
    display: 'flex-column',
    padding: '2rem 1rem 1rem 1rem'
  },
  SelectInput: {
    width: '100%'
  }
});

const SelectRoom = ({ roomOptions, setSelectedRoom, selectedRoom }) => {
  const classes = useStyles();
  const handleChange = event => setSelectedRoom(event.target.value);

  return (
    <FormControl className={classes.SelectInput}>
      <InputLabel htmlFor="room-select">Room</InputLabel>
      <Select value={selectedRoom} onChange={handleChange}>
        {roomOptions.map((roomName, idx) => (
          <MenuItem key={idx} value={roomName}>
            {roomName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const Sidebar = props => {
  const classes = useStyles();

  const TITLE = 'Select Criteria';

  return (
    <Box className={classes.Sidebar}>
      <Box className={classes.SelectionSection}>
        <h3>{TITLE}</h3>
        <SelectRoom {...props} />
      </Box>
    </Box>
  );
};

export default Sidebar;
