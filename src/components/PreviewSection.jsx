import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import { NFTCollection } from "./NFTCollection/NFTCollection";
import { NFTTier } from "./NFTTier/NFTTier";

export const PreviewSection = () => {
  return (
    <Paper sx={{ px: "4%", py: "4%" }}>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">Bond on the Moon</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" align="justify">
            This genesis NFT project features 10 distinct colorized editions of
            the historic Terry O’Neill photograph, “Bond on the Moon”. Terry
            O’Neill’s digital artist has reverse engineered what a color
            photograph would look like on the moon if the human eye could “see”
            the entire spectrum of colors and lights traveling through space.
            These 1-of-1 NFTs will never be turned into physical prints.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <NFTCollection />
        </Grid>
        <Grid item xs={12}>
          <NFTTier />
        </Grid>
      </Grid>
    </Paper>
  );
};
