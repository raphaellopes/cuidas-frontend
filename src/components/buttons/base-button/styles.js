// vendors
import styled from 'styled-components';

// locals
import { colors, metrics } from '../../../styles';

export const ButtonStyle = styled.button`
  border: 0;
  cursor: pointer;
  background-color: ${props => (
    props.backgroundColor ? colors[props.backgroundColor] : 'inherit'
  )};
  color: ${props => (
    props.color ? colors[props.color] : 'inherit'
  )};
  padding: ${metrics.basePadding / 3}px ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius * 4}px;
  font-weight: 600;
`;
