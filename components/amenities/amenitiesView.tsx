import { Box, Grid } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Typography from "@mui/material/Typography";

// images
import Pool from "../../public/pool.svg";

export default function AmenitiesView() {
  return (
    <>
      <Grid pt={5} container px="9rem" spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign="center">
            Amenities
          </Typography>
        </Grid>
        <Grid item lg={2}>
          <Box textAlign="center">
            <Image src={Pool} alt="pool" height={80} width={80} />
            <Typography variant="h6">Baby Pool</Typography>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box textAlign="center">
            <Image src={Pool} alt="pool" height={80} width={80} />
            <Typography variant="h6">Baby Pool</Typography>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box textAlign="center">
            <Image src={Pool} alt="pool" height={80} width={80} />
            <Typography variant="h6">Baby Pool</Typography>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box textAlign="center">
            <Image src={Pool} alt="pool" height={80} width={80} />
            <Typography variant="h6">Baby Pool</Typography>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box textAlign="center">
            <Image src={Pool} alt="pool" height={80} width={80} />
            <Typography variant="h6">Baby Pool</Typography>
          </Box>
        </Grid>
        <Grid item lg={2}>
          <Box textAlign="center">
            <Image src={Pool} alt="pool" height={80} width={80} />
            <Typography variant="h6">Baby Pool</Typography>
          </Box>
        </Grid>

        <Grid item lg={2}>
          <Box textAlign="center">
            <Image src={Pool} alt="pool" height={80} width={80} />
            <Typography variant="h6">Baby Pool</Typography>
          </Box>
        </Grid>

        <Grid item lg={2}>
          <Box textAlign="center">
            <Image src={Pool} alt="pool" height={80} width={80} />
            <Typography variant="h6">Baby Pool</Typography>
          </Box>
        </Grid>

        <Grid item lg={2}>
          <Box textAlign="center">
            <Image src={Pool} alt="pool" height={80} width={80} />
            <Typography variant="h6">Baby Pool</Typography>
          </Box>
        </Grid>

        <Grid item lg={2}>
          <Box textAlign="center">
            <Image src={Pool} alt="pool" height={80} width={80} />
            <Typography variant="h6">Baby Pool</Typography>
          </Box>
        </Grid>

        <Grid item lg={2}>
          <Box textAlign="center">
            <Image src={Pool} alt="pool" height={80} width={80} />
            <Typography variant="h6">Baby Pool</Typography>
          </Box>
        </Grid>

        <Grid item lg={2}>
          <Box textAlign="center">
            <Image src={Pool} alt="pool" height={80} width={80} />
            <Typography variant="h6">Baby Pool</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
