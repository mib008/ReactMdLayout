// import { createMuiTheme, createBreakpoints } from 'material-ui/styles';
import { createMuiTheme } from 'material-ui/styles';

import defaultTheme from './defaultTheme.json';

let theme = createMuiTheme(defaultTheme);

theme.palette.getContrastText = (color) => color;

// theme.breakpoints = createBreakpoints(theme.breakpoints);

theme.mixins.gutters = (object) => object;

export default theme;
