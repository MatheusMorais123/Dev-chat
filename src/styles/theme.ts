export const theme = {
  font: {
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  colors: {
    text: {
      primary: '#212529',
      secondary: '#262931',
      white: '#FFFFFF',
      success: '#36A659',
      info: '#22BF66',
    },
    green: {
      700: '#009440',
      600: '#009942',
      500: '#1EA659',
      400: '#36A659',
      300: '#39B16D',
      200: '#22BF66',
    },
    additional: {
      lightGreen: '#B3E5C9',
      paleGreen: '#CAE5D6',
    },
    gray: {
      700: '#727785',
      600: '#878787',
      500: '#CED4DA',
      400: '#EAEBF0',
      300: '#F4F7FA',
    },
    blue: {
      700: '#178EC2',
    },
    red: {
      700: '#F64949',
    },
    white: {
      500: '#FFFFFF',
    },
    black: {
      600: '#212529',
      500: '#262931',
      700: '#0000',
    },
    background: '#e7edf4',
  },
} as const;

export const buttonColors = {
  primary: {
    background: theme.colors.blue[700],
    text: theme.colors.white[500],
  },
  success: {
    background: theme.colors.green[500],
    text: theme.colors.white[500],
  },
};
