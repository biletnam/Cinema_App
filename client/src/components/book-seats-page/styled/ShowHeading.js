import styled from 'styled-components';

export const Screen = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  height: 60px;
  justify-content: center;
  margin: 10px auto;
  transform: perspective(250px) rotateX(-50deg);
  width: 50%;
`;

export const ShowHeading = styled.h2`
  color: ${props => props.theme.colors.main};
  font: inherit;
  font-size: var(--font-xl);
  text-align: center;
`;
