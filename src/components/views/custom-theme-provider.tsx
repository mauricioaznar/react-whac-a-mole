import React from 'react';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        // primary: {
        //     main: "#f4a7c1"
        // }
    }
});

interface CustomThemeProviderProps {
    children: React.ReactNode | React.ReactNode[]
}

function CustomThemeProvider ({ children }: CustomThemeProviderProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            { children }
        </ThemeProvider>
    );
};

export default CustomThemeProvider;