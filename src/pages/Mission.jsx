import {
  Tab,
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import React, { useState } from "react";

import autism from "../images/autism.jpg";
import logo from "../chrysalis.logo.png";
import Masonry from "react-masonry-css";
import marc from "../images/marc220px.jpg";
import rich from "../images/rich220px.jpg";
import troy from "../images/troy220px.jpg";
import shawnee from "../images/shawnee220px.jpg";
import chris from "../images/chrish220px.jpg";
import tyler from "../images/tylers220px.jpg";
import Popup from "reactjs-popup";

const Mission = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const breakpoints = {
    default: 2,
    1000: 1,
  };
  return (
    <div style={{ backgroundColor: "#f4f4f4" }} id="about">
      <Box sx={{ width: "100%", typography: "body1", marginTop: "50px" }}>
        <div className="">
          <p style={{ color: "#f4f4f4" }}> asdf</p>
        </div>
        <Typography
          variant="h4"
          align="center"
          style={{ marginTop: "25px" }}
          gutterBottom
        >
          ABOUT
        </Typography>
        <TabContext value={value}>
          <Box className="missionBox">
            <TabList
              onChange={handleChange}
              aria-label="Something"
              centered
              textColor="primary"
            >
              <Tab label="Mission" value="1" />
              <Tab label="History" value="2" />
              <Tab label="Team" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Container>
              <div className="missionPhotoContainer">
                <img
                  src={autism}
                  alt="Smiling young man..."
                  className="missionPhoto"
                />
              </div>
              <Typography
                variant="h5"
                gutterBottom
                style={{ marginTop: "15px" }}
              >
                Our Culture
              </Typography>

              <Typography gutterBottom>
                We are People Caring for and About People. We are a team devoted
                to serving others. We are transcenders, we triumph over the
                negative and constantly push beyond the limits. We love our work
                because we are making a difference every day. We push the bounds
                in constant improvement because it matters. We have a cause, it
                is noble, and our time and efforts change lives. It is not easy,
                but it is worth it. We are Chrysalis.
              </Typography>
              <Typography variant="h5">Our Mission</Typography>
              <Typography gutterBottom style={{ marginTop: "15px" }}>
                To make a difference daily by providing support and
                opportunities for individuals with disabilities to live, work,
                and participate more fully in the community.
              </Typography>
              <Typography variant="h5" gutterBottom>
                Our Values
              </Typography>

              <Typography gutterBottom style={{ marginTop: "15px" }}>
                <ul>
                  <li>Fun</li>
                  <li>Safety</li>
                  <li>Respect</li>
                  <li>Mentoring</li>
                  <li>Accountability</li>
                </ul>
              </Typography>
            </Container>
          </TabPanel>
          <TabPanel value="2">
            <Container>
              <div
                className="missionPhotoContainer"
                style={{ marginTop: "40px" }}
              >
                <img src={logo} alt="chrysalis logo..." />
              </div>
              <Typography
                variant="h5"
                style={{ marginTop: "40px" }}
                gutterBottom
              >
                History
              </Typography>
              <Typography gutterBottom variant="body1">
                Chrysalis was established in Heber City, Utah in 1985.
                Initially, the company was developed as a Sheltered Workshop
                that served the needs of 14 people.
              </Typography>
              <Typography gutterBottom variant="body1">
                In 1987, the Company expanded its services by creating an
                eight-bed group home located in Midway, Utah. this group home
                marked the beginning of the residential services provided by
                Chrysalis.
              </Typography>
              <Typography gutterBottom variant="body1">
                Since that time, Chrysalis has continued to expand its services
                by establishing three and four bed homes, in a variety of
                locations throughout Utah, and Nevada. Chrysalis has grown from
                serving 14 individuals in 1985 to serving over 500 individuals
                with well over 1,500 employees.
              </Typography>
              <Typography gutterBottom variant="body1">
                Chrysalis contracts with various state agencies in and outside
                of Utah and Nevada as well as private paying families. Chrysalis
                has a long history and has demonstrated the ability to meet the
                needs of people with disabilities by providing quality services.
              </Typography>
            </Container>
          </TabPanel>
          <TabPanel value="3">
            <Container>
              <Typography align="center" variant="h4" gutterBottom>
                Management Team
              </Typography>
              <Typography
                gutterBottom
                style={{ fontSize: "20px" }}
                gutterBottom
              >
                We have an exceptional management team! Each team member has
                worked directly with the individuals Chrysalis supports. Each
                member understands the importance of the service, quality, and
                commitment at every level. When a decision is made it is made
                keeping the most important element of that decision in focus,
                the individual.
              </Typography>
              <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                align="center"
                style={{ marginTop: "30px" }}
              >
                <Popup
                  trigger={
                    <Card
                      elevation={2}
                      style={{ cursor: "pointer", width: "450px" }}
                    >
                      <Container style={{ display: "flex" }}>
                        <div className="one">
                          <img src={marc} alt="Marc Christensen..." />
                        </div>
                        <div
                          className="two"
                          style={{
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography style={{ marginTop: "20px" }}>
                            Marc Christensen
                          </Typography>
                          <Typography>Chief Executive Officer</Typography>
                        </div>
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
                      maxWidth: "50vw",
                    }}
                  >
                    <Container>
                      <Typography align="center" variant="h5">
                        Marc Christensen - Chief Executive Officer
                      </Typography>
                      <CardContent style={{ display: "flex" }}>
                        <div className="one">
                          <img src={marc} alt="Marc Christensen..." />
                        </div>
                        <div className="two">
                          <Typography color="primary" gutterBottom>
                            Marc has been making a difference since 1992.
                          </Typography>
                          <Typography>
                            Marc Christensen is the CEO for Chrysalis and has
                            been leading the organization for over 25 years.
                            Marc began working as a Direct Support Professional
                            in 1992 as a summer job, loved it and has never left
                            the field of supporting people. Delivering quality
                            services is his passion and continually finding ways
                            to improve the lives of the people Chrysalis
                            supports is his purpose. Marc received a Bachelors
                            degree from Brigham Young University and a Masters
                            in Mental Health Counseling. He enjoys spending time
                            with his 4 children and getting lost in the
                            mountains with his wife, 2 dogs and their Jeep.
                          </Typography>
                        </div>
                      </CardContent>
                    </Container>
                  </Card>
                </Popup>
                <Popup
                  trigger={
                    <Card
                      elevation={2}
                      style={{ cursor: "pointer", width: "450px" }}
                    >
                      <Container style={{ display: "flex" }}>
                        <div className="one">
                          <img src={troy} alt="Troy Friden..." />
                        </div>
                        <div
                          className="two"
                          style={{
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography style={{ marginTop: "20px" }}>
                            Troy Friden
                          </Typography>
                          <Typography>Chief Operations Officer</Typography>
                        </div>
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
                      maxWidth: "50vw",
                    }}
                  >
                    <Container>
                      <Typography align="center" variant="h5">
                        Troy Friden - Chief Operations Officer
                      </Typography>
                      <CardContent style={{ display: "flex" }}>
                        <div className="one">
                          <img src={troy} alt="Troy Friden..." />
                        </div>
                        <div className="two">
                          <Typography color="primary" gutterBottom>
                            Troy has been with Chrysalis since 2002
                          </Typography>
                          <Typography>
                            Troy began working at Chrysalis in 2002 as a Direct
                            Support Professional after hearing about the job
                            from a family member. He felt the joy and
                            satisfaction that comes with working with people in
                            this field and decided to turn this job into a
                            career. In the ensuing years, Troy worked in many
                            capacities and positions throughout our Northern
                            Utah and Northern Nevada programs. He has been the
                            COO at Chrysalis since 2018. Troy earned his
                            Bachelors degree in Psychology from BYU. He is
                            married with four kids: two girls and two boys, and
                            loves spending time with his family.
                          </Typography>
                        </div>
                      </CardContent>
                    </Container>
                  </Card>
                </Popup>
                <Popup
                  trigger={
                    <Card
                      elevation={2}
                      style={{ cursor: "pointer", width: "450px" }}
                    >
                      <Container style={{ display: "flex" }}>
                        <div className="one">
                          <img src={rich} alt="Rich Slack..." />
                        </div>
                        <div
                          className="two"
                          style={{
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Typography
                            align="center"
                            style={{ marginTop: "20px" }}
                          >
                            Rich Slack
                          </Typography>
                          <Typography align="center">President</Typography>
                        </div>
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
                      maxWidth: "50vw",
                    }}
                  >
                    <Container>
                      <Typography align="center" variant="h5">
                        Rich Slack - President
                      </Typography>
                      <CardContent style={{ display: "flex" }}>
                        <div className="one">
                          <img src={rich} alt="Rich Slack..." />
                        </div>
                        <div className="two">
                          <Typography color="primary" gutterBottom>
                            Rich has been with Chrysalis since 2002
                          </Typography>
                          <Typography>
                            Rich started working part-time at Chrysalis in 2002
                            while working on his MBA . Rich's first task was
                            creating a Policy and Procedure manual for the
                            company. In 2005, he became Chrysalis' Chief
                            Financial and Marketing Officer.
                            <br /> Rich's education includes a Bachelor's Degree
                            with an emphasis in Constitutional Law and Criminal
                            Justice and a Masters of Business Administration
                            from Southern Utah University. While at SUU, Rich
                            played Outside Linebacker for the football team.
                            Rich is married and has 2 boys and two girls. Rich
                            is a private pilot and enjoys the learning
                            experiences and challenges that flying entails.
                          </Typography>
                        </div>
                      </CardContent>
                    </Container>
                  </Card>
                </Popup>
                <Popup
                  trigger={
                    <Card
                      elevation={2}
                      style={{ cursor: "pointer", width: "450px" }}
                    >
                      <Container style={{ display: "flex" }}>
                        <div className="one">
                          <img src={shawnee} alt="Shawnee Collins..." />
                        </div>
                        <div
                          className="two"
                          style={{
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography style={{ marginTop: "20px" }}>
                            Shawnee Collins
                          </Typography>
                          <Typography>
                            Chief Clinical Officer of Behavior Analysts
                          </Typography>
                        </div>
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
                      maxWidth: "50vw",
                    }}
                  >
                    <Container>
                      <Typography align="center" variant="h5">
                        Shawnee Collins - Chief Clinical Officer of Behavior
                        Analysts
                      </Typography>
                      <CardContent style={{ display: "flex" }}>
                        <div className="one">
                          <img src={shawnee} alt="Shawnee Collins..." />
                        </div>
                        <div className="two">
                          <Typography color="primary" gutterBottom>
                            Shawnee has been with Chrysalis since 1999.
                          </Typography>
                          <Typography>
                            Shawnee received her Ph.D. in Disability Disciplines
                            with emphases in Applied Behavior Analysis and
                            Disability Studies at Utah State University. She
                            completed her Master of Social Work at the
                            University of Utah and her Bachelor of Science at
                            Brigham Young University. Her dissertation focused
                            on increasing treatment integrity in community
                            settings using video modeling. Her current research
                            interests include staff training and supervision.
                            Shawnee's research is published in the Journal of
                            Applied Behavior Analysis, Behavior Analysis in
                            Practice, Research in Developmental Disabilities,
                            and Rural Special Education Quarterly. In addition,
                            she has presented at several local, state, and
                            national conferences.
                          </Typography>
                        </div>
                      </CardContent>
                    </Container>
                  </Card>
                </Popup>
                <Popup
                  trigger={
                    <Card
                      elevation={2}
                      style={{ cursor: "pointer", width: "450px" }}
                    >
                      <Container style={{ display: "flex" }}>
                        <div className="one">
                          <img src={chris} alt="Chris Hansen..." />
                        </div>
                        <div
                          className="two"
                          style={{
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography style={{ marginTop: "20px" }}>
                            Chris Hansen
                          </Typography>
                          <Typography>Human Resources Director</Typography>
                        </div>
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
                      maxWidth: "50vw",
                    }}
                  >
                    <Container>
                      <Typography align="center" variant="h5">
                        Chris Hansen - Human Resources Director
                      </Typography>
                      <CardContent style={{ display: "flex" }}>
                        <div className="one">
                          <img src={chris} alt="chris hansen..." />
                        </div>
                        <div className="two">
                          <Typography color="primary" gutterBottom>
                            Chris has been with Chrysalis since 1995.
                          </Typography>
                          <Typography>
                            Chris started with Chrysalis as a Direct Support
                            Professional after 5 years with another provider.
                            Early on he became a firm believer in the change
                            that Chrysalis can make in people's lives. He takes
                            "Making a Difference Daily" seriously which is why
                            he has worked here continuously for almost 25 years.
                            Chris is a member of the Society of Human Resource
                            Management (SHRM) and is certified with the PHR and
                            SHRM-CP. He has served as the president for the
                            local SHRM chapter and is a member of the Utah SHRM
                            board of directors. Chris has an Associates in
                            Psychology and a Bachelors in Business Management.
                            He has been an avid Scouter throughout his life. He
                            loves spending time in the outdoors and in quilt
                            shops with his amazing wife Donna. They have 3 sons
                            and a basset hound named Rocky.
                          </Typography>
                        </div>
                      </CardContent>
                    </Container>
                  </Card>
                </Popup>
                <Popup
                  trigger={
                    <Card
                      elevation={2}
                      style={{ cursor: "pointer", width: "450px" }}
                    >
                      <Container style={{ display: "flex" }}>
                        <div className="one">
                          <img src={tyler} alt="Tyler Slack..." />
                        </div>
                        <div
                          className="two"
                          style={{
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Typography style={{ marginTop: "20px" }}>
                            Tyler Slack
                          </Typography>
                          <Typography>IT Director</Typography>
                        </div>
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
                      maxWidth: "50vw",
                    }}
                  >
                    <Container>
                      <Typography align="center" variant="h5">
                        Tyler Slack - IT Director
                      </Typography>
                      <CardContent style={{ display: "flex" }}>
                        <div className="one">
                          <img src={tyler} alt="chris hansen..." />
                        </div>
                        <div className="two">
                          <Typography color="primary" gutterBottom>
                            Tyler has been with Chrysalis since 2009.
                          </Typography>
                          <Typography>
                            Tyler graduated with a Bachelor of Science degree in
                            Computer Information Systems and applied what he
                            learned to several jobs before joining the Chrysalis
                            team. His experience in the IT industry includes
                            working at Special Olympics as an IT Manager to
                            working at the State Office of Education as a
                            Network Administrator and has prepared him well for
                            the challenges that Chrysalis brings. Tyler loves to
                            rock climb and hike to the top of mountains. He's a
                            year-round motorcycle enthusiast, riding to work and
                            across the country with the open road ahead of him.
                            He has a supportive wife and two children that he
                            loves to come home to at the end of each day. He
                            says his family is the most important thing to him,
                            and Chrysalis comes in at a very close second. He is
                            truly inspired by the stories he hears about people
                            serving people and loves knowing that he is helping
                            to make a difference daily.
                          </Typography>
                        </div>
                      </CardContent>
                    </Container>
                  </Card>
                </Popup>
              </Masonry>
            </Container>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Mission;
