import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { MainContentGrid } from "../components/Common";
import Namrata from "../images/namrata.png";
import { colors } from "../theme";
import Study from "../images/study.jpg";
import Study2 from "../images/study2.jpg";

const H4 = styled.h4`
  font-family: "Bebas Neue", cursive;
  padding: 0 4vw;
  font-size: 3rem;
  @media screen and (max-width: 540px) {
    font-size: 2rem;
  }
`;

const H6 = styled.h6`
  padding: 0 4vw;
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
  }
`;

const AboutUsContainer = styled(MainContentGrid)`
  background-image: url(${Study2});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  @media screen and (max-width: 450px) {
    background-image: url(${Study});
  }
  padding: 1rem 3rem;
`;

const About = () => {
  return (
    <AboutUsContainer
      container
      alignItems="center"
      justify="center"
      direction="column"
    >
      <Grid container alignItems="center" justify="center">
        <Avatar
          style={{
            height: "36vmin",
            width: "36vmin",
          }}
          alt=""
          src={Namrata}
        />
      </Grid>
      <Grid container alignItems="center" justify="center">
        <H4
          style={{
            color: "#fff",
            marginTop: "1rem",
          }}
        >
          FACULTY
        </H4>
        <H6
          style={{
            color: "#fff",
          }}
        >
          Namrata Singh
        </H6>
      </Grid>
    </AboutUsContainer>
  );
};

export default About;
