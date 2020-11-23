const colors = {
  basic: '#121212',
  success: '#16931B',
  error: '#931616',
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
    success: 'filter: invert(0.5) sepia(1) saturate(10) hue-rotate(410deg)',
    error: 'filter: invert(0.5) sepia(1) saturate(10) hue-rotate(340deg)',
  }
};
