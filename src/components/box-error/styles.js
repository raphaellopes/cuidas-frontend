// vendors
import styled from 'styled-components';

// locals
import { colors, metrics } from '../../styles';

export const BoxErrorStyle = styled.div`
  background-color: ${colors.danger};
  color: ${colors.lightest};
  text-align: center;
  padding: ${metrics.basePadding / 2}px;
`;
