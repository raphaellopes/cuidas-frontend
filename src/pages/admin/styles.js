// vendors
import styled from 'styled-components';

// locals
import { metrics, colors } from '../../styles';

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  border-bottom: 1px solid ${colors.dark}
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${metrics.basePadding}px;
  font-size: 50px;
`;
