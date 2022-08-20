import { AppBar, Button, Box, Typography, Stack } from "@mui/material";
import React, { useState } from "react";

export default function MyAppBar() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <AppBar sx={{ flexDirection: "row" }}>
      <Box sx={{ width: "25%"}}>
        <Typography variant="h4" align="center">harperGUI</Typography>
      </Box>
      <Box sx={{ width: "75%", alignContent: "center"}}>
      <Stack border = "black" direction="row" justifyContent="space-evenly">
        <Button
          variant="text"
          sx={{ color: "white" }}
          onClick={() => setCount1(count1 + 1)}
        >
          GUIDE
        </Button>
        <Button
          variant="text"
          sx={{ color: "white" }}
          onClick={() => setCount2(count2 + 1)}
        >
          GITHUB
        </Button>
        <Button
          variant="text"
          sx={{ color: "white" }}
          onClick={() => setCount2(count2 + 1)}
        >
          CONTACT
        </Button>
      </Stack>
      </Box>
    </AppBar>
  );
}
