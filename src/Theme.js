// src/Theme.js
import { createTheme } from '@mui/material/styles';

const baseTypography = {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
};

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#0591C6' },
        secondary: { main: '#ea6c1e' },
        background: { default: '#121212', paper: '#1E1E1E' },
        text: { primary: '#fff', secondary: '#bbb' },
    },
    shape: { borderRadius: 0 },
    typography: {
        ...baseTypography,
        h1: {
            fontFamily: "'externalFont', sans-serif", // external font only for h1
            fontWeight: 700,
            color: '#fff',
        },
        h6: {
            fontWeight: 600,
            color: '#fff',
        },
    }
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#0591C6' },
        secondary: { main: '#ea6c1e' },
        background: { default: '#F5F8FB', paper: '#fff' },
        text: { primary: '#000', secondary: '#444', third:'#fff' },
        icon: {
            main: '#757575'
        }
    },
    shape: { borderRadius: 0 },
    typography: {
        ...baseTypography,
        h1: {
            fontFamily: "'externalFont', sans-serif",
            fontWeight: 700,
            color: '#000',
        },
        h6: {
            fontWeight: 600,
            color: '#000',
        },
    }
});

export { darkTheme, lightTheme };
