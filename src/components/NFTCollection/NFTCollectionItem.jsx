import React from "react";
import {
  ImageListItem,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

export const NFTCollectionItem = ({ name, src, alt = "NFTCollectionItem" }) => {
  return (
    <ImageListItem>
      <Card elevation={6}>
        <CardMedia
          component="img"
          image={src}
          alt={alt}
          sx={{ margin: 0, borderRadius: 0 }}
        />
        <CardContent sx={{ pb: 1 }}>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Buy now</Button>
        </CardActions>
      </Card>
    </ImageListItem>
  );
};
