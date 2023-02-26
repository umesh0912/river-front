import { Box, Grid, TextField, Typography, Stack } from "@mui/material";

// images
import Pool from "../../public/pool.svg";

export default function ContactView() {
  return (
    <>
      <Typography variant="h4" textAlign="center">
        Contact Us
      </Typography>
      <Grid pt={5} container px="9rem" spacing={5}>
        <Grid item lg={12}>
          <Stack direction="row" spacing={3} justifyContent="center">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Phone" variant="outlined" />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
