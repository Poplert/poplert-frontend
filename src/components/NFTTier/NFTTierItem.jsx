import React from "react";
import { Grid, Card, CardHeader, CardContent, Typography } from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import { CardActionArea } from '@mui/material';

export const NFTTierItem = ({ title, subheader, description }) => {
  return (
    <Grid item key={title} xs={12} sm={title === "Elite" ? 12 : 6} md={4}>
      <Card>
        <CardActionArea>
          <CardHeader
            title={title}
            subheader={subheader}
            titleTypographyProps={{ align: "center" }}
            action={title === "Legendary" ? <StarBorder /> : null}
            subheaderTypographyProps={{
              align: "center",
            }}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[200]
                  : theme.palette.grey[700],
            }}
          />
          <CardContent>
            <ul>
              {description.map((line) => (
                <Typography
                  component="li"
                  variant="subtitle1"
                  align="center"
                  key={line}
                  sx={{
                    listStyleType: "none",
                  }}
                >
                  {line}
                </Typography>
              ))}
            </ul>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
