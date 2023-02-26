import * as React from "react";
import { Tab, Tabs, Box, Typography, Grid, Stack, Button } from "@mui/material";
import Image from "next/image";
import SlideOne from "../../public/mobile/slideOne.jpeg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function GalleryView() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid pt={5} container px="9rem" spacing={5}>
        <Grid xs={12} textAlign="center">
          <Typography variant="h4" textAlign="center" pt={5}>
            Gallery
          </Typography>
        </Grid>

        <Grid xs={12} pt={5}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                centered
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Smart 3BHK" {...a11yProps(0)} />
                <Tab label="Smart 2BHK" {...a11yProps(1)} />
                <Tab label="Apartments" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Grid container spacing={3}>
                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Grid container spacing={3}>
                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={2}>
              <Grid container spacing={3}>
                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>

                <Grid item lg={4}>
                  <Stack>
                    <Box>
                      <Image
                        src={SlideOne}
                        height={400}
                        width={420}
                        alt="image"
                      />
                    </Box>
                    <Box></Box>
                  </Stack>
                </Grid>
              </Grid>
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
