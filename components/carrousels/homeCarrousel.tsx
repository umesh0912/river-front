import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Stack } from "@mui/system";
import Image from "next/image";


// images
import SlideOne from "../../public/desktop/dummy.jpg"

export default function HomeCarrousel() {
  return (
    <Box sx={{padding:"0rem  "}}  >
      <Stack justifyContent="center" >
        <Carousel

          showStatus={false}
          showArrows={false}
          swipeable={true}
          showThumbs={false}
        >
          {/* Slide one */}
          <Box >
            <Image src={SlideOne} height={500} width="100" alt="image"  />
          </Box>
          {/* Slide one */}

          {/* Slide two */}
          <Box>
            <Image src={SlideOne} height={500} width="100" alt="image"  />
          </Box>

          {/* Slide two */}

          {/* Slide three */}
          <Box>
            <Image src={SlideOne} height={500} width="100" alt="image"  />
          </Box>

          {/* Slide three */}

          {/* Slide Four */}
          <Box>
            <Image src={SlideOne} height={500} width="100" alt="image"  />
          </Box>

          {/* Slide Four */}

          {/* Slide Five */}
          <Box>
          <Image src={SlideOne} height={500} width="100" alt="image"  />
          </Box>

          {/* Slide Five */}
        </Carousel>
      </Stack>
    </Box>
  );
}
