import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { colors } from "../theme";

export const FullHeightGrid = styled(Grid)`
  height: 100% !important;
  flex-wrap: nowrap !important;
`;

export const MainContentGrid = styled(Grid)`
  height: calc(100vh - 70px) !important;
`;

export const HalfHeightGrid = styled(Grid)`
  height: calc((100vh - 70px) / 2) !important;
`;

export const Heading = styled.h3`
  padding: 2vw 8vw;
  color: #fff;
  background-color: ${colors.secondary};
  font-family: "Raleway", sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
