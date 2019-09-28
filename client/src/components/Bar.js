import styled from 'styled-components';

const Bar = styled.div`
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
  justify-content: space-between;
  margin-top: 25px;
  padding: 0 30px;
`;

export default Bar;
