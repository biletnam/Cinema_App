import React from 'react';

import { Heading, Title } from './styled/HeaderStyle';

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