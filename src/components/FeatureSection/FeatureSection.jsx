// src/components/FeatureSection/FeatureSection.jsx
import React from "react";
import {
    Box,
    Typography,
    Paper,
    Grid,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import {useInView} from "react-intersection-observer";

const FeatureSection = ({
                            variant = "side-by-side",
                            direction = "row",
                            imagePosition = "right",
                            height = "auto",
                            fullHeight = false,
                            contentWidth = "50%",
                            title,
                            icon,
                            image,
                            imageClassName = "",
                            maxWidth = "1400px",
                            fullWidth = false,
                            backgroundColor = "#fff",
                            textColor = "#333",
                            iconColor = "#888",
                            titleColor,
                            hasShadow = true,
                            contentAlign = "left",
                            contentBoxStyle = "solid",
                            clickable = null,
                            target,
                            rel,
                            children,
                            showImg = true,
                            flexJustifyCenter = false,
                        }) => {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.1});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const RootComponent = clickable ? "a" : Paper;

    // MAIN CONTAINER STYLE
    const containerStyle = {
        display: "flex",
        flexDirection: isMobile
            ? "column"
            : direction === "row"
                ? "row"
                : "column",
        justifyContent: flexJustifyCenter ? "center" : "flex-start",
        alignItems: variant === "overlay" ? "center" : "stretch",
        width: fullWidth ? "100vw" : "100%",
        marginLeft: fullWidth ? "calc(50% - 50vw)" : "auto",
        marginRight: fullWidth ? "calc(50% - 50vw)" : "auto",
        minHeight: fullHeight ? "100%" : height,
        maxWidth: fullWidth ? "100vw" : maxWidth,
        textDecoration: clickable ? "none" : "inherit",
        color: textColor,
        bgcolor: variant === "side-by-side" ? backgroundColor : "transparent",
        backgroundImage:
            variant === "overlay" && image ? `url(${image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: variant === "overlay" ? "fixed" : "scroll",
        borderRadius: fullWidth ? 0 : 2,
        overflow: "hidden",
        boxShadow:
            hasShadow && contentBoxStyle === "solid"
                ? "0 4px 20px rgba(0,0,0,0.07)"
                : "none",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        cursor: clickable ? "pointer" : "default",
        "&:hover": clickable
            ? {
                transform: isMobile ? "none" : "translateY(-8px)",
                boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
            }
            : {},
    };

    // CONTENT BLOCK STYLE
    const contentBoxStyleObj = {
        flexBasis: image && !isMobile ? contentWidth : "100%",
        p: isMobile ? 2.5 : 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: contentBoxStyle === "solid" ? backgroundColor : "transparent",
        borderRadius: contentBoxStyle === "solid" ? 2 : 0,
        textAlign: contentAlign,
        color: textColor,
        flexGrow: 1,
    };

    // IMAGE BLOCK
    const ImageBlock = () =>
        image ? (
            <Grid
                item
                size={{xs: 12, md: 6}}
                sx={{display: "flex", alignItems: "stretch"}}
            >
                <Box
                    component="img"
                    src={image}
                    alt={title}
                    className={imageClassName}
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 2,
                    }}
                />
            </Grid>
        ) : null;

    // CONTENT BLOCK
    const ContentBlock = () => (
        <Grid
            item
            size={{xs: 12, md: image ? 6 : 12}}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Box sx={contentBoxStyleObj}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: isMobile ? "column" : "row",
                        mb: 2,
                        justifyContent:
                            contentAlign === "center"
                                ? "center"
                                : contentAlign === "right"
                                    ? "flex-end"
                                    : "flex-start",
                        textAlign: isMobile ? "center" : contentAlign,
                    }}
                >
                    {icon && (
                        <Box
                            sx={{
                                fontSize: "4rem",
                                mr: isMobile ? 0 : 2,
                                color: iconColor,
                                lineHeight: 1,
                            }}
                        >
                            {icon}
                        </Box>
                    )}
                    <Typography
                        variant="h5"
                        sx={{color: titleColor || textColor, fontWeight: 700}}
                    >
                        {title}
                    </Typography>
                </Box>

                {isMobile && image && showImg && (
                    <Box sx={{pb: 2}}>
                        <Box
                            component="img"
                            src={image}
                            alt={title}
                            sx={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                borderRadius: 2,
                            }}
                        />
                    </Box>
                )}

                <Typography
                    variant="body1"
                    sx={{
                        lineHeight: 1.6,
                        textAlign: isMobile ? "justify" : contentAlign,
                        px: isMobile ? 1.5 : 0,
                    }}
                >
                    {children}
                </Typography>
            </Box>
        </Grid>
    );

    return (
        <RootComponent
            ref={ref}
            sx={containerStyle}
            href={clickable || undefined}
            target={clickable ? target : undefined}
            rel={clickable ? rel : undefined}
            elevation={clickable ? "unset" : 22}
        >
            {variant === "overlay" && image ? (
                <Box
                    component={Paper}
                    elevation={hasShadow ? 6 : 0}
                    sx={{
                        borderRadius: 2,
                        p: isMobile ? 2.5 : 5,
                        maxWidth: "90%",
                        bgcolor:
                            contentBoxStyle === "solid" ? backgroundColor : "transparent",
                        color: textColor,
                        mx: "auto",
                    }}
                >
                    <ContentBlock/>
                </Box>
            ) : (
                <Grid container spacing={0} flexWrap="nowrap">
                    {isMobile ? (
                        <ContentBlock/>
                    ) : imagePosition === "left" ? (
                        <>
                            <ImageBlock/>
                            <ContentBlock/>
                        </>
                    ) : (
                        <>
                            <ContentBlock/>
                            <ImageBlock/>
                        </>
                    )}
                </Grid>
            )}
        </RootComponent>
    );
};

export default FeatureSection;
