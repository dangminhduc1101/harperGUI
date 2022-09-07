import { Grid, Typography, Divider, Stack } from "@mui/material";
import React from "react";
import LeftDialogPanel from "./left-dialog";
import RightDialogPanel from "./right-dialog";

export default function MainGrid() {
  return (
    <Grid container spacing={1}>
      <Grid item md={12} lg={4} xl={4}>
        <Typography variant="h4" align="center">
          Left Controls
        </Typography>
        <LeftDialogPanel />
      </Grid>
        <Divider orientation="vertical" flexItem sx={{mr: "-1px"}}/>
      <Grid item md={12} lg={4} xl={4}>
        <Typography variant="h4" align="center">
          Perception
        </Typography>
      </Grid>
        <Divider orientation="vertical" flexItem sx={{mr: "-1px"}}/>
      <Grid item md={12} lg={4} xl={4}>
          <Typography variant="h4" align="center">
            Right Controls
          </Typography>
          <RightDialogPanel />
      </Grid>
    </Grid>
  );
}
