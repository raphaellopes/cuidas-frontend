// vendors
import styled from 'styled-components';

// locals
import { colors, metrics } from '../../styles';

const width = 150;

export const ToastStyle = styled.div`
  background-color: ${colors.darkestTransparent};
  color: ${colors.lightest};
  padding: ${metrics.basePadding}px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: ${width}px;
  margin-top: -${width / 2}px;
  margin-left: -${width / 2}px;
  text-align: center;
  border-radius: ${metrics.baseRadius}px;
`;

export const IconWrapper = styled.div`
  margin-bottom: ${metrics.baseMargin}px;
  font-size: 50px;
`;
