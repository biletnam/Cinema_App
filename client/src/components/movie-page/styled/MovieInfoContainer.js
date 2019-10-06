import styled from 'styled-components';

export const TitleContainer = styled.div`
  font-size: var(--font-xxl);
  margin-bottom: 20px;
  text-align: center;
`;

export const RatingContainer = styled.div`
  color: ${props => props.theme.colors.ternary};
  font-size: var(--font-l);
  text-align: center;
`;

export const OverviewContainer = styled.div`
  font-size: var(--font-xl);
  line-height: 1.2;
  margin: 10px auto;
  text-align: justify;
  width: 90%;
`;

export const MovieDetailsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-around;
  width: 100%;
`;

export const PosterContainer = styled.div`
  box-shadow: 0 0 8px 1px rgba(196, 196, 196, 0.2);
  height: auto;
  margin: 20px auto;
  position: relative;
  max-width: 500px;
`;

export const Poster = styled.img`
  height: auto;
  width: 100%;
`;
