// src/FeatureSection.js

import React from 'react';
import './FeatureSection.css';
import { useInView } from 'react-intersection-observer';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

/**
 * An advanced, all-in-one feature section component for creating flexible content blocks.
 * It supports multiple layouts, including side-by-side (horizontal/vertical) and overlay.
 *
 * @param {'side-by-side' | 'overlay'} variant - The main layout style. 'side-by-side' places content and image next to each other. 'overlay' places content on top of a background image. Defaults to 'side-by-side'.
 * @param {'row' | 'column'} direction - For the 'side-by-side' variant, this controls the flex direction. 'row' is a horizontal layout, 'column' is a vertical layout (image above/below text). Defaults to 'row'.
 * @param {'left' | 'right'} imagePosition - Position of the image relative to the content. In 'row' mode, it's left/right. In 'column' mode, 'left' means the image is on top, and 'right' means it's at the bottom. Defaults to 'right'.
 * @param {string} height - The overall minimum height of the section (e.g., '500px', '70vh'). Defaults to 'auto'.
 * @param {boolean} fullHeight - If true, the component will attempt to fill 100% of its parent's height. Useful in CSS Grid for creating equal-height cards. Defaults to false.
 * @param {string} contentWidth - The width of the text content block when in 'row' direction (e.g., '50%', '400px'). Ignored if no image is present. Defaults to '50%'.
 * @param {string} title - The main heading text for the section.
 * @param {React.ReactNode} icon - An optional icon component to display next to the title (e.g., <TbPlugConnected />).
 * @param {string} image - Path to the image file to be displayed. If omitted, the content block will take up 100% of the width.
 * @param {string} imageClassName - An optional CSS class to apply directly to the `<img>` element. Useful for custom styling like adjusting object-fit or size for logos.
 * @param {string} maxWidth - The maximum width of the entire component container (e.g., '1400px').
 * @param {boolean} fullWidth - If true, the component will break out of its container and span the full width of the viewport. Defaults to false.
 * @param {React.ReactNode} children - The main content of the section, typically paragraph text (`<p>`) or other components.
 * @param {string} backgroundColor - The background color of the component or, in 'overlay' variant, the content box.
 * @param {string} textColor - The color of the main paragraph text (`children`).
 * @param {string} iconColor - The color of the icon.
 * @param {string} titleColor - The color of the main heading text. If not provided, it may inherit `textColor`.
 * @param {boolean} hasShadow - If true, applies a subtle box-shadow to the container. Defaults to true.
 * @param {'left' | 'center' | 'right'} contentAlign - The horizontal alignment of the title, icon, and text within the content block. Defaults to 'left'.
 * @param {'solid' | 'transparent'} contentBoxStyle - In 'overlay' variant, defines if the content box has a solid background or is transparent. Defaults to 'solid'.
 * @param {string} clickable - If a URL is provided, the entire section becomes a clickable `<a>` tag linking to this URL. Also adds hover effects.
 * @param {string} target - Standard HTML `<a>` tag attribute `target` (e.g., '_blank'). Used only if 'clickable' is provided.
 * @param {string} rel - Standard HTML `<a>` tag attribute `rel` (e.g., 'noopener noreferrer'). Used only if 'clickable' is provided.
 */
const FeatureSection = ({
                            variant = 'side-by-side',
                            direction = 'row',
                            imagePosition = 'right',
                            height = 'auto',
                            fullHeight = false,
                            contentWidth = '50%',
                            title,
                            icon,
                            image,
                            imageClassName = '',
                            maxWidth,
                            fullWidth = false,
                            backgroundColor,
                            textColor,
                            iconColor,
                            titleColor,
                            hasShadow = true,
                            contentAlign = 'left',
                            contentBoxStyle = 'solid',
                            clickable = null,
                            target,
                            rel,
                            children,
                            showImg = true,
                            flexJustifyCenter = false,
                        }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const RootComponent = clickable ? 'a' : 'div';

    const mainStyle = {
        height: fullHeight ? '100%' : height,
        backgroundImage: variant === 'overlay' && image ? `url(${image})` : 'none',
        maxWidth: fullWidth ? 'none' : maxWidth || 'none',
        backgroundColor: variant === 'side-by-side' ? backgroundColor : undefined,
        color: textColor,
    };

    const contentBoxStyleObj = {
        flexBasis: image ? (direction === 'row' ? contentWidth : 'auto') : '100%',
        backgroundColor: contentBoxStyle === 'solid' ? backgroundColor : 'transparent',
    };

    const iconStyle = { color: iconColor };
    const titleStyle = { color: titleColor || textColor };

    const ImageBlock = () => (
        <div className={`fs-image-box ${isMobile ? 'fs-image-box-mobile' : '' }`}>
            <img src={image} alt={title} className={`fs-image ${imageClassName}`} />
        </div>
    );

    const ContentBlock = () => (
        <div
            className={`fs-content-box ${isMobile ? 'mobile' : ''} fs-align-${contentAlign} fs-content-${contentBoxStyle}`}
            style={contentBoxStyleObj}
        >
            <div className={`fs-header ${isMobile ? 'mobile-header' : ''}`}>
                {icon && <div className="fs-icon" style={iconStyle}>{icon}</div>}
                <h2 className="fs-title" style={titleStyle}>{title}</h2>
            </div>
            {isMobile && image && showImg && (
                <ImageBlock />
            )}
            <div className={`fs-text ${isMobile ? 'fs-text-mobile' : ''}`}>
                {children}
            </div>
        </div>
    );

    let containerClasses = `fs-container`;
    if (fullHeight) { containerClasses += ` fs-full-height`; }
    if (!image) { containerClasses += ` fs-content-only`; }

    if (variant === 'overlay' && image) { containerClasses += ` fs-overlay-variant`; }
    else { containerClasses += ` fs-side-by-side-variant fs-direction-${direction}`; }

    containerClasses += ` fs-animate ${inView ? 'is-visible' : ''}`;
    if (fullWidth) { containerClasses += ` fs-full-width`; }
    if (hasShadow && contentBoxStyle === 'solid') { containerClasses += ` fs-has-shadow`; }
    if (clickable) { containerClasses += ` fs-clickable`; }
    if (flexJustifyCenter) { containerClasses += ` fs-justify-center`; }

    const rootProps = {
        ref: ref,
        className: containerClasses,
        style: mainStyle,
    };

    if (clickable) {
        rootProps.href = clickable;
        if (target) rootProps.target = target;
        if (rel) rootProps.rel = rel;
    }

    if (variant === 'overlay' && image) {
        return ( <RootComponent {...rootProps}><ContentBlock /></RootComponent> );
    }

    return (
        <RootComponent {...rootProps}>
            {isMobile ? (
                <ContentBlock />
            ) : (
                imagePosition === 'left' ? (
                    <>
                        {image && <ImageBlock />}
                        <ContentBlock />
                    </>
                ) : (
                    <>
                        <ContentBlock />
                        {image && <ImageBlock />}
                    </>
                )
            )}
        </RootComponent>
    );
};

export default FeatureSection;