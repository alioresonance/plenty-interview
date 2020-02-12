import React, { useState, useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { postSchedule } from './../../api.js';

const useStyles = makeStyles({
  FormContainer: {
    margin: '1.5rem'
  },
  InlineForm: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  SliderInput: {
    flex: '9',
    display: 'flex',
    flexDirection: 'column'
  },
  SaveBtn: {
    flex: '1',
    margin: '0.5rem 0 0.5rem 1rem'
  }
});

const InputSlider = ({ selectedSchedulePoint, newTargetRef }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    newTargetRef.current = value;
  });

  useEffect(() => {
    setValue(selectedSchedulePoint.target);
  }, [selectedSchedulePoint]);

  const handleSliderChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = e => {
    setValue(e.target.value === '' ? 0 : Number(e.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs>
        <Slider
          value={value}
          valueLabelDisplay="auto"
          min={0}
          max={110}
          step={5}
          marks
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
        />
      </Grid>
      <Grid item>
        <Input
          value={value}
          margin="dense"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 5,
            min: 0,
            max: 110,
            type: 'number',
            'aria-labelledby': 'input-slider'
          }}
        />
      </Grid>
    </Grid>
  );
};

const Form = ({ selectedSchedulePoint, setSchedulesMap, selectedRoom, schedulesMap }) => {
  const classes = useStyles();
  const newTargetRef = useRef(0);

  const handleSubmit = async () => {
    if (selectedSchedulePoint == null) return;
    const currSchedule = schedulesMap[selectedRoom]['commands'];
    const currTime = selectedSchedulePoint.time;
    const newTargetVal = newTargetRef.current;
    const newScheduleData = { commands: [...currSchedule, { time: currTime, target: newTargetVal }] };

    const { status } = await postSchedule(selectedRoom, newScheduleData);
    if (status === 200) {
      const newSchedulesMap = {
        ...schedulesMap,
        [selectedRoom]: newScheduleData
      };
      setSchedulesMap(newSchedulesMap);
    } else {
      alert('Schedule Failed To Save');
    }
  };

  const FormContent = () => {
    const FORM_TITLE = 'Select New Temperature';
    if (selectedSchedulePoint == null) return <b>Click on a Data Point on the Graph to Modify</b>;
    return (
      <form className={classes.InlineForm}>
        <FormControl className={classes.SliderInput}>
          <Typography id="input-slider" gutterBottom>
            {FORM_TITLE}
          </Typography>
          <InputSlider {...{ selectedSchedulePoint, newTargetRef }} />
        </FormControl>
        <Button variant="contained" color="primary" className={classes.SaveBtn} size="small" onClick={handleSubmit}>
          Save
        </Button>
      </form>
    );
  };

  return (
    <Card className={classes.FormContainer}>
      {selectedSchedulePoint && (
        <CardHeader
          title={`Current Target: ${selectedSchedulePoint.target}`}
          subheader={`at ${selectedSchedulePoint.time}`}
        />
      )}
      <CardContent>
        <FormContent />
      </CardContent>
    </Card>
  );
};

export default Form;
