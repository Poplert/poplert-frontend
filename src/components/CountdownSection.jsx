import React from "react";
import { Grid, Typography } from "@mui/material";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (!completed){
    return (
      <Grid container textAlign={"center"} rowSpacing={2}>
        <Grid item xs={3}>
          <Typography variant="h4">
            Days
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4">
            Hours
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4">
            Minutes
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4">
            Seconds
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography variant="h1">
            {days}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h1">
            {hours}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h1">
            {minutes}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h1">
            {seconds}
          </Typography>
        </Grid>
      </Grid>
    );
  }
};

export const CountdownSection = () => {
  const LAUNCH_DATE = new Date(2022, 2, 31, 20, 0, 0)

  return (
    <Grid xs={12}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center">
          READY TO LAUNCH IN
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Countdown date={LAUNCH_DATE} renderer={renderer} />
      </Grid>
    </Grid>
  )
}
