import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

const GlobalStyle = createGlobalStyle`
h1,
h2,
h3,
h4,
h5,
h6 {
  color: ${colors.primary};
  width: 100%;

  @media screen and (max-width: 768px){
    width: auto;
    text-align: center;
  }
}

h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 2.6rem;
  }
  h4 {
    font-size: 1.8rem;
  }
  h5 {
    font-size: 1.4rem;
  }
  h6 {
    font-size: 1rem;
  }
  
  @media only screen and (max-width: 1080px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3.5rem;
    }
    h3 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1.6rem;
    }
    h5 {
      font-size: 1.2rem;
    }
  }  

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 1rem;
    }
    h5 {
      font-size: 0.7rem;
    }
  }  
`;

export default GlobalStyle;
