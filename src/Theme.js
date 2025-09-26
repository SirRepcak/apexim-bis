// src/Theme.js
import { createTheme } from '@mui/material/styles';

// --- Create a base theme to get default values, like the shadows array ---
const baseTheme = createTheme();

// --- Create a custom shadows array by copying the defaults and adding our new one ---
// FIXED: Changed 'base.shadows' to 'baseTheme.shadows'
const customShadows = [...baseTheme.shadows];
customShadows[24] = '0 12px 32px 0px rgba(0,0,0,0.13)'; // Custom shadow for the landing page header

// --- Base typography settings ---
const baseTypography = {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
};

// =================================================================
// 1. DEFINE FULL COLOR PALETTES FOR EACH BRAND COLOR
// =================================================================

const bluePalette = {
    main: '#0591C6',
    light: '#68c3e4',
    dark: '#006395',
    contrastText: '#ffffff',
    translucent: 'rgba(5, 145, 198, 0.78)',
    translucentHover: 'rgba(5, 135, 185, 0.97)',
};

const orangePalette = {
    main: '#ea6c1e',
    light: '#ff9d4f',      // Lighter shade for hover/secondary elements
    dark: '#b03d00',       // A darker shade
    contrastText: '#ffffff', // Contrast text for buttons, etc.
    translucent: 'rgba(234, 108, 30, 0.77)',
    translucentHover: 'rgba(234, 108, 30, 0.92)',
};


// =================================================================
// 2. ASSEMBLE THE THEMES
// =================================================================

// --- Light Theme (Main - Blue) ---
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: bluePalette,
        secondary: orangePalette,
        background: { default: '#F5F8FB', paper: '#ffffff' },
        text: { primary: '#000', secondary: '#444', third: '#ffffff' },
        icon: { main: '#757575' },
        appBarTransparent: 'rgba(255, 255, 255, 0.85)',
        glass: {
            background: 'rgba(255, 255, 255, 0.19)',
        },
    },
    shadows: customShadows,
    shape: { borderRadius: 0 },
    typography: {
        ...baseTypography,
        h4:{
            fontWeight: '500',
            color: bluePalette.main, // Use direct value for consistency
        },
        h5: {
            fontFamily: "'BankGothic', sans-serif",
            fontWeight: 'normal',
            color: bluePalette.main, // Use direct value for consistency
        },
        h6: {
            fontWeight: 600,
            color: '#000',
        },
    }
});

// --- Light Theme (Security - Orange) ---
const securityLightTheme = createTheme({
    ...lightTheme, // Spread all base light theme settings
    palette: {
        ...lightTheme.palette,
        primary: orangePalette, // SWAP: Set primary to the orange palette
        secondary: bluePalette,   // SWAP: Set secondary to the blue palette
    },
    typography: {
        ...lightTheme.typography,
        h4: {
            ...lightTheme.typography.h4,
            color: orangePalette.main, // Override color for the security theme
        },
        h5: {
            ...lightTheme.typography.h5,
            color: orangePalette.main, // Override color for the security theme
        },
    }
});


// --- Dark Theme (Main - Blue) ---
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: bluePalette,
        secondary: orangePalette,
        background: { default: '#121212', paper: '#1E1E1E' },
        text: { primary: '#ffffff', secondary: '#bbb', third: '#ffffff' },
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

// --- Dark Theme (Security - Orange) ---
const securityDarkTheme = createTheme({
    ...darkTheme, // Spread all base dark theme settings
    palette: {
        ...darkTheme.palette,
        primary: orangePalette, // SWAP: Set primary to the orange palette
        secondary: bluePalette,   // SWAP: Set secondary to the blue palette
    },
});

export { darkTheme, lightTheme, securityLightTheme, securityDarkTheme };