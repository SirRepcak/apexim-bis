// src/components/ExpandableFeatureSection/ExpandableFeatureSection.jsx
import React, {useEffect, useState} from "react";
import {TbChevronDown, TbChevronUp} from "react-icons/tb";
import {
    Box,
    Button,
    Grid,
    Typography,
    Paper,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import {useInView} from "react-intersection-observer";

const ExpandableFeatureSection = ({
                                      image,
                                      imagePosition = "right",
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
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        setIsExpanded(isInitiallyExpanded);
    }, [isInitiallyExpanded]);

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.1,
        delay: 100,
    });

    const handleToggle = () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        if (onToggle) onToggle(newState);
    };

    return (
        <Paper
            ref={ref}
            sx={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                p: isMobile ? 0 : 5,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                boxShadow: 'none'
            }}
        >
            <Grid
                container
                spacing={5}
                size={{xs: 12}}
                direction={
                    isMobile ? "column" : imagePosition === "right" ? "row-reverse" : "row"
                }
                alignItems={isExpanded && !isMobile ? "flex-start" : "center"}
                flexWrap={'nowrap'}
            >
                {/* IMAGE */}
                <Grid size={{xs: 12, md: 6}}>
                    <Box
                        sx={{
                            display: isMobile ? "none" : "block",
                            minHeight: isExpanded ? 170 : 260,
                            transform: isExpanded && !isMobile ? "scale(0.8)" : "scale(1)",
                            transition: "all 0.5s",
                        }}
                    >
                        <Box
                            component="img"
                            src={image}
                            alt={title}
                            borderRadius={'8px'}
                            sx={{
                                width: "100%",
                                maxHeight: 400,
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Grid>

                {/* CONTENT */}
                <Grid
                    container
                    size={{xs: 12, md: 6}}
                    sx={{flexDirection: "column", justifyContent: "center"}}
                >
                    <Box sx={{flexGrow: 1}}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: isMobile ? "column" : "row",
                                textAlign: isMobile ? "center" : "left",
                                mb: 2,
                            }}
                        >
                            {icon && (
                                <Box
                                    sx={{
                                        fontSize: "3rem",
                                        mr: isMobile ? 0 : 2,
                                        color: "#0591c6",
                                    }}
                                >
                                    {icon}
                                </Box>
                            )}
                            <Typography
                                variant="h4"
                                sx={{
                                    color: titleColor,
                                    fontWeight: 700,
                                    fontSize: "2rem",
                                    textAlign: "center",
                                }}
                            >
                                {title}
                            </Typography>
                        </Box>

                        {isMobile && (
                            <Box sx={{pb: 2}}>
                                <Box
                                    component="img"
                                    src={image}
                                    alt={title}
                                    sx={{
                                        width: "100%",
                                        maxHeight: 400,
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
                                textAlign: "justify",
                                px: isMobile ? 1.5 : 0,
                            }}
                        >
                            {children}
                        </Typography>
                    </Box>

                    {/* BUTTON */}
                    <Box sx={{mt: 2, display: "flex", justifyContent: "center"}}>
                        <Button
                            fullWidth={isMobile}
                            variant="contained"
                            onClick={handleToggle}
                            endIcon={isExpanded ? <TbChevronUp/> : <TbChevronDown/>}
                            sx={{
                                borderRadius: "8px",
                                bgcolor: "#0591c6",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                                "&:hover": {bgcolor: "#0477a2"},
                            }}
                        >
                            {isExpanded ? "Zwiń szczegóły" : "Dowiedz się więcej"}
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {/* EXPANDABLE AREA */}
            <Box
                sx={{
                    maxHeight: isExpanded ? 2000 : 0,
                    opacity: isExpanded ? 1 : 0,
                    overflow: "hidden",
                    mt: isExpanded ? (isMobile ? 2 : 0) : 0,
                    transition: "all 0.5s ease",
                }}
            >
                {expandContent}

                {isExpanded && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            pt: isMobile ? 2 : 5,
                        }}
                    >
                        <Button
                            variant="outlined"
                            onClick={handleToggle}
                            endIcon={<TbChevronUp/>}
                            fullWidth={isMobile}
                            sx={{
                                borderRadius: "8px",
                                color: "#0591c6",
                                borderColor: "#0591c6",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                "&:hover": {
                                    borderColor: "#0477a2",
                                    backgroundColor: "rgba(5, 145, 198, 0.04)",
                                },
                            }}
                        >
                            Zwiń
                        </Button>
                    </Box>
                )}
            </Box>
        </Paper>
    );
};

export default ExpandableFeatureSection;
