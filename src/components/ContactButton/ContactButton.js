import React from 'react';
import { Button, Link } from '@mui/material';
import { TbPhone } from 'react-icons/tb';

/**
 * A reusable contact button component.
 * @param {object} props - The component props.
 * @param {object} props.sx - MUI sx prop for custom styling and positioning.
 * @param {React.ReactNode} props.children - Custom text for the button. Defaults to "SKONTAKTUJ SIĘ Z NAMI".
 */
const ContactButton = ({ sx, children }) => {
    // The default text if no children are provided
    const defaultText = 'SKONTAKTUJ SIĘ Z NAMI';

    return (
        <Button
            component={Link}
            href="tel:+48123456789"
            variant="contained"
            startIcon={<TbPhone />}
            sx={{
                // Base styles for the button
                minWidth: 'auto',
                backgroundColor: 'primary.main',
                '&:hover': { backgroundColor: 'primary.dark' },
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',

                // Merge any sx props passed from the parent for custom positioning
                ...sx,
            }}
        >
            {children || defaultText}
        </Button>
    );
};

export default ContactButton;