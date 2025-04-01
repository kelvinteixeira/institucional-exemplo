// theme.ts
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

// Paleta de cores personalizada
const darkBlueTheme = createTheme({
  palette: {
    primary: {
      main: '#9336be',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#64ffda',
      contrastText: '#0a192f'
    },
    background: {
      default: '#0a192f',
      paper: '#020c1b'
    },
    text: {
      primary: '#e6f1ff',
      secondary: '#8892b0'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '8px 22px'
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#ae00ff'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  }
});

interface CustomThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: CustomThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={darkBlueTheme}>
      {children}
    </MuiThemeProvider>
  );
};