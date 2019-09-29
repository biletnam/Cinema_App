import React from 'react';
import { node } from 'prop-types';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
    body{
      background: ${props => props.theme.colors.main};
      color: ${props => props.theme.colors.secondary};
      font-family: Baumans, sans-serif;
      margin: 0;
      padding: 0;
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
  background: ${props => props.theme.colors.main};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 800px;
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
