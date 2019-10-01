import styled from 'styled-components';

export const Heading = styled.header`
  align-items: center;
  display: flex;
  height: 10vh;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.ternary};
  font-family: Notable, sans-serif;
  font-size: var(--font-xl);
  text-align: center;
  text-shadow: 1px 1px 1px rgba(249, 248, 113, 0.6);
`;
