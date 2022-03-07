import React from "react";
import { Grid } from "@mui/material";
import { CreatorSection } from "../../components/CreatorSection";

export const LandingPage = () => {
  return (
    <Grid container marginTop={8}>
      <Grid item xs={12}>
        <CreatorSection />
      </Grid>
    </Grid>
  );
};
