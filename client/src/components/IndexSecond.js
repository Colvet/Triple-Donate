import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

export default function IndexSecond() {
  useEffect(() => {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      offset: 300, // offset (in px) from the original trigger point
      delay: 30, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out",
    });
  }, []);
  return (
    <Box component="section" sx={{ display: "flex", overflow: "hidden", bgcolor: "whitesmoke" }}>
      <Container sx={{ mt: 1, mb: 20, display: "flex", position: "relative", flexDirection: "column", alignItems: "center" }}>
        <Box
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1800"
          data-aos="fade-down"
          component="img"
          src="logo.png"
          alt="curvy lines"
          sx={{ width: 700, height: 650 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box data-aos="zoom-in" sx={item}>
              <Box component="img" src="http://temp20.zsol.co.kr/icon_img/semiconductor.svg" alt="semiconductor" sx={{ height: 55 }} />
              <Typography variant="h5" sx={{ my: 5, fontWeight: 600 }}>
                ?????? ?????? ????????????
              </Typography>
              <Typography variant="p" sx={{ fontSize: "20px", fontWeight: 400 }}>
                {"??? ?????? ????????? ?????? ??????????????? ????????? ??? ????????????"} <br /> {"?????? ?????? ????????? ???????????????  "} <br /> {" ??????????????? ????????? ???????????????!"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box data-aos="zoom-in" sx={item}>
              <Box component="img" src="http://temp20.zsol.co.kr/icon_img/resume03.svg" alt="resume" sx={{ height: 55 }} />
              <Typography variant="h5" sx={{ my: 5, fontWeight: 600 }}>
                ????????? ?????????
              </Typography>
              <Typography variant="h5" sx={{ mb: 0.3, fontSize: "20px", fontWeight: 400 }}>
                {"????????? ??????????????? ?????????"} <br /> {" ???????????? ???????????????! "} <br /> {" ????????? ???????????? ???????????????"} <br /> {" ????????? ?????? ????????? ???????????? "}
                <br />
                {" ?????? ??? ????????????! "}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box data-aos="zoom-in" sx={item}>
              <Box component="img" src="http://temp20.zsol.co.kr/icon_img/care.svg" alt="care" sx={{ height: 55 }} />
              <Typography variant="h5" sx={{ my: 5, fontWeight: 600 }}>
                ????????? NFT??? ?????? ??????
              </Typography>
              <Typography variant="h5" sx={{ mb: 0.3, fontSize: "20px", fontWeight: 400 }}>
                {"???????????? ????????? ??? ????????? ?????? ????????? ?????? ??? ????????????"} <br /> {"????????? ????????? ???????????? ????????? ????????? ?????? ??? ?????? ????????? ??? ????????????."}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
