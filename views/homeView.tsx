import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import react, { useState } from "react";

// icons
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import StarsIcon from "@mui/icons-material/Stars";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";

// images
import test from "../public/images/slideTwo.jpeg";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import {
  Alert,
  Backdrop,
  Fade,
  IconButton,
  Modal,
  Snackbar,
} from "@mui/material";
import Gym from "../public/images/gym.svg";
import Libary from "../public/images/libary.svg";
import ClubHouse from "../public/images/clubHouse.svg";
import Bar from "../public/images/bar.svg";
import RiverSide from "../public/images/riverSide.svg";
import CCTV from "../public/images/cctv.svg";
import Jogging from "../public/images/jogging.svg";
import KidsPlayArea from "../public/images/kidsPlayArea.svg";
import PartyLawns from "../public/images/partyLawns.svg";
import SeatOutArea from "../public/images/seatOutArea.svg";
import Meditation from "../public/images/meditation.svg";
import Yoga from "../public/images/yoga.svg";
import Bonfire from "../public/images/bonfire.svg";
import Camping from "../public/images/camping.svg";
import StarGazing from "../public/images/starGazing.svg";
import Music from "../public/images/music.svg";
import CloseIcon from "@mui/icons-material/Close";
import BrandLogo from "../public/images/brandLogo.png";
import AboutUs from "../public/images/aboutUs.jpg";
import MyRiver from "../public/images/MyRiver.jpg";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const style2 = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
      link: <Image src={test} height={200} width={400} alt="floorPLan" layout='responsive'/>,
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
      link: <Image src={test} height={200} width={400} alt="floorPLan" layout='responsive'/>,
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
      link: <Image src={test} height={200} width={400} alt="floorPLan" layout='responsive'/>,
    },
    {
      id: 4,
      title: "Studio Apartment Amenities",
      floorPlanType: "1 RK",
      pointOne: "Branded Fully Automatic Lift",
      pointTwo: "Overhead and Underground tanks",
      pointThree: "Landscaped Garden with Fountain & Water Bodie",
      pointFour: "Fully Furnished Studio Furniture & Gadgets",
      pointFive: "Open parking",
      link: <Image src={test} height={200} width={400} alt="floorPLan" layout='responsive'/>,
    },
  ];

  const amenitiesData = [
    {
      id: 1,
      title: "Fully Equipped Gymnasium",
      icon: <Image src={Gym} height={120} width={120} alt="gym" />,
    },
    {
      id: 2,
      title: "Open Library",
      icon: <Image src={Libary} height={120} width={120} alt="gym" />,
    },

    {
      id: 4,
      title: "Clubhouse with Indoor Games",
      icon: <Image src={ClubHouse} height={120} width={120} alt="gym" />,
    },
    {
      id: 5,
      title: "Cafeteria and Multi Cuisine Restaurant and Bar",
      icon: <Image src={Bar} height={120} width={120} alt="gym" />,
    },
    {
      id: 5,
      title: "River Side Dining",
      icon: <Image src={RiverSide} height={120} width={120} alt="gym" />,
    },

    {
      id: 6,
      title: "CCTV Cameras and 24 X 7 Security at Main Gate",
      icon: <Image src={CCTV} height={120} width={120} alt="gym" />,
    },
    {
      id: 7,
      title: "Jogging, Walking and Cycling Track",
      icon: <Image src={Jogging} height={120} width={120} alt="gym" />,
    },

    {
      id: 11,
      title: "Party Lawns",
      icon: <Image src={PartyLawns} height={120} width={120} alt="gym" />,
    },
    {
      id: 12,
      title: "Children Play Area",
      icon: <Image src={KidsPlayArea} height={120} width={120} alt="gym" />,
    },
    {
      id: 13,
      title: "Fountain with Seat Out Area",
      icon: <Image src={SeatOutArea} height={120} width={120} alt="gym" />,
    },
    {
      id: 20,
      title: "Camping Site for Tents",
      icon: <Image src={Camping} height={120} width={120} alt="gym" />,
    },
    {
      id: 21,
      title: "Star Gazing Area",
      icon: <Image src={StarGazing} height={120} width={120} alt="gym" />,
    },
    {
      id: 22,
      title: "Meditation Deck",
      icon: <Image src={Meditation} height={120} width={120} alt="gym" />,
    },
    {
      id: 23,
      title: "Yoga Lawns",
      icon: <Image src={Yoga} height={120} width={120} alt="gym" />,
    },
    {
      id: 25,
      title: "Bonfire Area",
      icon: <Image src={Bonfire} height={120} width={120} alt="gym" />,
    },
    {
      id: 30,
      title: "Music Room",
      icon: <Image src={Music} height={120} width={120} alt="gym" />,
    },
  ];
  const [open, setOpen] = useState(false);
  const [openEnquiryForm, setOpenEnquiryForm] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEnquiryForm = () => setOpenEnquiryForm(true);
  const handleCloseEnquiryForm = () => setOpenEnquiryForm(false);
  const onSubmitClick = () => {
    setOpenToast(true);
  };

  const handleCloseToast = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenToast(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseToast}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      {/* intro */}
      <Grid
        className="introBackground"
        py="8rem"
        container
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: { md: "3rem", xs: "1rem" },
        }}
      >
        <Grid item md={6} xs={12}>
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
                onClick={handleOpenEnquiryForm}
                sx={{ borderRadius: "3rem" }}
                startIcon={<ExitToAppIcon />}
                variant="contained"
              >
                Register Now
              </Button>
            </Box>
          </Stack>
        </Grid>

        <Grid item md={6} xs={12} sx={{paddingTop:{xs:"1rem"}}} >
          <Image src={MyRiver} alt="test" height={400} width={850} layout='responsive'/>
        </Grid>
      </Grid>
      {/* intro */}

      {/* about us */}
      <Grid
        container
        pb="5rem"
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: { md: "3rem", xs: "1rem" },
        }}
      >
        <Grid item md={12} xs={12}>
          <Typography
            className="title"
            variant="h1"
            textAlign="center"
            py="2rem"
          >
            About Us
          </Typography>
        </Grid>
        <Grid item md={6} xs={12} textAlign="center">
          <Box>
            <Image src={AboutUs} alt="test" layout='responsive'/>
          </Box>
        </Grid>

        <Grid item md={6} p={2}>
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
        textAlign="center"
        sx={{ background: "#FCA311", paddingX: { md: "3rem", xs: "1rem" } }}
      >
        <Grid item md={12} xs={12}>
          <Typography
            className="title"
            py="2rem"
            variant="h1"
            textAlign="center"
          >
            Contact Us
          </Typography>
        </Grid>
        <Grid item md={12} xs={12} pb="8rem" textAlign="center">
          <InterpreterModeIcon sx={{ color: "#fff", fontSize: "3rem" }} />
          <Typography variant="h2" pb="1rem" sx={{ color: "#fff" }}>
            Looking for a simple solution contact us now...!!
          </Typography>

          <Stack
            spacing={3}
            direction={{ md: "row", xs: "column" }}
            justifyContent="space-evenly"
            sx={{
              background: "#fff",
              margin: "0rem auto",
              p: "1rem",
              borderRadius: "2rem",
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
              onClick={onSubmitClick}
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
      <Grid container spacing={3} sx={{ paddingX: { md: "3rem", xs: "1rem" } }}>
        <Grid item md={12} xs={12}>
          <Typography
            className="title"
            variant="h1"
            textAlign="center"
            py="2rem"
          >
            Floor Plans
          </Typography>
        </Grid>
        {floorPlaningData.map((item) => (
          <Grid item md={3} xs={12}>
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

                <Button variant="contained" onClick={handleOpen}>
                  View More
                </Button>
              </Stack>
            </Paper>
          </Grid>
        ))}

        {floorPlaningData.map((item) => (
          <Box>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                backdrop: {
                  timeout: 500,
                },
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Box sx={{ textAlign: "center" }}>{item.link}</Box>
                </Box>
              </Fade>
            </Modal>
          </Box>
        ))}
      </Grid>
      {/* floor plan */}

      {/* amenities */}
      <Grid container sx={{ paddingX: { md: "3rem", xs: "1rem" } }} spacing={5}>
        <Grid item md={12} xs={12}>
          <Typography
            className="title"
            py="2rem"
            variant="h1"
            textAlign="center"
          >
            Amenities
          </Typography>
        </Grid>
        {amenitiesData.map((item) => (
          <Grid item md={2} xs={12} textAlign="center">
            <Stack direction="column">
              <Box>{item.icon}</Box>
              <Typography variant="h4">{item.title}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      {/* amenities */}

      {/* image gallery */}
      <Grid container sx={{ paddingX: { md: "3rem", xs: "1rem" } }}>
        <Grid item md={12} xs={12}>
          <Typography
            className="title"
            py="2rem"
            variant="h1"
            textAlign="center"
          >
            Gallery
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Image src={test} alt="test" height={200} width={400} layout='responsive'/>
        </Grid>

        <Grid item md={3}>
          <Image src={test} alt="test" height={200} width={400} layout='responsive'/>
        </Grid>

        <Grid item md={3}>
          <Image src={test} alt="test" height={200} width={400} layout='responsive'/>
        </Grid>

        <Grid item md={3}>
          <Image src={test} alt="test" height={200} width={400} layout='responsive'/>
        </Grid>
      </Grid>
      {/* image gallery */}

      {/* footer */}
      <Grid container py="5rem" textAlign="center">
        <Grid item md={12} sx={{ paddingX: { md: "10rem" } }}>
          <Typography variant="h2">A Project By</Typography>
          <Image src={BrandLogo} height={200} width={250} alt="brandLogo"/>
          <Typography variant="h4">
            Site Address : S. No. 14/5/A, Kondewade, Karjat, Pin - 410201, Tal.
            Karjat, Dist. Raigad Office Add.: 102, B - Wing, Motibhai Tower,
            Opp. Railway Station, Badlapur (W) 421 503 Branch Off.: Unit 4, Plot
            No, 16, Sector - 12, Matheran Road, New Panvel, Mumbai - 410 206.
          </Typography>

          <Typography variant="h3" pt={5}>
            Call : 9527 560 560 | 985017 1010 | 9011 009 613
          </Typography>

          <Stack direction="row" justifyContent="space-evenly" pt={8}>
            <Stack direction="column">
              <Typography variant="h4">Architect</Typography>
              <Typography variant="h3">Brahma Chaitanya Enterprises</Typography>
              <Typography variant="h4">Karjat</Typography>
            </Stack>

            
            <Stack direction="column">
              <Typography variant="h4">RCC Consultan</Typography>
              <Typography variant="h3">Saad Consultant</Typography>
              <Typography variant="h4">Badlapur</Typography>
            </Stack>

            <Stack direction="column">
              <Typography variant="h4">Legal Advisor</Typography>
              <Typography variant="h3">Adv. Devendra Nath Joshi</Typography>
              <Typography variant="h4">Badlapur</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      {/* footer */}

      {/* registration Modal */}
      <Modal
        open={openEnquiryForm}
        onClose={handleCloseEnquiryForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2} textAlign="center">
          <Typography variant="h3" py="2rem">
            Register Now
          </Typography>

          <Stack direction="column" spacing={5}>
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

            <Box>
              <Button
                onClick={onSubmitClick}
                variant="contained"
                sx={{ background: "#0054FF", borderRadius: "3rem" }}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
      {/* registration Modal */}

      <Snackbar
        open={openToast}
        autoHideDuration={1000}
        message="Your request has been sent to our team."
        action={action}
      ></Snackbar>
    </>
  );
}
