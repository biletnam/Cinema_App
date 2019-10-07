import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Date = styled.div`
  color: #fff;
  text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666,
    0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
  font: 80px 'ChunkFiveRegular';
  padding: 0.5em 0;
  font-size: var(--font-xl);
`;
export const Title = styled.h2`
  font: inherit;
  font-weight: bold;
  color: #fff;
  text-shadow: 0px 1px 0px #999, 0px 1px 0px #888, 0px 2px 0px #777, 0px 3px 0px #666,
    0px 4px 0px #555, 0px 5px 0px #444, 0px 5px 0px #333, 0px 6px 7px #001135;
  font: 80px 'ChunkFiveRegular';
  font-size: var(--font-xxl);
`;
export const Table = styled.table`
  border-spacing: 0.5em;
  text-align: center;
  padding: 0.5em 1.5em;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const TableRow = styled.tr`
  color: ${props => props.theme.colors.ternary};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #f00;
  margin-bottom: 0.5em;
`;

export const TableColumn = styled.td`
  padding: 0.6em 0.6em;
  box-shadow: -5px -5px 10px;
  border-bottom: 3px solid black;
  border-right: 3px solid black;
  &:not(:last-child) {
    padding-right: 1em;
  }
  &:last-child {
    padding-left: 1em;
  }
`;
export const SummaryTicketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: flex-start;
  margin: 0 auto;
  max-height: 600px;
  max-width: 700px;
  text-align: center;
`;

export const Heading = styled.div`
  align-items: center;
  display: flex;
  height: 10vh;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const TitleH = styled.h1`
  color: ${props => props.theme.colors.ternary};
  font-family: Notable, sans-serif;
  font-size: var(--font-xl);
  text-align: center;
  text-shadow: 1px 1px 1px rgba(249, 248, 113, 0.6);
`;

export const Confirm = styled(Link)`
  color: white;
  text-align: center;
  box-shadow: -5px -5px 10px;
  width: 30%;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  padding: 0.5em 1em;
  border-radius: 5px;
  font: inherit;
  text-decoration: none;
  text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #fff, 0 -18px 40px #f00;
  background-color: inherit;
  transition: .all 2s linear 1s;
  &:hover {
    color: white;
    transform: translateY(-30px);
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: flex-start;
  margin: 0 auto;
  max-height: 600px;
  max-width: 700px;
  text-align: center;
  margin-top: 2em;
`;

export const ReservationUserDetails = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReservationInput = styled.input`
  width: 40%;
  padding: 0.2em 0.5em;
  margin: 1em 0 1em 0;
  line-height: 1.45;
  box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.2);
`;
export const ReservationLabel = styled.label`
  letter-spacing: 0.1em;
  font-size: var(--font-xl);
`;
export const Submit = styled.button`
  color: white;
  margin-top: 1.5em;
  text-align: center;
  box-shadow: -5px -5px 10px;
  width: 30%;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  padding: 0.5em 1em;
  border-radius: 5px;
  font: inherit;
  text-decoration: none;
  text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #fff, 0 -18px 40px #f00;
  background-color: inherit;
  transition: .all 2s linear 1s;
  &:hover {
    color: white;
    transform: translateY(-3px) scale(1.03);
  }
`;
