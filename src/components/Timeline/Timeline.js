// src/components/Timeline/Timeline.jsx

import React from 'react';
import { Chrono } from "react-chrono";
import { items } from './TimelineData';
import TimelineCard from './TimelineCard';
import { useTheme, useMediaQuery, GlobalStyles } from '@mui/material';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

const MyTimeline = React.forwardRef(({ activeItemIndex, setActiveIndex, onGalleryOpen }, ref) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const chronoTheme = {
        primary: theme.palette.primary.main,
        secondary: theme.palette.primary.light,
        cardBgColor: theme.palette.background.paper,
        cardForeColor: theme.palette.text.primary,
        titleColor: theme.palette.primary.main,
        titleColorActive: theme.palette.primary.contrastText,
    };

    // Dane przekazywane do Chrono, które używa właściwości `title` do renderowania daty
    const chronoItemsForPoints = items.map(item => ({ title: item.title }));

    return (
        <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
            <div ref={ref} style={{ width: '100%', minHeight: '100vh', padding: isMobile ? '0 0.5rem' : '0' }}>
                <GlobalStyles styles={{
                    '.timeline-vertical-circle.active': {
                        backgroundColor: `${theme.palette.background.paper} !important`,
                        border: `2px solid ${theme.palette.primary.main}`,
                    },
                    '.rc-card-text::after': {
                        display: 'none !important',
                    },
                    // Styl dla tytułu na desktopie (na zewnątrz karty)
                    '.timeline-item-title': {
                        fontFamily: "'BankGothic', sans-serif !important",
                        fontSize: '2rem !important',
                    },
                    '.timeline-card-content': {
                        [theme.breakpoints.up('sm')]: {
                            height: '280px',
                        },
                        [theme.breakpoints.down('sm')]: {
                            width: '100% !important',
                            maxWidth: 'none !important',
                            padding: '0 !important',
                            marginLeft: '0.5rem !important',
                            height: 'auto !important',
                        },
                    },
                    '.rc-card-text': {
                        '&::-webkit-scrollbar': { display: 'none' },
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                    },

                    // --- KLUCZOWA POPRAWKA DLA CZCIONKI I PADDINGU NA MOBILE ---
                    // Celujemy w nagłówek (`header`) wewnątrz karty, który jest renderowany przez Chrono
                    '.timeline-card-content header': {
                        [theme.breakpoints.down('sm')]: {
                            // Dodajemy padding, aby odsunąć datę od krawędzi karty
                            padding: '1rem 1rem 0.5rem 1rem !important',
                            // Ustawiamy poprawną czcionkę
                            fontFamily: "'BankGothic', sans-serif !important",
                            fontSize: '1.5rem !important',
                        }
                    },
                }} />
                <Chrono
                    items={chronoItemsForPoints}
                    mode={isMobile ? 'VERTICAL' : 'VERTICAL_ALTERNATING'}
                    disableToolbar
                    activeItemIndex={activeItemIndex}
                    theme={chronoTheme}
                    scrollable={{ scrollbar: false }}
                    itemWidth={isMobile ? 30 : 150}
                    // Ukrywamy domyślny tytuł na karcie, ponieważ stylujemy go sami
                    // za pomocą GlobalStyles, aby mieć pełną kontrolę.
                    fontSizes={{
                        cardSubtitle: '0.85rem',
                        cardText: '0.9rem',
                        cardTitle: '0rem', // Ustawienie na 0 ukrywa element
                        title: '1rem',
                    }}
                >
                    {items.map((item, index) => (
                        <TimelineCard
                            key={index}
                            item={item}
                            onClick={() => setActiveIndex(index)}
                            onGalleryOpen={onGalleryOpen}
                            isMobile={isMobile}
                        />
                    ))}
                </Chrono>
            </div>
        </StyleSheetManager>
    );
});

export default MyTimeline;