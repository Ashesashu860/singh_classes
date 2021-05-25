import { Grid } from "@material-ui/core";
import React from "react";
import { HalfHeightGrid, Heading } from "../components/Common";
import { colors } from "../theme";
import styled from "styled-components";

const StyledParagraph = styled.p`
  padding: 1vw 8vw;
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;

const H4 = styled.h4`
  font-family: "Bebas Neue", cursive;
  padding: 0 4vw;
  font-size: 2rem;
`;

const H6 = styled.h6`
  padding: 0 4vw;
  font-family: "Montserrat", sans-serif;
`;

const WeTeach = () => {
  React.useEffect(() => window.scrollTo(0, 0));
  return (
    <Grid container>
      <Grid container item md={12}>
        <Heading>WE TEACH</Heading>
      </Grid>
      <HalfHeightGrid
        container
        item
        sm={6}
        xs={12}
        justify="center"
        alignItems="center"
        direction="column"
        style={{ backgroundColor: colors.background }}
      >
        <H4>Classes 1 to 5</H4>
        <H6>We teach all the subjects eficiently.</H6>
      </HalfHeightGrid>
      <HalfHeightGrid
        item
        sm={6}
        xs={12}
        container
        justify="center"
        direction="column"
        style={{
          backgroundColor: colors.primaryDark,
        }}
      >
        <H4
          style={{
            color: "#fff",
          }}
        >
          Classes 6 to 10
        </H4>
        <H6
          style={{
            color: "#fff",
          }}
        >
          We teach Physics, Chemistry and Maths.
        </H6>
      </HalfHeightGrid>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        style={{ height: "30vh" }}
      >
        <StyledParagraph>
          We analyze every student in the initial days by examining their
          potential of learning and grasping new concepts. According to that, we
          plan their study pattern so that we can efficiently focus on them.
        </StyledParagraph>
      </Grid>
    </Grid>
  );
};

export default WeTeach;
