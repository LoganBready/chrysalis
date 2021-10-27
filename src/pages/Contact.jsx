import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Masonry from "react-masonry-css";

const Contact = () => {
  const breakpoints = {
    default: 1,
    700: 1,
  };
  return (
    <div className="contact_container" id="contact">
      <Container>
        <Typography align="center" variant="h4" style={{ marginTop: "30px" }}>
          CONTACT US
        </Typography>
        <Typography align="center" variant="h5" style={{ marginTop: "30px" }}>
          Please fill out the form and we'll get back to you as soon as
          possible.
        </Typography>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div className="form_container">
            <div className="form_1">
              <Box component="form" autoComplete="off">
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  className="textFields"
                />
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  className="textFields"
                />
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Subject"
                  variant="standard"
                  className="textFields"
                />
              </Box>
            </div>
            <div className="form_2">
              <TextField
                fullWidth
                label="Type Something..."
                multiline
                rows={7.2}
                variant="standard"
              />
              <Button
                fullWidth
                variant="outlined"
                sx={{ marginTop: "25px", marginBottom: "25px" }}
              >
                Submit
              </Button>
            </div>
          </div>
        </Masonry>
      </Container>
    </div>
  );
};

export default Contact;
