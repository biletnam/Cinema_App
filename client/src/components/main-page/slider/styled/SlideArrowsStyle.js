import styled from 'styled-components';

const Arrow = styled.i`
  color: ${props => props.theme.colors.secondaryTrans};
  z-index: 10;
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

export default Arrow;
