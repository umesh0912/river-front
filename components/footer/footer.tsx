import { Box, Grid, TextField, Typography, Stack } from "@mui/material";

// images
import Pool from "../../public/pool.svg";

export default function FooterView() {
  return (
    <>
      <Typography py={5} variant="h4" textAlign="center">
        Location
      </Typography>
      <Box sx={{height:"20rem",background:"#ccc"}}></Box>
    </>
  );
}
