import { Container, ImageList, ImageListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Gallery from "react-photo-gallery";
import Navbar from "../components/Navbar";
import Services from "../pages/Services";
import Employement from "../pages/Employement";
import Mission from "../pages/Mission";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Container
        sx={{
          marginTop: "50px",
          marginBottom: "15px",
        }}
      >
        <div>
          <Gallery photos={photos} height="auto" />
        </div>
      </Container>
      <Services />
      <Employement />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

const photos = [
  {
    src: "https://media.istockphoto.com/photos/man-in-a-wheelchair-on-a-lift-of-a-vehicle-for-people-with-picture-id1285766659?b=1&k=20&m=1285766659&s=170667a&w=0&h=drRJjwUqbg5t-jA3_SwloGwOKw43Gna8agk9Gxw-epU=",
    width: 3,
    height: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBhZHVsdHMlMjBsYXVnaGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 3,
    height: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzYWJpbGl0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 3,
    height: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1478061653917-455ba7f4a541?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGlzYWJpbGl0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 4,
    height: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1599042502453-237312612472?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRpc2FiaWxpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 3,
    height: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1620065865072-6eb90f4df05e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRpc2FibGVkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    width: 3,
    height: 2,
  },
  {
    src: "https://media.istockphoto.com/photos/asian-down-syndrome-female-learning-from-barista-making-coffee-in-her-picture-id1291965663?b=1&k=20&m=1291965663&s=170667a&w=0&h=URIoHfhFEJIgy9lkK1S_WxZUr8F-XsEU2Xm3SH737tU=",
    width: 5,
    height: 3,
  },
  {
    src: "https://media.istockphoto.com/photos/colleagues-using-digital-tablet-and-working-in-industry-picture-id1187820358?k=20&m=1187820358&s=612x612&w=0&h=nCZDHFcAAgUkn_6Rz3tyNqhhcze4omiSHPWP9KoY6X8=",
    width: 3,
    height: 2,
  },
];
