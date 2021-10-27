import { Container, Grid } from "@mui/material";
import Box from "@material-ui/core/Box";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <Box px={{ xs: 3 }} py={{ xs: 5, sm: 10 }} className="footer">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Link
                  to="home"
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  offset={-110}
                >
                  HOME
                </Link>
              </Box>
              <Box>
                <Link
                  to="services"
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  offset={-110}
                >
                  SERVICES
                </Link>
              </Box>
              <Box>
                <Link
                  to="jobs"
                  smooth={true}
                  style={{ cursor: "pointer" }}
                  offset={-110}
                >
                  EMPLOYMENT
                </Link>
              </Box>
              <Box>
                <Link
                  to="about"
                  smooth={true}
                  offset={-110}
                  style={{ cursor: "pointer" }}
                >
                  ABOUT
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>JOBS</Box>
              <Box>
                <a
                  href="/jobs"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  CURRENT POSITIONS
                </a>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>ACTUAL CHRYSALIS WEBSITE</Box>
              <Box>
                <a
                  href="https://www.gochrysalis.com/home.html"
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                  rel="noreferrer"
                >
                  CHRYSALIS.COM
                </a>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Chrysalis, Inc. All rights reserved. &reg;{" "}
            {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
