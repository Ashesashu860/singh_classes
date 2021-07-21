import { Grid } from "@material-ui/core";
import React from "react";
import { Heading, MainContentGrid } from "../components/Common";
import { colors } from "../theme";
import styled from "styled-components";
import Books from "../images/books.jpg";

const H4 = styled.h4`
  font-family: "Bebas Neue", cursive;
  font-size: 2rem;
  @media screen and (max-width: 540px) {
    font-size: 1.3rem;
  }
`;

const H6 = styled.h6`
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  @media screen and (max-width: 540px) {
    font-size: 0.8rem;
  }
`;

const RoundBanner = styled(Grid)`
  padding: 1rem 4rem;
  background-color: ${(props) => props.color || colors.primary};
  border-radius: 5rem;
  color: #fff;
  font-size: 1.5rem;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  text-align: center;
  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 540px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  padding: 2rem 3rem;
  border-radius: 1rem;
  margin: 0.5rem;
  box-shadow: 1px 1px 6px #ccc;
  background-color: #eee;
  @media screen and (max-width: 540px) {
    padding: 1.5rem 2rem;
  }
`;

const WeTeachContainer = styled(MainContentGrid)`
  background-image: url(${Books});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1rem 3rem;
  min-height: 100%;
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const WeTeach = () => {
  React.useEffect(() => window.scrollTo(0, 0));
  return (
    <WeTeachContainer container alignItems="center" justify="flex-end">
      <Grid sm={6} xs={12}>
        <RoundBanner>WE TEACH</RoundBanner>
        <Center>
          <Card>
            <H4>Classes 1 to 5</H4>
            <H6>We teach all the subjects eficiently.</H6>
          </Card>
          <Card>
            <H4>Classes 6 to 10</H4>
            <H6>We teach Physics, Chemistry and Maths.</H6>
          </Card>
        </Center>
        <RoundBanner>COMBO LEARNINGS</RoundBanner>
        <Center>
          <Card>
            <H6>Tricky Maths</H6>
          </Card>
          <Card>
            <H6>Conversational English</H6>
          </Card>
        </Center>
      </Grid>
    </WeTeachContainer>
  );
};

export default WeTeach;
