// vendors
import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

// locals
import colors from './colors';
import metrics from './metrics';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: sans-serif;
    font-size: ${metrics.fontBase};
    background: ${colors.primary};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export default GlobalStyle;
