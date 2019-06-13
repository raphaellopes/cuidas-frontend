// vendors
import styled from 'styled-components';

// locals
import { colors, metrics } from '../../../styles';

export const InputStyle = styled.input`
  border: 0;
  border-bottom: 1px solid ${props => (
    props.borderColor ? colors[props.borderColor] : ''
  )};
  color: ${props => (
    props.color ? colors[props.color] : 'inherit'
  )};
  padding: ${metrics.basePadding / 3}px 0;
`;
