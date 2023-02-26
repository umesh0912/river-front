import HomeCarrousel from "@/components/carrousels/homeCarrousel";
import { Box, Stack } from "@mui/material";
import React from "react";

export default function HomeView() {
  return (
    <>
      <Box pt="3rem">
        <HomeCarrousel />
      </Box>
    </>
  );
}
