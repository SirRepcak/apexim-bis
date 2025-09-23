// src/Theme.js
import { createTheme } from '@mui/material/styles';

// --- Create a base theme to get default values, like the shadows array ---
const baseTheme = createTheme();

// --- Create a custom shadows array by copying the defaults and adding our new one ---
const customShadows = [...baseTheme.shadows];
customShadows[24] = '0 12px 32px 0px rgba(0,0,0,0.13)'; // This is our custom shadow for the landing page header

// Base typography settings
const baseTypography = {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
};

// --- Light Theme ---
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0591C6',
            light: '#68c3e4', // A lighter shade for hover/secondary elements
            dark: '#006395',  // A darker shade
            contrastText: '#ffffff',
            translucent: 'rgba(5, 145, 198, 0.78)',
            translucentHover: 'rgba(5, 135, 185, 0.97)',
        },
        secondary: {
            main: '#ea6c1e',
            // MODIFICATION: Add translucent variants for ChoiceCard
            translucent: 'rgba(255, 156, 0, 0.77)',
            translucentHover: 'rgba(230, 141, 0, 0.92)',
        },
        background: { default: '#F5F8FB', paper: '#ffffff' },
        text: { primary: '#000', secondary: '#444', third: '#ffffff' },
        icon: { main: '#757575' },
        appBarTransparent: 'rgba(255, 255, 255, 0.85)',
        // MODIFICATION: Add a palette for the frosted glass effect
        glass: {
            background: 'rgba(255, 255, 255, 0.19)',
        },
    },
    // MODIFICATION: Apply the new shadows array
    shadows: customShadows,
    shape: { borderRadius: 0 },
    typography: {
        ...baseTypography,
        h4:{
            fontWeight: '500',
            color: '#0591C6',
        },
        h5: {
            fontFamily: "'BankGothic', sans-serif",
            fontWeight: 'normal',
            color: '#0591C6',
        },
        h6: {
            fontWeight: 600,
            color: '#000',
        },
    }
});

// --- Dark Theme ---
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0591C6',
            translucent: 'rgba(5, 145, 198, 0.78)',
            translucentHover: 'rgba(5, 135, 185, 0.97)',
        },
        secondary: {
            main: '#ea6c1e',
            translucent: 'rgba(255, 156, 0, 0.77)',
            translucentHover: 'rgba(230, 141, 0, 0.92)',
        },
        background: { default: '#121212', paper: '#1E1E1E' },
        text: { primary: '#ffffff', secondary: '#bbb', third: '#ffffff' }, // Added 'third' for consistency
        appBarTransparent: 'rgba(30, 30, 30, 0.8)',
        glass: {
            background: 'rgba(30, 30, 30, 0.19)',
        },
    },
    shadows: customShadows,
    shape: { borderRadius: 0 },
    typography: {
        ...baseTypography,
        h5: {
            fontFamily: "'BankGothic', sans-serif",
            fontWeight: 'normal',
            color: '#ffffff',
        },
        h6: {
            fontWeight: 600,
            color: '#ffffff',
        },
    }
});

export { darkTheme, lightTheme };