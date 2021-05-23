import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import { FullHeightGrid } from "./components/Common";
import ContactUs from "./pages/ContactUs";
import WeTeach from "./pages/WeTeach";
import About from "./pages/About";
import Footer from "./components/Footer";

const Content = styled(FullHeightGrid)`
  padding-top: 70px;
  height: 100vh !important;
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Content container direction="column">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/we_teach" component={WeTeach} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact_us" component={ContactUs} />
      </Content>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
