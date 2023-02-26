import { Box, Grid } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Typography from "@mui/material/Typography";

// images
import ReactangleOne from "../../public/rectangleOne.svg";
import SlideOne from "../../public/mobile/slideOne.jpeg";
import { Stack } from "@mui/system";

export default function AboutUsView() {
  return (
    <>
      <Grid container px="9rem">
        <Grid item xs={12} pt={3}>
          <Image height={10} width={68} alt="reactangle" src={ReactangleOne} />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h4" pt={3}>
            Concept of{" "}
            <span style={{ color: "#FCA311" }}> Luxury Resort Home invest</span>
            , enjoy and earn
          </Typography>
          <Stack pt={3} direction="column" spacing={3}>
            <Typography>
              Brainwave Realty presents you an irresistible opportunity to
              invest in Luxury Resort Home project by introducing their premium
              infra project My Riverfront, a gated community of 55 fully
              furnished studio apartments and 15 pool villas which are uniquely
              located on the bank of river Ulhas at Village Kondiwade,
              Karjat-Raigad.
            </Typography>
            <Typography>
              If you are wondering where to get a fully furnished holiday home
              in the lap of Mother Nature without the hassles of buying a
              litigation free plot and spending your time, energy and money on
              construction then your search ends at My Riverfront. This finest
              upscale project provide you with the experience of premium living
              and luxury holiday combined into one with wide variety of
              amenities that ensures your blissful stay at your very own resort
              home.
            </Typography>
            <Typography>
              My Riverfront holiday resort home is not like a thoughtless
              investment deals on second home that many people do as an
              impulsive buying, rather it is a safe and value earning real
              estate investment with high return on investment (ROI) in terms of
              appreciation and assured rental opportunities. Nestled in nature,
              far from pollution and chaos of city life My Riverfront will make
              you feel relaxed, refreshed and rejuvenated, where every breath is
              pure and reconnecting your soul to nature for enriched holistic
              lifestyle and positive morning vibes. You can enjoy sunrise,
              sunset, mesmerizing 360° view of mountains and countryside all
              from one place.
            </Typography>
            <Typography>
              Then what are you waiting for, make a smart choice by investing in
              "A second home that promises to be your first choice ".
            </Typography>
          </Stack>
        </Grid>

        <Grid item md={6}>
          <Box textAlign="right" py={8}>
            <Image src={SlideOne} height={500} width={520} alt="image" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
