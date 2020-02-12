import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { LineChart, XAxis, YAxis, Tooltip, Line, ReferenceDot, ResponsiveContainer } from 'recharts';

const useStyles = makeStyles({
  GraphContainer: {
    display: 'flex',
    maxHeight: '60%',
    width: '100%',
    flex: 1
  }
});

const Graph = ({ selectedSchedulePoint, setSelectedSchedulePoint, graphSelectedSchedule }) => {
  const classes = useStyles();

  const handleClick = e => {
    const target = e.payload;
    if (target === selectedSchedulePoint) {
      setSelectedSchedulePoint(null);
    } else {
      setSelectedSchedulePoint(target);
    }
  };

  return (
    <Box className={classes.GraphContainer}>
      <ResponsiveContainer>
        <LineChart data={graphSelectedSchedule} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
          <XAxis dataKey="time" />
          <YAxis domain={['dataMin - 15', 'dataMax + 15']} />
          <Tooltip />
          <Line
            type="stepAfter"
            dataKey="target"
            stroke="purple"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ onClick: handleClick, r: 5 }}
          />
          {selectedSchedulePoint && (
            <ReferenceDot
              x={selectedSchedulePoint['time']}
              y={selectedSchedulePoint['target']}
              r={8}
              fill="red"
              stroke="none"
              onClick={handleClick}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Graph;
