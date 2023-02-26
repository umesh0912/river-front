import { Box, Button, Grid, Stack } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Typography from "@mui/material/Typography";

// images
import ReactangleOne from "../../public/rectangleOne.svg";
import SlideOne from "../../public/mobile/slideOne.jpeg";

export default function FloorPlanView() {
  return (
    <>
      <Grid container px="9rem">
        <Grid item xs={12}>
          <Typography textAlign="center" variant="h4" pt={3} pb={5}>
            Floor Plans
          </Typography>
        </Grid>

        <Grid container spacing={3}>
          <Grid item lg={4}>
            <Stack>
              <Box>
                <Image src={SlideOne} height={400} width={420} alt="image" />
              </Box>
              <Box>
                <Button variant="outlined">More Details</Button>
              </Box>
            </Stack>
          </Grid>

          <Grid item lg={4}>
            <Stack>
              <Box>
                <Image src={SlideOne} height={400} width={420} alt="image" />
              </Box>
              <Box>
                <Button variant="outlined">More Details</Button>
              </Box>
            </Stack>
          </Grid>

          <Grid item lg={4}>
            <Stack>
              <Box>
                <Image src={SlideOne} height={400} width={420} alt="image" />
              </Box>
              <Box>
                <Button variant="outlined">More Details</Button>
              </Box>
            </Stack>
          </Grid>

          <Grid item lg={4}>
            <Stack>
              <Box>
                <Image src={SlideOne} height={400} width={420} alt="image" />
              </Box>
              <Box>
                <Button variant="outlined">More Details</Button>
              </Box>
            </Stack>
          </Grid>

          <Grid item lg={4}>
            <Stack>
              <Box>
                <Image src={SlideOne} height={400} width={420} alt="image" />
              </Box>
              <Box>
                <Button variant="outlined">More Details</Button>
              </Box>
            </Stack>
          </Grid>

          <Grid item lg={4}>
            <Stack>
              <Box>
                <Image src={SlideOne} height={400} width={420} alt="image" />
              </Box>
              <Box>
                <Button variant="outlined">More Details</Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
