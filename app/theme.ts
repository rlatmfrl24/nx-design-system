'use client';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    blueGrey: Palette['primary'];
    indigo: Palette['primary'];
    cyan: Palette['primary'];
    green: Palette['primary'];
  }
  interface PaletteOptions {
    blueGrey?: PaletteOptions['primary'];
    indigo?: PaletteOptions['primary'];
    cyan?: PaletteOptions['primary'];
    green?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          fontSize: '13px',
          fontWeight: 500,
          lineHeight: '22px',
          letterSpacing: '0.46px',
          textTransform: 'uppercase',
        }
      }
    }, 
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontSize: '13px',
          fontWeight: 600,
          lineHeight: '20px',
          letterSpacing: '0.14px',
        }
      }
    }, 
    MuiAvatar: {
      styleOverrides:{
        root: {
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '12px',
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '16px',
          letterSpacing: '0.14px',
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '16px',
          letterSpacing: '0.14px',
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '13px',
          fontWeight: 400,
          lineHeight: '18px',
          letterSpacing: '0.14px',
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 2,
          marginLeft: 3,
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '16px',
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '10px',
          fontWeight: 400,
          lineHeight: '14px',
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 3,
        }
      }
    },

  },
  typography: {
    fontFamily: 'var(--font-roboto)',
    h3:{
      fontSize: '45px',
      fontWeight: 500,
      lineHeight: '53px',
    },
    h6: {
      fontSize: '28px',
      fontWeight: 600,
      lineHeight: '36px',
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: '0.14px',
    }, 
    subtitle2: {
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: '18px',
      letterSpacing: '0.14px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.14px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.14px',
    }, 
  },
  palette: {
    primary: {
      main: '#5E5ADB',
      dark: '#3F3BAD',
      light: '#7470E7',
      contrastText: '#ffffff',
    },
    error: {
      main: '#D32F2F',
      dark: '#C62828',
      light: '#EF5350',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#FFA000',
      dark: '#E65100',
      light: '#FFE0B2',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2E7D32',
      dark: '#1B5E20',
      light: '#4CAF50',
      contrastText: '#ffffff',
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    action: {
      active: "rgba(7, 23, 53, 0.56)",
      hover: "rgba(7, 23, 53, 0.04)",
      selected: "rgba(7, 23, 53, 0.08)",
      disabled: "rgba(7, 23, 53, 0.38)",
      disabledBackground: "rgba(7, 23, 53, 0.12)",
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F0F2F7',
      200: '#E8EBF4',
      300: '#E0E0E0',
      400: '#BDBDBD',
    },
    blueGrey: {
      50: '#DDE4EA',
      100: '#CCD2E3',
      300: '#90A4AE',
      400: '#78909C',
      700: '#455A64',
    },
    indigo: {
      200: '#9FA8DA',
      600: '#4A4891',
      800: '#3F3D77',
      900: '#2C2A56',
    },
    cyan: {
      100: '#B2EBF2',
    },
    green: {
      100: '#B9F6CA',
    }
  }
});

export default theme;