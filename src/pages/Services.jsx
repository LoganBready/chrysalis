import { Card } from "@material-ui/core";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import houses from "../images/houses.jpg";
import autism from "../images/autism.jpg";
import hosthome from "../images/hosthome.jpg";
import { makeStyles } from "@material-ui/styles";
import Popup from "reactjs-popup";
import Masonry from "react-masonry-css";

const useStyles = makeStyles((theme) => {
  return {
    cardStyle: {
      width: "auto",
      marginRight: "1rem",
      marginLeft: "1rem",
    },
    servicesContainer: {
      display: "flex",
      marginTop: "-75px",
      justifyContent: "center",
      alignItems: "center",
      height: "auto",
      backgroundColor: "#f4f4f4",
    },
    something: {
      backgroundColor: "#f4f4f4",
      border: "1px solid #f4f4f4",
      height: "auto",
    },
  };
});

const Services = () => {
  const classes = useStyles();
  const breakpoints = {
    default: 3,
    1300: 1,
  };
  return (
    <div id="services">
      <div className={classes.something}>
        <div className="services_div">
          <Typography variant="h4" align="center" sx={{ marginTop: "50px" }}>
            SERVICES
          </Typography>
        </div>
        <div className={classes.servicesContainer}>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <Popup
              trigger={
                <Card
                  sx={{ maxWidth: 345 }}
                  className={classes.cardStyle}
                  elevation={3}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto"
                      width="auto"
                      image={houses}
                      alt="Housing Services..."
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        24 HOUR RESIDENTIAL CARE
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Chrysalis offers a wide range of residential services
                        from around the clock supervision to environments with
                        minimal staff involvement. When an individual chooses
                        Chrysalis, extreme care is taken in providing the
                        services best suited to meet the needs of the
                        individual.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              }
              modal
              nested
            >
              <Card className="popupContainer" elevation={3}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary">
                    24 HOUR RESIDENTIAL CARE
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    The focus of Chrysalis is serving and supporting individuals
                    with intellectual and developmental disabilities to live a
                    fulfilling life in the community.
                  </Typography>
                  <Typography variant="h6">
                    Chrysalis offers a wide range of residential services
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "400" }}>
                    From around the clock supervision to environments with
                    minimal staff involvement. When an individual chooses
                    Chrysalis, <br />
                    extreme care is taken in providing the services best suited
                    to meet the needs of the individual.
                  </Typography>
                  <br />
                  <Typography variant="h6">
                    Chrysalis provides a continuum of supports
                  </Typography>
                  <Typography>
                    Including medical, financial, therapy, behavioral services,
                    day services, and employment. These services are carefully
                    tailored to meet the needs, choices, and goals of each
                    individual.
                  </Typography>
                  <br />
                  <Typography variant="h6">
                    Chrysalis employs devoted staff members
                  </Typography>
                  <Typography>
                    Who are committed to helping each individual strengthen
                    their skills, manage any challenging behaviors, and achieve
                    their personal goals. We also provide employees with cutting
                    edge group and individual training including online tools,
                    resources, and training to assist them to Make a Difference
                    Daily.
                  </Typography>
                </CardContent>
              </Card>
            </Popup>
            <Popup
              trigger={
                <Card
                  sx={{ maxWidth: 345 }}
                  className={classes.cardStyle}
                  elevation={3}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto"
                      width="auto"
                      image={autism}
                      alt="Autism Services..."
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        AUTISM SERVICES
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        In addition to providing residential services for
                        adolescents and adults with intellectual disabilities,
                        Chrysalis employees provide applied behavior analytic
                        (ABA) services to children and adolescents with Autism
                        Spectrum Disorders.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              }
              modal
              nested
            >
              <Card className="popupContainer" elevation={3}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary">
                    AUTISM SERVICES
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    The focus of Chrysalis is serving and supporting individuals
                    with intellectual and developmental disabilities to live a
                    fulfilling life in the community.
                  </Typography>

                  <Typography variant="body1" sx={{ fontWeight: "400" }}>
                    In addition to providing residential services for
                    adolescents and adults with intellectual disabilities,
                    Chrysalis employees provide applied behavior analytic (ABA)
                    services to children and adolescents with Autism Spectrum
                    Disorders.
                  </Typography>
                  <br />
                  <Typography variant="h6">
                    Chrysalis' team of Board Certified Behavior Analysts
                  </Typography>
                  <Typography>
                    conduct assessments, develop individualized and
                    empirically-based curriculum, train staff members to
                    effectively implement procedures, and monitor the progress
                    of every child receiving Chrysalis' services. The behavior
                    analyst also works with each child's family to ensure they
                    are able to successfully implement necessary procedures.
                  </Typography>
                  <br />
                  <Typography>
                    If you are interested in learning more, or enrolling in this
                    service, please email your contact information and questions
                    to autismservices@gochrysalis.com or contact Lisa Webber at
                    801-655-4950 ext 107.
                  </Typography>
                </CardContent>
              </Card>
            </Popup>
            <Popup
              trigger={
                <Card sx={{ maxWidth: 345 }} className={classes.cardStyle}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="auto"
                      width="auto"
                      image={hosthome}
                      alt="Autism Services..."
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        HOST HOME
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        In addition to providing residential staffing services
                        for intellectually disabled adolescents and adults,
                        Chrysalis also provides opportunities for private
                        members of the community to welcome an individual to
                        live in their home with their family. This arrangement
                        provides a family like structure and natural support
                        network. The family the person lives with becomes
                        mentors, advocates, teachers and lifelong friends.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              }
              modal
              nested
            >
              <Card className="popupContainer" elevation={3}>
                <CardContent>
                  <Typography variant="h5" color="textPrimary">
                    HOST HOME
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    The focus of Chrysalis is serving and supporting individuals
                    with intellectual and developmental disabilities to live a
                    fulfilling life in the community.
                  </Typography>

                  <Typography variant="body1" sx={{ fontWeight: "400" }}>
                    In addition to providing residential staffing services for
                    intellectually disabled adolescents and adults, Chrysalis
                    also provides opportunities for private members of the
                    community to welcome an individual to live in their home
                    with their family. This arrangement provides a family like
                    structure and natural support network. The family the person
                    lives with becomes mentors, advocates, teachers and lifelong
                    friends.
                  </Typography>
                  <br />
                  <Typography variant="h6">
                    Chrysalis provides a strong support team
                  </Typography>
                  <Typography>
                    with years of experience in working with behavioral,
                    emotional and cognitive disabilities. Chrysalis has a team
                    of experts that are experienced and trained in developing
                    treatment plans, independent living and life skill goals as
                    well as high quality behavior modification plans.
                  </Typography>
                  <br />

                  <Typography>
                    If you are interested in learning more, please email your
                    contact information and questions to
                    parentservices@gochrysalis.com or contact Steve Wrigley at
                    <a href="tel:801-674-7922" rel="noreferrer">
                      {" "}
                      801-674-7922
                    </a>
                    .
                  </Typography>
                </CardContent>
              </Card>
            </Popup>
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default Services;
