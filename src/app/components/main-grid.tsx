import { Grid, Typography } from "@mui/material";
import React from "react";

export default function MainGrid() {
  return (
    <Grid container>
      <Grid item xl={4} lg={6} md={12}>
        <Typography variant="h4" align="center">
          harperGUI
        </Typography>
      </Grid>
      <Grid item xl={4} lg={12} md={12}>
        <Typography variant="h4" align="center">
          harperGUI
        </Typography>
      </Grid>
      <Grid item xl={4} lg={6} md={12}>
        <Typography variant="h4" align="center">
          harperGUI
        </Typography>
      </Grid>
    </Grid>
  );
}
