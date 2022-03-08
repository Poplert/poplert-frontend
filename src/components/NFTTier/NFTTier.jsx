import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import { NFTTierItem } from "./NFTTierItem";

export const NFTTier = () => {
  const tiers = [
    {
      title: "Rare",
      description: [
        "Get exclusive BTS content",
        "Discord Benefits",
        "Autograph with your token",
      ],
    },
    {
      title: "Legendary",
      description: [
        "Invited to game with Tim",
        "Be included in content creation",
        "Unique Avatar of you in our wall of fame",
        "Have a unique easter egg hidden in content",
      ],
    },
    {
      title: "Elite",
      description: [
        "Watch early bird content",
        "Live director's commentaries and comment",
        "Get a personalized message",
      ],
    },
  ];
  return (
    <Container>
      <Typography variant="h3" align="center" mb={2}>
        Token Tiers
      </Typography>
      <Typography variant="subtitle1" align="center" mb={2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae
        felis nec mi iaculis imperdiet. Phasellus in est at dui ultricies
        elementum in vel felis.
      </Typography>
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier, index) => (
          <NFTTierItem
            key={index}
            title={tier.title}
            description={tier.description}
          />
        ))}
      </Grid>
    </Container>
  );
};
