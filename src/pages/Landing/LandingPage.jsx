import React from "react";
import { Container, Grid } from "@mui/material";
import { CreatorSection } from "../../components/CreatorSection";
import { PreviewSection } from "../../components/PreviewSection";

export const LandingPage = () => {
  return (
    <Container>
      <Grid container marginTop={4} rowSpacing={4}>
        <Grid item xs={12}>
          <CreatorSection />
        </Grid>
        <Grid item xs={12}>
          <PreviewSection />
        </Grid>
      </Grid>
    </Container>
  );
};
