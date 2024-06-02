import { createGlobalStyle } from "styled-components";
import "sanitize.css";
import { TThemeName } from "./theme";

interface IProps {
  themeName : TThemeName;
}

export const GlobalStyle = createGlobalStyle<IProps>`
  body{
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.themeName === 'light' ? '#f6f7ed' : '#001f3f'}
  }

  h1{
    margin: 0;
  }

  *{
    color: ${(props) => props.themeName === 'light' ? '#00804c' : '#dbe64c'};
  }
`;
