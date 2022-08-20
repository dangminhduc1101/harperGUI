import { Stack } from "@mui/material";
import MyAppBar from "./app-bar";
import MainGrid from "./main-grid";
import React from "react";

export default function FullApp() {
  return (
    <Stack spacing = {6}>
        <MyAppBar />
        <MainGrid />
    </Stack>
  );
}
