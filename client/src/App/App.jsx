import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import { fetchSchedules } from './api';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  App: {
    minHeight: '100vh'
  },
  MainItem: {
    flex: 'auto',
    display: 'flex',
    backgroundColor: '#f9f9f9'
  }
});

const App = () => {
  const classes = useStyles();
  const [schedulesMap, setSchedulesMap] = useState({});
  const [selectedRoom, setSelectedRoom] = useState('');

  useEffect(() => {
    const fetchInitialData = async () => {
      const { status, data } = await fetchSchedules();
      if (status === 200) {
        setSchedulesMap(data);
        if (Object.keys(data).length > 0) {
          const initialRoom = Object.keys(data)[0];
          setSelectedRoom(initialRoom);
        }
      }
    };
    fetchInitialData();
  }, []);

  const sidebarProps = {
    roomOptions: Object.keys(schedulesMap),
    setSelectedRoom,
    selectedRoom
  };

  const mainProps = {
    schedulesMap,
    selectedRoom,
    setSchedulesMap
  };

  return (
    <Grid container className={classes.App}>
      <Grid item xs={4} md={3} lg={2}>
        <Sidebar {...sidebarProps} />
      </Grid>
      <Grid item xs={8} md={9} lg={10} className={classes.MainItem}>
        <Main {...mainProps} />
      </Grid>
    </Grid>
  );
};

export default App;
