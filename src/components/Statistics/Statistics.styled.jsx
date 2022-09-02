import styled from 'styled-components';

export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[0]}px;
`;