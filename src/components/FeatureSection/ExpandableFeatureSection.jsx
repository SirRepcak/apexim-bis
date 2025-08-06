// src/components/ExpandableFeatureSection/ExpandableFeatureSection.js
import React, {useEffect, useState} from 'react';
import './ExpandableFeatureSection.css';
import { TbChevronDown, TbChevronUp } from 'react-icons/tb';
import Button from '@mui/material/Button';
import { useInView } from 'react-intersection-observer';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ExpandableFeatureSection = ({
                                      image,
                                      imagePosition = 'right',
                                      icon,
                                      title,
                                      titleColor,
                                      children,
                                      expandContent,
                                      isInitiallyExpanded = false,
                                      onToggle,
                                  }) => {
    const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        setIsExpanded(isInitiallyExpanded);
    }, [isInitiallyExpanded]);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        delay: 100,
    });

    const containerClasses = [
        'efs-container', 'efs-animate',
        inView ? 'efs-is-visible' : '',
        isExpanded ? 'efs-expanded' : 'efs-collapsed',
        isMobile ? 'efs-mobile' : 'efs-container-desktop-padding',
    ].join(' ');

    const gridClasses = ['efs-grid', `efs-image-${imagePosition}`].join(' ');

    const handleToggle = () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        if (onToggle) {
            onToggle(newState);
        }
    };

    const titleStyle = { color: titleColor };

    return (
        <div ref={ref} className={containerClasses}>
            <div className={gridClasses}>
                {!isMobile && (
                    <div className="efs-image-wrapper">
                        <img src={image} alt={title} className="efs-image" />
                    </div>
                )}
                <div className="efs-content-wrapper">
                    <div className="efs-main-content">
                        <div className={`efs-header ${isMobile ? 'efs-header-mobile' : ''}`}>
                            {icon && <div className="efs-icon">{icon}</div>}
                            {/* Zastosowanie nowego stylu */}
                            <h2 className="efs-title" style={titleStyle}>{title}</h2>
                        </div>
                        {isMobile && (
                            <div className="efs-image-wrapper efs-image-wrapper-mobile">
                                <img src={image} alt={title} className="efs-image" />
                            </div>
                        )}
                        <div className={`efs-intro-text ${isMobile ? 'efs-intro-text-mobile' : ''}`}>{children}</div>
                    </div>
                    <div className="efs-trigger-wrapper">
                        <Button
                            fullWidth={isMobile}
                            variant="contained"
                            onClick={handleToggle}
                            endIcon={isExpanded ? <TbChevronUp /> : <TbChevronDown />}
                            sx={{ borderRadius: '8px', backgroundColor: '#0591c6', '&:hover': { backgroundColor: '#0477a2' } }}
                        >
                            {isExpanded ? 'Zwiń szczegóły' : 'Dowiedz się więcej'}
                        </Button>
                    </div>
                </div>
            </div>
            <div className={`${isMobile ? 'efs-mobile-expandable-area' : ''} efs-expandable-area`}>
                {expandContent}
                {isExpanded && (
                    <div className="efs-bottom-trigger-wrapper">
                        <Button
                            variant="outlined"
                            onClick={handleToggle}
                            endIcon={<TbChevronUp />}
                            fullWidth={isMobile}
                            sx={{ borderRadius: '8px', color: '#0591c6', borderColor: '#0591c6', '&:hover': { borderColor: '#0477a2', backgroundColor: 'rgba(5, 145, 198, 0.04)' } }}
                        >
                            Zwiń
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExpandableFeatureSection;