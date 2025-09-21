import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// We pass `sx` as a prop so the parent can control spacing (like margins)
const SocialIcons = ({ sx }) => {
    const theme = useTheme();

    return (
        <Box sx={sx}> {/* Apply the sx prop to the outer Box */}
            <IconButton
                component="a"
                href="https://www.facebook.com/profile.php?id=61556316750642#" // Your Facebook URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{ color: theme.palette.text.secondary }}
            >
                <FacebookIcon />
            </IconButton>
            <IconButton
                component="a"
                href="https://www.linkedin.com/company/apexim-bis/" // Your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{ color: theme.palette.text.secondary, ml: 1 }}
            >
                <LinkedInIcon />
            </IconButton>
        </Box>
    );
};

export default SocialIcons;