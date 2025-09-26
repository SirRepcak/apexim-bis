// src/components/ContactCard/ContactCard.jsx

import React, { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Collapse,
    Box,
    Typography,
    Link,
    Tooltip,
    Grow
} from '@mui/material';
import {
    Phone,
    Email,
    Fax,
    ContentCopy,
    Check,
    ExpandMore,
    InfoOutlined,
} from '@mui/icons-material';

// A sub-component for displaying a single contact item (phone, email, etc.)
const ContactItem = ({ type, value }) => {
    const [copied, setCopied] = useState(false);

    const icons = {
        phone: <Phone />,
        email: <Email />,
        fax: <Fax />,
        info: <InfoOutlined />
    };

    // Determine the appropriate href for the link
    const href =
        type === 'phone' ? `tel:${value.replace(/\s/g, '')}`
            : type === 'email' ? `mailto:${value}`
                : undefined;

    const handleCopy = (e) => {
        e.preventDefault(); // Prevent navigation when clicking the copy button inside a link
        const textToCopy = (type === 'phone' || type === 'fax') ? value.replace(/\s/g, '') : value;
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, '&:last-child': { mb: 0 } }}>
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '5px',
                    mr: 1.5,
                    flexShrink: 0,
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText'
                }}
            >
                {icons[type] || <Email />}
            </Box>
            <Link
                href={href}
                underline="none"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    p: '10px 15px',
                    borderRadius: '10px',
                    transition: 'background-color 0.3s ease',
                    '&:hover': { bgcolor: href ? 'primary.light' : 'primary.main' },
                    minWidth:0,
                }}
            >
                <Typography variant="body1" sx={{
                    fontWeight: 500,
                    mr: 1, // Add space between text and copy button

                    // Mobile-first styles (xs screens):
                    whiteSpace: 'normal',   // Allow text to wrap to a new line
                    wordBreak: 'break-word',// Break long words like emails

                    // Styles from sm breakpoint and up:
                    sm: {
                        whiteSpace: 'nowrap', // Revert to single-line on larger screens
                    },}}>
                    {value}
                </Typography>
                <Tooltip title={copied ? "Skopiowano!" : "Skopiuj do schowka"} placement="top">
                    <IconButton
                        size="small"
                        onClick={handleCopy}
                        sx={{
                            color: 'primary.contrastText',
                            bgcolor: 'rgba(255, 255, 255, 0.2)',
                            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.35)' }
                        }}
                    >
                        {copied ? <Check fontSize="small" sx={{ color: '#4CAF50' }} /> : <ContentCopy fontSize="small" />}
                    </IconButton>
                </Tooltip>
            </Link>
        </Box>
    );
};


const ContactCard = ({ department, isOpenedFromUrl, animationTimeout = 500 }) => {
    const [isOpen, setIsOpen] = useState(department.initiallyOpen || false);

    // 3. Add state to control the Grow animation.
    const [isAnimated, setIsAnimated] = useState(false);

    // 4. Use useEffect to trigger the animation once the component mounts.
    useEffect(() => {
        setIsAnimated(true);
    }, []); // Empty dependency array ensures this runs only once.

    useEffect(() => {
        if (isOpenedFromUrl) {
            const timer = setTimeout(() => setIsOpen(true), 100);
            return () => clearTimeout(timer);
        }
    }, [isOpenedFromUrl]);

    const isExpandable = department.additionalContacts && department.additionalContacts.length > 0;

    const handleToggle = () => {
        if (isExpandable) {
            setIsOpen(!isOpen);
        }
    };

    return (

        <Grow in={isAnimated} timeout={animationTimeout}>
        <Card raised sx={{borderRadius: '10px'}}>
            <CardHeader
                title={department.title}
                slotProps={{
                    title: {
                        variant: 'h5',
                        fontSize: '23px',
                        fontWeight: 500,
                    }
                }}
                onClick={handleToggle}
                action={
                    isExpandable && (
                        <ExpandMore
                            sx={{
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                            }}
                        />
                    )
                }
                sx={{
                    cursor: isExpandable ? 'pointer' : 'default',
                    '& .MuiCardHeader-action': { alignSelf: 'center', margin: 0 },
                    color: 'primary.main',
                }}
            />
            <CardContent>
                {/* Main contact is always visible */}
                <ContactItem
                    type={department.mainContact.type}
                    value={department.mainContact.value}
                />
                {/* Additional contacts are in a collapsible section */}
                {isExpandable && (
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                        <Box sx={{ pt: 1.5 }}> {/* Add padding top to separate from the main contact */}
                            {department.additionalContacts.map((contact, index) => (
                                <ContactItem key={index} type={contact.type} value={contact.value} />
                            ))}
                        </Box>
                    </Collapse>
                )}
            </CardContent>
        </Card>
        </Grow>
    );
};

export default ContactCard;