import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Popup from "reactjs-popup";

const JobCard = ({ jobs }) => {
  return (
    <div>
      <Popup
        trigger={
          <Card elevation={2} style={{ height: "100px", cursor: "pointer" }}>
            <Container>
              <br />
              <Typography color="textPrimary">{jobs.jobTitle}</Typography>
              <br />
              <Typography color="textPrimary">{jobs.location}, UT</Typography>
            </Container>
          </Card>
        }
        modal
        nested
      >
        <Card
          elevation={2}
          sx={{
            overflow: "auto !important",
            maxHeight: "75vh",
            width: "auto",
            maxWidth: "768px",
          }}
        >
          <CardContent>
            <Typography>Chrysalis Utah, LLC</Typography>
            <Typography variant="h5" color="textPrimary">
              {jobs.jobTitle} - {jobs.location}, UT
            </Typography>
            <Typography>Schedule: {jobs.hours}</Typography>
            <br />
            <Typography variant="h6">{jobs.jobTitle} description...</Typography>

            <Typography>{jobs.description}</Typography>
            <br />
            <Typography variant="h6">{jobs.jobTitle} duties...</Typography>
            <Typography>
              <ul>
                {jobs.duties.map((dutie, index) => (
                  <li>{dutie}</li>
                ))}
              </ul>
            </Typography>
            <br />
            <Typography variant="h6">
              {jobs.jobTitle} Qualifications...
            </Typography>
            <Typography>
              <ul>
                {jobs.qualifications.map((qualification, index) => (
                  <li key={jobs.id}>{qualification}</li>
                ))}
              </ul>
            </Typography>
            <br />
            <Typography>{jobs.payDescription}</Typography>
            <br />
            <Button variant="contained" className="jobsBtn" fullWidth>
              APPLY
            </Button>
          </CardContent>
        </Card>
      </Popup>
    </div>
  );
};

export default JobCard;
