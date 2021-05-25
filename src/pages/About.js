import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { MainContentGrid } from "../components/Common";
import Namrata from "../images/namrata.png";
import { colors } from "../theme";

const H4 = styled.h4`
  font-family: "Bebas Neue", cursive;
  padding: 0 4vw;
  font-size: 2rem;
`;

const H6 = styled.h6`
  padding: 0 4vw;
  font-family: "Montserrat", sans-serif;
`;

const About = () => {
  return (
    <MainContentGrid
      container
      alignItems="center"
      justify="center"
      direction="column"
      style={{ backgroundColor: colors.secondary }}
    >
      <Grid container alignItems="center" justify="center">
        <Avatar
          style={{
            height: "20vw",
            width: "20vw",
          }}
          alt=""
          src={Namrata}
        />
      </Grid>
      <Grid container alignItems="center" justify="center">
        <H4
          style={{
            color: "#fff",
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
    </MainContentGrid>
  );
};

export default About;
