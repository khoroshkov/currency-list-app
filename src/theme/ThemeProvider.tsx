import React, { useContext } from 'react';
import { CurrencyListAppContext, CurrencyListContextValue } from 'context';
import { ThemeProvider, createTheme, Palette } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteColorOptions } from '@mui/material/styles/createPalette';
import { grey, indigo, red, green } from '@mui/material/colors';
import { THEME_MODE } from 'theme';
import { colors } from './index';

type Props = {
  children: React.ReactNode;
};

export const AppThemeProvider = ({ children }: Props) => {
  const { colorMode } = useContext(CurrencyListAppContext) as CurrencyListContextValue;

  const theme = createTheme({
    palette: {
      mode: colorMode,
      ...(colorMode === THEME_MODE.LIGHT
        ? ({
            // palette values for light mode
            primary: {
              main: colors.deepPurpleGray
            },
            secondary: {
              main: colors.coolGray,
              dark: colors.coolGrayIcon
            },
            divider: grey[600],
            text: {
              primary: colors.darkIndigo,
              secondary: colors.coolGrayText
            },
            error: {
              main: red[800]
            },
            success: {
              main: green[800]
            }
          } as PaletteColorOptions)
        : ({
            // palette values for dark mode
            primary: {
              main: colors.deepPurpleGray
            },
            secondary: {
              main: indigo[500],
              dark: colors.coolGrayIcon
            },
            divider: grey[600],
            text: {
              primary: colors.gray93percent,
              secondary: colors.coolGray
            },
            error: {
              main: red[500]
            },
            success: {
              main: green[500]
            }
          } as PaletteColorOptions))
    } as Palette,
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: { color: red[500] }
        }
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
