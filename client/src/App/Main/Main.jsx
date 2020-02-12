import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Graph from './Graph/Graph';
import Form from './Form/Form';
import { makeStyles } from '@material-ui/styles';
import { getHourlySchedule } from './../utils';

const useStyles = makeStyles({
  Main: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    width: '100%'
  },
  ContentSection: {
    flex: 'auto',
    width: '100%',
    display: 'flex'
  },
  GraphFormSection: {
    marginTop: '4rem',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxHeight: '80%',
    padding: '0 2rem'
  }
});

const Main = ({ schedulesMap, selectedRoom, setSchedulesMap }) => {
  const classes = useStyles();

  const [selectedSchedulePoint, setSelectedSchedulePoint] = useState(null);

  useEffect(() => {
    if (selectedSchedulePoint) {
      const { time } = selectedSchedulePoint;
      const mapPoint = schedulesMap[selectedRoom].commands.find(x => x.time === time);
      if (mapPoint) {
        setSelectedSchedulePoint(mapPoint);
      } else {
        setSelectedSchedulePoint(null);
      }
    }
    // eslint-disable-next-line
  }, [schedulesMap, selectedRoom]);

  const selectedSchedule = schedulesMap[selectedRoom] ? schedulesMap[selectedRoom]['commands'] : [];
  const graphSelectedSchedule = getHourlySchedule(selectedSchedule);

  const headerText = selectedRoom ? `${selectedRoom} Schedule` : 'No Schedules Available';
  const graphProps = { selectedSchedulePoint, setSelectedSchedulePoint, graphSelectedSchedule };
  const formProps = { selectedSchedulePoint, setSchedulesMap, selectedRoom, schedulesMap };

  return (
    <Box className={classes.Main}>
      <h1>{headerText}</h1>
      <Box className={classes.ContentSection}>
        {Object.keys(schedulesMap).length > 0 && (
          <Box className={classes.GraphFormSection}>
            <Graph {...graphProps} />
            <Form {...formProps} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Main;
