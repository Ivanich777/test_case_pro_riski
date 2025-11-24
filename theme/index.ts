import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#329A85',
        },
        success: {
            main: '#4caf50',
        },
        error: {
            main: '#f44336',
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
        },
        divider: '#e0e0e0',
    },
    typography: {
        fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                    borderRadius: 8,
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {},
            },
        },
    }
});
