import React from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { FullHeightGrid } from "./Common";

const FooterWrapper = styled.div`
  background-color: ${colors.primary};
  padding: 1rem 2rem;
`;

const FooterText = styled.p`
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FullHeightGrid container justify="center" alignItems="center">
        <FooterText>Copyright Singh Classes</FooterText>
      </FullHeightGrid>
    </FooterWrapper>
  );
};

export default Footer;
