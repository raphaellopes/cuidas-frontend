// vendors
import styled from 'styled-components';

// locals
import { metrics } from '../../styles';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${metrics.baseMargin}px;

  input {
    flex: 1;
  }
`;
