import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import team from "../images/teamwork.jpg";

const Employement = () => {
  return (
    <>
      <div style={{ marginTop: "50px" }} id="jobs">
        <Typography align="center" variant="h4">
          EMPLOYMENT
        </Typography>
      </div>
      <div className="containersDiv">
        <Container>
          <Typography variant="h5">Why Work at Chrysalis</Typography>
          <br />
          <Typography>
            Chrysalis is a team of people caring for and about people. While
            there are sure to be frustrating days it is all worth it because we
            are serving others and making the world better. There are not many
            jobs where you can truly say you are needed and that you are making
            a difference. Chrysalis supports its team members and works really
            hard to recognize each team member's contributions.
            <br />
            <br />
            Chrysalis also offers a very competitive Benefits Package to full
            time employees. Not only do we offer health insurance we have
            created special online trainings that you can go through to
            understand your benefits better. After all, it is not a benefit
            unless you know how to use it.
          </Typography>
          <br />
          <Typography variant="h5">Join our Team</Typography>
          <br />
          <Typography>
            Chrysalis is a team of over one thousand employees who are working
            together to make a difference in the lives of people with
            intellectual and developmental disabilities. We are looking for
            people who care. People with a good attitude that are willing to
            give themselves to helping others. At Chrysalis we are all mentors,
            teachers, and friends. Our core values are Safety, Respect,
            Mentoring, Accountability, and of course Fun! Join our team and get
            paid to Make a Difference Daily!
          </Typography>
          <br />
          <Typography variant="h5">Available Positions</Typography>
          <br />
          <Typography variant="body1">
            Chrysalis has multiple positions in the home and community.
            Including Direct Support Staff, Managers that work with the
            individuals in their homes as well as lead a team of Direct Support
            Staff in caring for the individuals. Chrysalis Day Program staff
            that operate during the day, Monday through Friday.
            <br />
            <br />
            <Button
              variant="contained"
              fullWidth
              className="jobsBtn"
              href="/jobs"
            >
              CURRENT AVAILABILITIES
            </Button>
          </Typography>
        </Container>
        <div className="hehehaha">
          <img src={team} className="employImg" />
        </div>
      </div>
    </>
  );
};

export default Employement;
