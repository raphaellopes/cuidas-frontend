// vendors
import styled from 'styled-components';

// locals
import { colors, metrics } from '../../styles';

export const Content = styled.div`
  text-align: center;
`;

export const WrapLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${metrics.baseMargin * 2}px;

  a {
    color: ${colors.primary};
    padding: ${metrics.baseMargin}px;
    text-decoration: none;
    font-weight: 600;
  }

  i {
    margin-right: ${metrics.baseMargin}px;
    font-size: ${metrics.fontLarge}
  }
`;
