import styled from 'styled-components';

export const Heading = styled.header`
  background: var(--bg-bar);
  min-height: 30px;
  padding: 10px;
  text-align: center;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.main};
  font: inherit;
  font-size: var(--font-xl);
`;

export const Hour = styled.div`
  color: ${props => props.theme.colors.ternary};
`;

export const SubTitle = styled.h3`
  color: ${props => props.theme.colors.main};
  font: inherit;
  font-size: var(--font-l);
`;
