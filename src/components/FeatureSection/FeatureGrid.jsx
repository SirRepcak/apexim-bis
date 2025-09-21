// src/components/FeatureGrid/FeatureGrid.jsx
import React from "react";
import {Grid, Box} from "@mui/material";

const FeatureGrid = ({
                         columnsData = [],
                         gap = 3, // domyślnie theme.spacing(3) = 24px
                         maxWidth = "none",
                         equalHeight = false,
                     }) => {
    if (equalHeight) {
        // tryb "równa wysokość" – spłaszczona siatka
        const flatItems = columnsData.flat();
        return (
            <Grid
                container
                spacing={gap}
                sx={{
                    maxWidth,
                    margin: "0 auto",
                    alignItems: "stretch",
                }}
            >
                {flatItems.map((item, index) => (
                    <Grid item xs={12} md={12 / columnsData.length} key={index}>
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {item}
                        </Box>
                    </Grid>
                ))}
            </Grid>
        );
    }

    // tryb domyślny – kolumny
    return (
        <Grid
            container
            spacing={gap}
            sx={{
                maxWidth,
                margin: "0 auto",
                alignItems: "flex-start",
            }}
        >
            {columnsData.map((columnItems, columnIndex) => (
                <Grid item xs={12} md={12 / columnsData.length} key={columnIndex}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: gap,
                            height: "100%",
                        }}
                    >
                        {columnItems.map((item, itemIndex) => (
                            <Box key={itemIndex}>{item}</Box>
                        ))}
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default FeatureGrid;
