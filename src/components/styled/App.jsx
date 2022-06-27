import React from "react";
import { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import HeaderText from "./components/HeaderText";
import Page from "./components/Page"

const theme = {
  font: "Calibri"
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <HeaderText>I am some header text!</HeaderText>
      <Button primary>Primary</Button>
      <Button>Regular</Button>
      <HeaderText>I am more header text!</HeaderText>
      <Page />
    </Wrapper>
  </ThemeProvider>
);