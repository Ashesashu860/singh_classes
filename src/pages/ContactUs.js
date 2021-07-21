import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { colors } from "../theme";
import styled from "styled-components";
import { MainContentGrid } from "../components/Common";
import CallIcon from "@material-ui/icons/Call";
import Call from "../images/call.jpg";
import Call2 from "../images/call2.jpg";

const ContactUsContainer = styled(MainContentGrid)`
  background-image: url(${Call});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1rem 3rem;
  @media screen and (max-width: 540px) {
    // background-image: url(${Call2});
    background-position: right;
    padding: 1rem;
  }
  & > *:not(:last-child) {
    margin-bottom: 1rem;
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
  padding: 2rem;
  border-radius: 1rem;
  margin: 1rem;
  box-shadow: 1px 1px 6px #ccc;
  background-color: #eee;
  & > *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 540px) {
    padding: 1.5rem 2rem;
    width: 100%;
  }
`;
const H4 = styled.h4`
  font-family: "Bebas Neue", cursive;
  font-size: 2.5rem;
  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
  }
`;

const H6 = styled.h6`
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  @media screen and (max-width: 540px) {
    font-size: 1rem;
  }
`;
const ContactUs = () => {
  return (
    <ContactUsContainer container alignItems="center" justify="flex-start">
      <Grid sm={6} xs={12}>
        <RoundBanner>REACH OUT TO US AT</RoundBanner>
        <Center>
          <Card>
            <H4>ADDRESS</H4>
            <H6>536 KA/121, Makkaganj, Triveni Nagar, Lucknow</H6>
          </Card>
        </Center>
        <Center>
          <Card>
            <H4>PHONE NUMBERS</H4>
            <Center style={{ flexWrap: "nowrap" }}>
              <a href="tel:+917668807023">
                <IconButton>
                  <CallIcon />
                </IconButton>
              </a>
              <H6>+91 7668807023</H6>
            </Center>
            <Center style={{ flexWrap: "nowrap" }}>
              <a href="tel:+918173014442">
                <IconButton>
                  <CallIcon />
                </IconButton>
              </a>
              <H6>+91 8173014442</H6>
            </Center>
          </Card>
        </Center>
      </Grid>
    </ContactUsContainer>
  );
};

export default ContactUs;
