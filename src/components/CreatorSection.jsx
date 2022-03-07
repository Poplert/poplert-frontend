import React from "react";
import { Grid, Typography, Avatar } from "@mui/material";

export const CreatorSection = () => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Avatar alt="Remy Sharp" sx={{ width: 100, height: 100 }} />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={4}>
        <Typography variant="h1" align="center">
          Terry O’Neill
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={8}>
        <Typography variant="body1" align="center">
          IN COLOR is the genesis NFT project from Iconic Images. Iconic Images
          represents many of the world’s most renowned photographers, creating
          international touring exhibitions, and resourcing luxury fashion brand
          collaborations and editorial image licensing to the world’s leading
          newspapers and magazines.
        </Typography>
      </Grid>
    </Grid>
  );
};
