import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.div`
  background: var(--bg-bar);
  color: ${props => props.theme.colors.main};
  margin: 20px auto;
  text-align: center;
  width: 100%;
`;

export const Shows = styled.div``;
