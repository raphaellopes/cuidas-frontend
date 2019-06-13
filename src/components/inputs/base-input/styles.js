// vendors
import styled from 'styled-components';

// locals
import { colors, metrics } from '../../../styles';

const checkError = (props, currentProp, defaultValue) => {
  if (props.error) {
    return colors.danger;
  }

  return props[currentProp] ? colors[props[currentProp]] : defaultValue;
};

export const InputStyle = styled.input`
  border: 0;
  border-bottom: 1px solid ${props => checkError(props, 'borderColor', '')};
  color: ${props => checkError(props, 'color', 'inherit')};
  padding: ${metrics.basePadding / 3}px 0;
`;
