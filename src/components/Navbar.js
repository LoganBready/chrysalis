import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import logo from "../chrysalis.logo.png";
import { makeStyles, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      width: "12rem",
      height: "auto",
      marginBottom: "15px",
      marginTop: "5px",
      marginLeft: "20px",
    },
    appBackground: {
      backgroundColor: "white !important",
    },
    words: {
      letterSpacing: "0.0375rem !important",
      cursor: "pointer",
      marginLeft: "2.5rem !important",
      marginRight: "2.5rem !important",
      "&:hover": {
        borderTop: "3px solid #99cc33",
      },
      "@media(max-width: 1050px)": {
        marginLeft: "1rem !important",
        marginRight: "1rem !important",
      },
      "@media(max-width: 801px)": {
        marginLeft: "0.5rem !important",
        marginRight: "0.5rem !important",
      },
      "@media(max-width: 722px)": {
        display: "none !important",
      },
    },
  };
});

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function Navbar(props) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appBackground} elevation={2}>
        <Toolbar>
          <a href="/" rel="noreferrer">
            <img src={logo} alt="Chrysalis Logo..." className={classes.logo} />
          </a>
          <Typography color="textPrimary" sx={{ flexGrow: 1 }}></Typography>
          <Typography color="textPrimary" className={classes.words}>
            <Link to="home" smooth={true}>
              HOME
            </Link>
          </Typography>
          <Typography color="textPrimary" className={classes.words}>
            <Link to="services" smooth={true}>
              SERVICES
            </Link>
          </Typography>
          <Typography color="textPrimary" className={classes.words}>
            <Link to="jobs" smooth={true} offset={-115}>
              EMPLOYMENT
            </Link>
          </Typography>
          <Typography color="textPrimary" className={classes.words}>
            <Link to="about" smooth={true}>
              ABOUT
            </Link>
          </Typography>

          <Typography color="textPrimary" className={classes.words}>
            <Link to="contact" smooth={true}>
              CONTACT
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
