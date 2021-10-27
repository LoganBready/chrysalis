import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavbarC from "../components/Navbar";
import JobCard from "../components/JobCard";
import Masonry from "react-masonry-css";
import ScheduleIcon from "@mui/icons-material/Schedule";
import FlareIcon from "@mui/icons-material/Flare";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FastForwardIcon from "@mui/icons-material/FastForward";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CheckIcon from "@mui/icons-material/Check";
import Footer from "../components/Footer";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
    console.log(jobs);
  }, []);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  const breakpoints2 = {
    default: 2,
    700: 1,
  };

  return (
    <>
      <NavbarC />
      <div style={{ marginTop: "80px" }}>
        <Typography variant="h4" align="center">
          EXPLORE THE POSSIBILITIES AT CHRYSALIS
        </Typography>
      </div>
      <Container>
        <Typography align="center" sx={{ marginTop: "25px" }}>
          Chrysalis is a team of people caring for and about people. While there
          are sure to be frustrating days it is all worth it because we are
          serving others and making the world better. There are not many jobs
          where you can truly say you are needed and that you are making a
          difference. Chrysalis supports its team members and works really hard
          to recognize each team member's contributions. <br />
          Chrysalis is a team of over one thousand employees who are working
          together to make a difference in the lives of people with intellectual
          and developmental disabilities. We are looking for people who care.
          People with a good attitude that are willing to give themselves to
          helping others. At Chrysalis we are all mentors, teachers, and
          friends. Our core values are Safety, Respect, Mentoring,
          Accountability, and of course Fun! Join our team and get paid to Make
          a Difference Daily!
        </Typography>
      </Container>
      <div className="benfits">
        <Typography variant="h4">COMPETITIVE BENEFITS</Typography>
      </div>
      <Container sx={{ marginTop: "45px" }}>
        <Masonry
          breakpointCols={breakpoints2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div>
            <Typography align="center">
              <FlareIcon />
              PAID HOLIDAYS
            </Typography>
            <div className="textColorBorderHoliday"></div>
          </div>
          <div>
            <Typography align="center">
              <ScheduleIcon />
              FLEXIBLE SCHEDULE
            </Typography>
            <div className="textColorBorder"></div>
          </div>
          <div>
            <Typography align="center">
              <AttachMoneyIcon />
              RETIREMENT PLANS
            </Typography>
            <div className="textColorBorderRetire"></div>
          </div>
          <div>
            <Typography align="center">
              <FastForwardIcon />
              CAREER ADVANCEMENT
            </Typography>
            <div className="textColorBorder"></div>
          </div>
          <div>
            <Typography align="center">
              <WbSunnyIcon />
              VACATION, SICK, PTO ACCRUAL
            </Typography>
            <div className="textColorBorderVacay"></div>
          </div>
          <div>
            <Typography align="center">
              <DirectionsWalkIcon />
              CASUAL WORK ENVIRONMENT
            </Typography>
            <div className="textColorBorderCasual"></div>
          </div>
          <div>
            <Typography align="center">
              <HealthAndSafetyIcon />
              HEALTH, DENTAL AND VISION PLAN
            </Typography>
            <div className="textColorBorderHealth"></div>
          </div>
          <div>
            <Typography align="center">
              <CheckIcon />
              MUCH MORE
            </Typography>
            <div className="textColorBorderMore"></div>
          </div>
        </Masonry>
      </Container>
      <Container sx={{ marginTop: "60px" }}>
        <Typography variant="h5" color="textPrimary">
          Showing 25 of 25 jobs
        </Typography>

        <br />
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {jobs.map((jobs) => (
            <div key={jobs.id}>
              <JobCard jobs={jobs} />
            </div>
          ))}
        </Masonry>
      </Container>
      <Footer />
    </>
  );
};

export default Jobs;
