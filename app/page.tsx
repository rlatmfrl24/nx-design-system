"use client";

import { Button } from "../stories/Button";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div className="p-10">
      <Box>
        <Button variant="contained" color="primary">Button</Button>
      </Box>
    </div>
  );
}
