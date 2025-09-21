import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ChoiceCard = ({
                        to,
                        backgroundImage,
                        logo,
                        title,
                        description,
                        contentBg,
                        hoverContentBg,
                    }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isExternal = to && (to.startsWith('http') || to.startsWith('//'));
    const [hover, setHover] = React.useState(false);

    return (
        <Card
            component={isExternal ? 'a' : RouterLink}
            {...(isExternal ? { href: to, target: '_blank', rel: 'noopener noreferrer' } : { to })}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
                flex: 1,
                width: '100%',
                height: '100%',
                minHeight: 0,
                minWidth: 0,
                position: 'relative',
                p: 0,
                m: 0,
                overflow: 'hidden',
                boxShadow: 0,
                borderRadius: 0,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform .3s cubic-bezier(.34,1.56,.64,1)',
                transform: hover ? 'scale(1.0125)' : 'none',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Colored translucent overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: hover && hoverContentBg ? hoverContentBg : contentBg,
                    transition: 'background .3s',
                    zIndex: 1,
                }}
            />
            {/* Content area */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 3,
                    maxWidth: 440,
                    width: '90%',
                    userSelect: 'none',
                }}
            >
                {/* White circle behind logo, no blur */}
                <Box
                    sx={{
                        width: isMobile ? 130 : 280,
                        height: isMobile ? 130 : 280,
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 18px rgba(0,0,0,0.13)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: isMobile ? 2 : 4,
                        transition: 'transform .3s',
                        transform: hover ? 'scale(1.09)' : 'none',
                    }}
                >
                    <Box
                        component="img"
                        src={logo}
                        alt={`${title} logo`}
                        sx={{ maxWidth: '70%', maxHeight: '70%', objectFit: 'contain' }}
                    />
                </Box>
                <Typography
                    variant={isMobile ? 'h6' : 'h5'}
                    sx={{
                        color: '#fff',
                        fontWeight: 700,
                        textShadow: '1px 1px 5px rgba(0,0,0,0.18)',
                        mb: 1,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: '#fff',
                        textShadow: '1px 1px 4px rgba(0,0,0,0.30)',
                        fontWeight: 400,
                        fontSize: isMobile ? 14 : 16,
                    }}
                >
                    {description}
                </Typography>
            </Box>
        </Card>
    );
};

export default ChoiceCard;
