import React from 'react';
import { useInView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

// The AnimatedNumber sub-component remains the same
const AnimatedNumber = ({ targetValue, isInView, duration = 2000 }) => {
    const { number } = useSpring({
        from: { number: 0 },
        to: { number: isInView ? targetValue : 0 },
        config: { duration },
    });
    return <animated.span>{number.to(n => n.toFixed(0))}</animated.span>;
};

const StatsCounter = ({ stats = [], animationDuration = 2000 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box ref={ref} sx={{ width: '100%', textAlign: 'center' }}>
            <Grid container spacing={isMobile ? 5 : 2} justifyContent="space-around">
                {stats.map((stat, index) => (
                    <Grid key={index} size={{xs:12, md:6, sm:6}}>
                        <Typography
                            variant="h2"
                            component="div"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '3.5rem', md: '4.5rem' },
                                lineHeight: 1.1,
                            }}
                        >
                            <AnimatedNumber
                                targetValue={stat.value}
                                isInView={inView}
                                duration={animationDuration}
                            />
                            {stat.suffix}
                        </Typography>
                        <Typography
                            variant="h2"
                            component="div"
                            sx={{
                                fontWeight: 400,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                mt: 1,
                                opacity: 0.9,
                                fontSize: { xs: '0.9rem', md: '1rem' },
                            }}
                        >
                            {stat.label}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default StatsCounter;