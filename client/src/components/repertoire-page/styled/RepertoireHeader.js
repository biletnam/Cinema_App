import styled from 'styled-components';

const Header = styled.h1`
  background: var(--bg-bar);
  color: ${props => props.theme.colors.main};
  font-family: inherit;
  font-size: var(--font-xl);
  height: 30px;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;

export default Header;
