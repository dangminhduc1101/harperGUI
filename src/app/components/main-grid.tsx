import { Grid, Typography, Divider } from "@mui/material";
import React from "react";
import LeftDialogPanel from "./left-dialog";
import RightDialogPanel from "./right-dialog";

export default function MainGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xl={4} lg={4} md={12}>
        <Typography variant="h4" align="center">
          Left Controls
        </Typography>
        <LeftDialogPanel />
      </Grid>
      <Divider orientation="vertical" flexItem>
      </Divider>
      <Grid item xl={4} lg={4} md={12}>
        <Typography variant="h4" align="center">
          Perception
        </Typography>
      </Grid>
      <Divider orientation="vertical" flexItem>
      </Divider>
      <Grid item xl={4} lg={4} md={12}>
        <Typography variant="h4" align="center">
          Right Controls
        </Typography>
        <RightDialogPanel />
      </Grid>
    </Grid>
  );
}
