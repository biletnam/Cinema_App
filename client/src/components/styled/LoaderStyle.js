import styled from 'styled-components';

export const LoaderContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Spinner = styled.div`
  height: 48px;
  width: 48px;
  margin: 5px;
  &:after {
    animation: lds-dual-ring 1.2s linear infinite;
    border: 5px solid ${props => props.theme.colors.ternary};
    border-color: ${props => props.theme.colors.ternary} transparent
      ${props => props.theme.colors.ternary} transparent;
    border-radius: 50%;
    content: '';
    display: block;
    height: 48px;
    width: 48px;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
// loader code from https://loading.io/css/
