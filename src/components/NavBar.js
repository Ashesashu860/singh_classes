import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { FullHeightGrid } from "./Common";
import BookSmall from "../images/book_md.png";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Drawer } from "@material-ui/core";

const NavBarWrapper = styled.nav`
  position: fixed;
  background-color: #fff;
  width: 100vw;
  height: 70px;
  z-index: 1000;
  box-shadow: 1px 1px 6px #aaa;
  @media screen and (max-width: 868px) {
    padding: 1vw 4vw;
  }
  @media screen and (max-width: 480px) {
    padding: 3vw 4vw;
  }
`;

const Logo = styled.img`
  max-height: 100%;
  padding: 4px;
  background-color: ${colors.primary};
  border-radius: 8px;
`;

const NavDrawer = styled(Drawer)`
  .MuiPaper-root {
    width: 50%;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.color || colors.secondary};
  padding: 8px 16px;
  font-weight: 700;
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  @media screen and (max-width: 1080px) {
    width: 15vw;
  }
  @media screen and (max-width: 868px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const NavMenuContainer = styled(FullHeightGrid)`
  padding: 0 4vw;
  @media screen and (max-width: 868px) {
    display: none;
  }
`;

const LogoContainer = styled(NavLink)`
  height: 100%;
  padding: 1vw 4vw;
  text-decoration: none;
`;

const NavIcon = styled(MenuIcon)`
  display: none !important;
  color: ${colors.primary};
  @media screen and (max-width: 868px) {
    display: block !important;
  }
`;

const DrawerLogo = styled.img`
  background-color: ${colors.primary};
  margin: 16px;
  padding: 32px;
  border-radius: 10%;

  @media screen and (max-width: 480px) {
    padding: 16px;
  }
`;

const LogoText = styled.h4`
  margin-left: 8px;
  color: ${colors.primary};
  font-family: "Raleway", sans-serif;
  font-weight: 900;
`;

const navLinkData = [
  {
    label: "We Teach",
    path: "/we_teach",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact Us",
    path: "/contact_us",
  },
];

const NavBar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const handleToggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <NavBarWrapper>
      <FullHeightGrid container alignItems="center" justify="space-between">
        <LogoContainer to="/">
          <FullHeightGrid container alignItems="center" direction="row">
            <Logo src={BookSmall} alt="logo" />
            <LogoText>SINGH CLASSES</LogoText>
          </FullHeightGrid>
        </LogoContainer>

        <IconButton onClick={() => setToggleDrawer(!toggleDrawer)}>
          <NavIcon />
        </IconButton>

        <NavMenuContainer>
          <FullHeightGrid container direction="row">
            {navLinkData.map((oneLink) => (
              <StyledNavLink
                to={oneLink.path}
                activeStyle={{
                  backgroundColor: colors.primary,
                  color: "#fff",
                  transition: "0.3s ease-in-out",
                }}
              >
                {oneLink.label}
              </StyledNavLink>
            ))}
          </FullHeightGrid>
        </NavMenuContainer>

        <React.Fragment>
          <NavDrawer
            anchor="right"
            open={toggleDrawer}
            onClose={(event) => handleToggleDrawer(event)}
          >
            <DrawerLogo src={BookSmall} alt="" />
            <FullHeightGrid container direction="column" style={{ margin: 32 }}>
              {navLinkData.map((oneLink) => (
                <StyledNavLink
                  to={oneLink.path}
                  activeStyle={{
                    backgroundColor: colors.primary,
                    padding: "8px 16px",
                    transition: "0.3s ease-in-out",
                    color: "#fff",
                  }}
                  color={colors.primary}
                  onClick={(event) => handleToggleDrawer(event)}
                >
                  {oneLink.label}
                </StyledNavLink>
              ))}
            </FullHeightGrid>
          </NavDrawer>
        </React.Fragment>
      </FullHeightGrid>
    </NavBarWrapper>
  );
};

export default NavBar;
