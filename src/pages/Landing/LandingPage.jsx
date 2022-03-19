import React from "react";
import { Container, Grid } from "@mui/material";
import { CreatorSection } from "../../components/CreatorSection";
import { PreviewSection } from "../../components/PreviewSection";
import { CountdownSection } from "../../components/CountdownSection";
import { NavMenu } from "../../components/NavMenu/NavMenu";

export const LandingPage = () => {
  return (
    <Container>
      <NavMenu />
      <Grid container marginTop={4} rowSpacing={4}>
        <Grid item xs={12}>
          <CreatorSection />
        </Grid>
        <Grid item xs={12}>
          <PreviewSection />
        </Grid>
        <Grid item xs={12}>
          <CountdownSection />
        </Grid>
      </Grid>
    </Container>
  );
};
