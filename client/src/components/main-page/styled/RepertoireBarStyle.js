import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Banner = styled(Link)`
  align-items: center;
  background: var(--bg-bar);
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
