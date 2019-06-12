// vendors
import styled from 'styled-components';

// locals
import { colors, metrics } from '../../styles';

export const ContainerStyle = styled.div`
  background-color: ${colors.lightest};
  margin: ${metrics.baseMargin}px;
  padding: ${metrics.basePadding}px;
  box-shadow: 0 0 5px ${colors.darkTransparent};

  @media (min-width: 960px) {
    max-width: 960px;
    margin: ${metrics.baseMargin}px auto;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: ${metrics.baseMargin * 2}px;
`;
