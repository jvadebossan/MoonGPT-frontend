import { createTheme, PaletteMode } from '@mui/material';

export const createCustomTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#F8FAFC' : '#0F172A',
      },
      secondary: {
        main: mode === 'dark' ? '#E2E8F0' : '#334155',
      },
      background: {
        default: mode === 'dark' ? '#0F172A' : '#F8FAFC',
        paper: mode === 'dark' ? '#1E293B' : '#FFFFFF',
      },
      text: {
        primary: mode === 'dark' ? '#F8FAFC' : '#0F172A',
        secondary: mode === 'dark' ? '#CBD5E1' : '#475569',
      },
      error: {
        main: mode === 'dark' ? '#F87171' : '#EF4444',
      },
      success: {
        main: mode === 'dark' ? '#4ADE80' : '#10B981',
      },
      warning: {
        main: mode === 'dark' ? '#FBBF24' : '#F59E0B',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            // Default button style for all variants
            '&.MuiButton-contained': {
              backgroundColor: mode === 'light' ? '#0F172A' : '#E2E8F0',
              color: mode === 'light' ? '#F8FAFC' : '#0F172A',
              '&:hover': {
                backgroundColor: mode === 'light' ? '#334155' : '#F8FAFC',
              },
            },
            textTransform: 'capitalize',
          },
        },
      },
    },
  })

};
