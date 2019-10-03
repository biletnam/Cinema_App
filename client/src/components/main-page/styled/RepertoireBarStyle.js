import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Banner = styled(Link)`
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(196, 196, 196, 0) 0%,
    #c4c4c4 4.67%,
    #c4c4c4 43.3%,
    rgba(196, 196, 196, 0) 97.81%
  );
  color: ${props => props.theme.colors.main};
  display: flex;
  font-size: var(--font-xs);
  height: 30px;
  justify-content: center;
  padding: 0 30px;
  transition: color 0.5s;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.ternary};
  }
`;

export default Banner;
