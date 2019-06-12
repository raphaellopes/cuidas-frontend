// vendors
import styled from 'styled-components';

// locals
import { colors } from '../../styles';

export const IconStyle = styled.i`
  color: ${props => (props.color ? colors[props.color] : 'inherit')}
`;
