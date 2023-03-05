import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import react from "react";

// icons
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import StarsIcon from "@mui/icons-material/Stars";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";

// images
import test from "../public/desktop/slideTwo.jpeg";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

export default function HomeView() {
  const floorPlaningData = [
    {
      id: 1,
      title: "Pool Villas Plot Amenities",
      floorPlanType: "1 RK",
      pointOne: "Individual 7/12 with Legal Ownership",
      pointTwo: "Project Sanctioned by Town Planning",
      pointThree: "BE Compound Wall with Gate",
      pointFour: "Landscape Garden with Decorative Lighting",
      pointFive: "Open Parking",
      link: "Open Parking",
    },
    {
      id: 2,
      title: "Pool Villa Amenitie",
      floorPlanType: "1 RK",
      pointOne: "Flooring 4 X 4 DGVT",
      pointTwo: "Bathroom Tile 2 X 4 DGVT",
      pointThree: "Composite Marble Window Frames",
      pointFour: "Elegant Laminated Door with a Godrej Lock",
      pointFive: "Sanitary and Bathroom Fitting from Jaguar",
      link: "Open Parking",
    },
    {
      id: 3,
      title: "Pool Villa Amenitie",
      floorPlanType: "1 RK",
      pointOne: "Flooring 4 X 4 DGVT",
      pointTwo: "Bathroom Tile 2 X 4 DGVT",
      pointThree: "Composite Marble Window Frames",
      pointFour: "Elegant Laminated Door with a Godrej Lock",
      pointFive: "Sanitary and Bathroom Fitting from Jaguar",
      link: "Open Parking",
    },
  ];
  return (
    <>
      {/* intro */}
      <Grid
        className="introBackground"
        py="8rem"
        container
        px="3rem"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item md={6}>
          <Stack spacing={12} direction="column">
            <Typography
              color="#fff"
              sx={{ fontFamily: "sans-serif" }}
              variant="h1"
            >
              Concept of{" "}
              <span style={{ color: "#F8C537" }}>Luxury Resort Home</span>{" "}
              invest, enjoy and earn.
            </Typography>
            <Typography color="#fff" variant="h3">
              Tranquility, Serenity and Beauty of nature is KEY to find
              Happiness in LIFE...
            </Typography>

            <Box>
              <Button
                sx={{ borderRadius: "3rem" }}
                startIcon={<ExitToAppIcon />}
                variant="contained"
              >
                Register Now
              </Button>
            </Box>
          </Stack>
        </Grid>

        <Grid item md={6}>
          <Image src={test} alt="test" height={400} width={850} />
        </Grid>
      </Grid>
      {/* intro */}

      {/* about us */}
      <Grid
        container
        px="3rem"
        py="5rem"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item md={6} textAlign="center">
          <Image src={test} alt="test" height={250} width={450} />
        </Grid>

        <Grid item md={6}>
          <Stack spacing={3}>
            <Typography variant="body1">
              Brainwave Realty presents you an irresistible opportunity to
              invest in Luxury Resort Home project by introducing their premium
              infra project My Riveriront, a gated community of 55 fully
              furnished studio apartments and 15 pool villas which are uniquely
              located on the bank of river Ulhas at Village Kondiwade,
              Karjat-Raigad.
            </Typography>

            <Typography variant="body1">
              If you are wondering where to get a fully furnished holiday home
              in the lap of Mather Nature without the hassles of buying a
              litigation free plot and spending your time, energy and money on
              construction then your search ends at My Riverfront. This finest
              upscale project provide you with the experience of premium living
              and luxury holiday combined into one with wide variety of
              amenities that ensures your blissful stay at your very own resort
              home.
            </Typography>

            <Typography variant="body1">
              My Riverfront holiday resort home is not like a thoughtless
              investment deals on second home that many people do as an
              impulsive buying, rather it is a safe and value earning real
              estate investment with high return on investment (ROI) in terms of
              appreciation and assured rental opportunities.
            </Typography>

            <Typography variant="body1">
              Nestled in nature, far from pollution and chaos of city life My
              Riverfront will make you feel relaxed, refreshed and rejuvenated,
              where every breath is pure and reconnecting your soul to nature
              for enriched holistic lifestyle and positive morning vibes. You
              can enjoy sunrise, sunset, mesmerizing 360° view of mountains and
              countryside all from one place.
            </Typography>

            <Typography variant="body1">
              Then what are you waiting for, make a smart choice by investing in
              * A second home that promises to be your first choice ".
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            pt="1rem"
            spacing={3}
          >
            <Stack direction="row" alignItems="center">
              <StarsIcon sx={{ color: "#FCA311", fontSize: "2rem" }} />
              <Typography>55 fully furnished studio apartments</Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              <StarsIcon sx={{ color: "#FCA311", fontSize: "2rem" }} />
              <Typography>15 pool villas</Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              <StarsIcon sx={{ color: "#FCA311", fontSize: "2rem" }} />
              <Typography>Located on the bank of river Ulhas</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      {/* about us */}

      {/* contact us */}
      <Grid
        container
        px="3rem"
        textAlign="center"
        sx={{ background: "#FCA311" }}
      >
        <Grid item md={12} pt="5rem" pb="8rem" textAlign="center">
          <InterpreterModeIcon sx={{ color: "#fff", fontSize: "3rem" }} />
          <Typography variant="h2" pb="1rem" sx={{ color: "#fff" }}>
            Looking for a simple solution contact us now...!!
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-evenly"
            sx={{
              background: "#fff",
              margin: "0rem auto",
              p: "1rem",
              borderRadius: "5rem",
              maxWidth: "60rem",
            }}
          >
            <TextField
              placeholder="Name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "3rem",
                },
              }}
            />

            <TextField
              placeholder="Email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "3rem",
                },
              }}
            />

            <TextField
              placeholder="Phone"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "3rem",
                },
              }}
            />

            <Button
              variant="contained"
              sx={{ background: "#0054FF", borderRadius: "3rem" }}
            >
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>
      {/* contact us */}

      {/* floor plan */}
      <Grid container sx={{ padding: "3rem" }}>
        <Grid item md={12}>
          <Typography variant="h2">Floor Plans</Typography>
        </Grid>
        {floorPlaningData.map((item) => (
          <Grid item md={3}>
            <Paper sx={{ p: 2 }}>
              <Stack direction="row" pt={2} pb={4}>
                <Typography variant="h3">{item.title}</Typography>
              </Stack>

              <Stack spacing={3}>
                <Stack direction="row" alignItems="center">
                  <CircleIcon sx={{ fontSize: "1rem", color: "#FCA311" }} />
                  <Typography variant="body1" pl={2}>
                    {item.pointOne}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center">
                  <CircleIcon sx={{ fontSize: "1rem", color: "#FCA311" }} />
                  <Typography variant="body1" pl={2}>
                    {item.pointTwo}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center">
                  <CircleIcon sx={{ fontSize: "1rem", color: "#FCA311" }} />
                  <Typography variant="body1" pl={2}>
                    {item.pointThree}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center">
                  <CircleIcon sx={{ fontSize: "1rem", color: "#FCA311" }} />
                  <Typography variant="body1" pl={2}>
                    {item.pointFour}
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center">
                  <CircleIcon sx={{ fontSize: "1rem", color: "#FCA311" }} />
                  <Typography variant="body1" pl={2}>
                    {item.pointFive}
                  </Typography>
                </Stack>

                <Button variant="contained">View More</Button>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* floor plan */}
    </>
  );
}
