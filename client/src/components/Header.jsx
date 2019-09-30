import React from 'react';
import styled from 'styled-components';

const Heading = styled.header`
  align-items: center;
  display: flex;
  height: 10vh;
  justify-content: center;
  width: 100%;
  `;

const Title = styled.h1`
  color: ${props=>props.theme.colors.ternary};
  font-family: Notable;
  font-size: var(--font-xl);
  text-align: center;
  text-shadow: 1px 1px 1px rgba(249, 248, 113, 0.6);
`;

// CLICKING ON HAMBURGER OPENS USER PANEL

// const Hamburger = styled.i`
//   margin-left: 20px;
//   transition: color .5s;
//   &:hover {
//     cursor: pointer;
//     color: rgba(249, 248, 113, 0.6);
//   }
// `;

const Header = () => {
  return (
    <Heading>
      <Title>
        CODERS CINEMA
        {/* <Hamburger className="fas fa-bars"/> */}
      </Title>

    </Heading>
  );
}

export default Header;