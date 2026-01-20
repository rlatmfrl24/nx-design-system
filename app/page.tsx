"use client";

import { Button } from "../stories/button.component";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div className="p-10">
      <Box>
        <Button label="Button" />
      </Box>
    </div>
  );
}
