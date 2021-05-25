import React from "react";
import { FullHeightGrid, MainContentGrid } from "../components/Common";
import MainBackground from "../images/main-background.jpg";
import styled from "styled-components";
import WeTeach from "./WeTeach";
import About from "./About";

const HomePageContent = styled(FullHeightGrid)`
  background-image: url(${MainBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1vw 8vw;
`;

const H1 = styled.h1`
  font-family: "Bebas Neue", cursive;
  text-align: left;
  @media screen and (max-width: 768px) {
    width: auto;
    text-align: center;
    font-size: 12vw;
  }
  @media screen and (max-width: 480px) {
    font-size: 16vw;
  }
`;

const H2 = styled.h2`
  font-family: "Bebas Neue", cursive;
  text-align: left;
  @media screen and (max-width: 768px) {
    width: auto;
    text-align: center;
    font-size: 10vw;
  }
  @media screen and (max-width: 480px) {
    font-size: 14vw;
  }
`;

const H3 = styled.h3`
  max-width: 50%;
  font-family: "Montserrat", sans-serif;
  text-align: left;
  @media screen and (max-width: 768px) {
    width: auto;
    text-align: center;
    font-size: 6vw;
    max-width: 100%;
  }
  @media screen and (max-width: 480px) {
    font-size: 8vw;
  }
`;

const HomePage = () => {
  React.useEffect(() => window.scrollTo(0, 0));
  return (
    <>
      <MainContentGrid>
        <HomePageContent container justify="center" direction="column">
          <H1>WE OFFER</H1>
          <H3>High quality education to our students from class</H3>
          <H2>1st to 10th</H2>
        </HomePageContent>
      </MainContentGrid>
      <WeTeach />
      <About />
    </>
  );
};

export default HomePage;
