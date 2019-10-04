import styled from 'styled-components';

const Header = styled.h1`
  background: var(--bg-bar);
  color: ${props => props.theme.colors.main};
  font-family: inherit;
  font-size: var(--font-xl);
  min-height: 30px;
  margin-bottom: 20px;
  text-align: center;
`;

export default Header;
