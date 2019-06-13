// vendors
import styled from 'styled-components';

// locals
import { metrics, colors } from '../../styles';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${metrics.baseMargin}px;

  input {
    flex: 1;
  }
`;

export const Description = styled.p`
  color: ${colors.regular};
  margin-bottom: ${metrics.baseMargin}px;
`;

export const Section = styled.section`
  margin-bottom: ${metrics.baseMargin * 3}px;
`;

export const PersonalData = styled.div`
  border-bottom: 1px solid ${colors.light};
  padding-bottom: ${metrics.basePadding}px;
`;
