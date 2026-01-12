// src/components/ExpandableContentCard/ExpandableContentCard.jsx
import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Grid,
    Typography,
    Paper,
    useTheme,
    useMediaQuery,
    Collapse,
    Slide, // <-- NOWY IMPORT
} from '@mui/material';
import { TbChevronDown, TbChevronUp } from 'react-icons/tb';
import { useInView } from 'react-intersection-observer';

const ExpandableContentCard = ({
                                   image,
                                   imagePosition = 'right',
                                   icon,
                                   title,
                                   children,
                                   expandContent,
                                   isInitiallyExpanded = false,
                                   onToggle,
                               }) => {
    const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        setIsExpanded(isInitiallyExpanded);
    }, [isInitiallyExpanded]);

    const handleToggle = () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        if (onToggle) {
            onToggle(newState);
        }
    };

    const imageOrder = imagePosition === 'left' ? -1 : 1;
    // ZMIANA: Definiujemy kierunek animacji, tak jak w ImageTextCard
    const slideDirection = imagePosition === 'left' ? 'right' : 'left';

    return (
        // ZMIANA: Dodajemy zewnętrzny Box dla ref i owijamy wszystko w <Slide>
        <Box ref={ref} sx={{ height: '100%' }}>
            <Slide direction={slideDirection} in={inView} timeout={1000}>
                <Paper
                    elevation={12}
                    sx={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        // ZMIANA: Usunięto stare style animacji (opacity, transform, transition)
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <Box sx={{ p: { xs: 2, md: 4 } }}>
                        <Grid container spacing={4} alignItems="center" direction={isMobile ? 'column' : 'row'}>
                            <Grid size={{ md: 5 }} order={{ md: imageOrder }} sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Box component="img" src={image} alt={title} sx={{ width: '100%', height: 'auto', maxHeight: 350, objectFit: 'cover', borderRadius: '8px' }}/>
                            </Grid>

                            <Grid size={{ xs: 12, md: 7 }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2,
                                        flexDirection: { xs: 'column', md: 'row' },
                                        textAlign: { xs: 'center', md: 'left' },
                                    }}>
                                        {icon && (
                                            <Box sx={{
                                                color: 'icon.main',
                                                fontSize: '3.5rem',
                                                mb: { xs: 1, md: 0 },
                                                mr: { xs: 0, md: 2 },
                                            }}>
                                                {icon}
                                            </Box>
                                        )}
                                        {/* Tytuł dziedziczy teraz wyrównanie po kontenerze */}
                                        <Typography variant="h4" component="h2" sx={{fontWeight: '700'}}>
                                            {title}
                                        </Typography>
                                    </Box>


                                    <Box component="img" src={image} alt={title} sx={{ display: { xs: 'block', md: 'none' }, width: '100%', height: 'auto', maxHeight: { xs: 200, sm: 250 }, objectFit: 'cover', borderRadius: '8px', my: 2 }} />
                                    <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.7, color: 'text.secondary' }}>
                                        {children}
                                    </Typography>

                                    <Box sx={{ mt: 'auto', pt: 3, display: 'flex', justifyContent: 'center' }}>
                                        <Button variant="contained" onClick={handleToggle} endIcon={isExpanded ? <TbChevronUp /> : <TbChevronDown />} fullWidth={isMobile}>
                                            {isExpanded ? "Zwiń szczegóły" : "Dowiedz się więcej"}
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                        <Box sx={{ p: { xs: 2, md: 4 }, pt: {md: 0} }}>
                            {expandContent}
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                <Button variant="outlined" onClick={handleToggle} endIcon={<TbChevronUp />}>
                                    Zwiń
                                </Button>
                            </Box>
                        </Box>
                    </Collapse>
                </Paper>
            </Slide>
        </Box>
    );
};

export default ExpandableContentCard;