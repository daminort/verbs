const colors = {
  basic: '#121212',
  info: '#40a9ff',
  success: '#16931B',
  error: '#d01111',
};

export const THEME = {
  colors,
  bg: {
    main: colors.basic,
    accent: '#030303',
    secondary: '#282828',
    secondaryAccent: '#484848',
    input: '#F5F5F5',
  },
  text: {
    main: '#B3B3B3',
    accent: '#FFFFFF',
    input: colors.basic,
    success: colors.success,
    error: colors.error,
  },
  border: {
    input: 'transparent',
    focus: '#b0bad6',
  },
  size: {
    tiny: '0.8rem',
    mini: '0.9rem',
    small: '1rem',
    medium: '1.5rem',
    normal: '2rem',
    large: '2.5rem',
  },
  svg: {
    main: 'filter: invert(0.5) sepia(0)',
    accent: 'filter: invert(0.9) sepia(0)',
    success: 'filter: invert(0.5) sepia(1) saturate(100) hue-rotate(140deg)',
    error: 'filter: invert(0.5) sepia(1) saturate(100) hue-rotate(390deg)',
  },
  skeleton: {
    start: '#484848',
    middle: '#1d1d1d',
    end: '#484848',
  },
  media: {
    notMobile: 'min-width: 460px',
  },
};
