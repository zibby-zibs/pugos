"use client";

import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { MenuList, MenuListItem, Separator, styleReset } from "react95";
// pick a theme of your choice
import original from "react95/dist/themes/original";
// original Windows95 font (optionally)
// import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
// import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('react95/dist/fonts/ms_sans_serif.woff2') format('wo2ff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('react95/dist/fonts/ms_sans_serif_bold.woff2') format('w2off2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

export const WindowsTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
