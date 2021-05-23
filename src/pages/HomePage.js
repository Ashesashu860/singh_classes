import React from "react";
import { FullHeightGrid } from "../components/Common";
import MainBackground from "../images/main-background.jpg";
import styled from "styled-components";

const HomePageContent = styled(FullHeightGrid)`
  background-image: url(${MainBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1vw 8vw;
`;

const H1 = styled.h1`
  @media screen and (max-width: 768px) {
    font-size: 12vw;
  }
  @media screen and (max-width: 480px) {
    font-size: 16vw;
  }
`;

const H2 = styled.h2`
  @media screen and (max-width: 768px) {
    font-size: 10vw;
  }
  @media screen and (max-width: 480px) {
    font-size: 14vw;
  }
`;

const H3 = styled.h3`
  max-width: 50%;

  @media screen and (max-width: 768px) {
    font-size: 6vw;
    max-width: 100%;
  }
  @media screen and (max-width: 480px) {
    font-size: 8vw;
    max-width: 100%;
  }
`;

const HomePage = () => {
  return (
    <HomePageContent container justify="center" direction="column">
      <H1>WE OFFER</H1>
      <H3>High qaulity education to our students from class</H3>
      <H2>1st to 10th</H2>
    </HomePageContent>
  );
};

export default HomePage;
