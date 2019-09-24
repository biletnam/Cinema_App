import React from 'react';
import { node } from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        font-family: Lato,sans-serif;
        color: black;
    }

    *, *::before, *::after{
        box-sizing: border-box;
    }
    :root{
        --font-xxxl: 60px;
        --font-xxl: 38px;
        --font-xl: 24px;
        --font-lg: 20px;
        --font-md: 18px;
        --font-sm: 16px;
        --font-xs: 14px;
        --font-xxs: 12px;
    }

    ul{
      margin: 0;
      padding: 0;
    }
`;

const StyledWrapper = styled.div`
  background: white;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
