import React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab';
import { useTheme, useMediaQuery, Typography, Fade, Slide } from '@mui/material';
import { items } from './TimelineData';
import TimelineCard from './TimelineCard';
import useIntersectionObserver from './useIntersectionObserver';

const AnimatedTimelineItem = ({ item, index, activeItemIndex, setActiveIndex, onGalleryOpen, isMobile, itemRef }) => {
    const theme = useTheme();
    const [observerRef, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    const combinedRef = (el) => {
        observerRef.current = el;
        itemRef.current = el;
    };

    const slideDirection = isMobile ? 'up' : (index % 2 === 0 ? 'right' : 'left');

    return (
        <TimelineItem ref={combinedRef} sx={{ minHeight: isMobile ? 'auto' : '360px' }}>
            <TimelineOppositeContent
                sx={{
                    m: 'auto 0',
                    display: isMobile ? 'none' : 'flex',
                    justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                    px: 2,
                }}
            >
                <Fade in={isVisible} timeout={800}>
                    <Typography
                        variant="h5"
                        component="span"
                        sx={{
                            fontFamily: "'BankGothic', sans-serif",
                            fontSize: '1.5rem',
                            p: '0.5rem 1rem',
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                            display: 'inline-block',
                            textAlign: 'center',
                        }}
                    >
                        {item.title}
                    </Typography>
                </Fade>
            </TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
                <TimelineDot
                    sx={{
                        m: 0,
                        backgroundColor: activeItemIndex === index ? theme.palette.background.paper : 'primary.main',
                        borderColor: 'primary.main',
                        transition: 'background-color 0.3s ease',
                    }}
                />
                <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
            </TimelineSeparator>

            <TimelineContent sx={{ py: '12px', px: 2, height: isMobile ? 'auto' : '320px' }}>
                {isMobile && (
                    <Fade in={isVisible} timeout={800}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                fontFamily: "'BankGothic', sans-serif",
                                fontSize: '1.5rem',
                                p: '0.5rem 1rem',
                                mb: 1.5,
                                backgroundColor: 'primary.main',
                                color: 'primary.contrastText',
                                display: 'inline-block',
                            }}
                        >
                            {item.title}
                        </Typography>
                    </Fade>
                )}
                <Fade in={isVisible} timeout={800}>
                    <Slide direction={slideDirection} in={isVisible} timeout={800}>
                        {/* MODIFICATION: Added style={{ height: '100%' }} to this div */}
                        <div style={{ height: '100%' }}>
                            <TimelineCard
                                item={item}
                                onClick={() => setActiveIndex(index)}
                                onGalleryOpen={onGalleryOpen}
                                isMobile={isMobile}
                                isActive={index === activeItemIndex}
                            />
                        </div>
                    </Slide>
                </Fade>
            </TimelineContent>
        </TimelineItem>
    );
};


const MyTimeline = React.forwardRef(({ activeItemIndex, setActiveIndex, onGalleryOpen, itemRefs }, ref) => {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

    return (
        <div ref={ref} style={{ width: '100%' }}>
            <Timeline position={isMobile ? 'right' : 'alternate'} sx={{ p: 0 }}>
                {items.map((item, index) => (
                    <AnimatedTimelineItem
                        key={index}
                        item={item}
                        index={index}
                        activeItemIndex={activeItemIndex}
                        setActiveIndex={setActiveIndex}
                        onGalleryOpen={onGalleryOpen}
                        isMobile={isMobile}
                        itemRef={{
                            get current() {
                                return itemRefs.current[index];
                            },
                            set current(el) {
                                itemRefs.current[index] = el;
                            },
                        }}
                    />
                ))}
            </Timeline>
        </div>
    );
});

export default MyTimeline;