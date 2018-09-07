import Typography from 'typography';
import lawtonTheme from 'typography-theme-lawton';

const typography = new Typography(lawtonTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles()
  }

export default typography;
export const rhythm = typography.rhythm
export const scale = typography.scale
