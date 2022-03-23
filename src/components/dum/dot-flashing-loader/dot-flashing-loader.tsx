import React from 'react';
import {Box, styled} from "@mui/material";

const StyledBox = styled(Box)(({ theme,  }) => ({
    "&.dot-flashing": {
        position: "relative",
        width: theme.spacing(1),
        height: theme.spacing(1),
        "borderRadius": theme.spacing(2),
        "backgroundColor":   theme.palette.background.default,
        "color":   theme.palette.background.default,
        animation: "dotFlashing 1s infinite linear alternate",
        "animationDelay": ".5s",
        "&::before, &::after": {
            content: '""',
            display: "inline-block",
            position: "absolute",
            "backgroundColor":   theme.palette.background.default,
            "color":   theme.palette.background.default,
            top: 0,
            width: theme.spacing(1),
            height: theme.spacing(1),
            "borderRadius": theme.spacing(2),
        },
        "&::before": {
            "left": `-${theme.spacing(1.5)}`,
            animation: "dotFlashing 1s infinite alternate",
            "animationDelay": "0s",
        },
        "&::after": {
            "left": `${theme.spacing(1.5)}`,
            animation: "dotFlashing 1s infinite alternate",
            "animationDelay": "1s",
        }
    },
    "@keyframes dotFlashing": {
        "0%": {
            "backgroundColor":  theme.palette.background.default,
        },
        "50%, 100%": {
            "backgroundColor":  theme.palette.text.primary,
        },
    },
}));

const DotFlashingLoader = () => {
    return (
        <StyledBox className={'dot-flashing'} sx={{ mr: 2 }}/>
    );
};

export default DotFlashingLoader;