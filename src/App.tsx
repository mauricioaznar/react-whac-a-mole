import React, {useState} from 'react';
import './App.css';
import CustomThemeProvider from "./components/views/custom-theme-provider";
import {Box} from "@mui/material";
import Counter from "./components/dum/counter/counter";

function App() {
    const [score, setScore] = useState(0)

    return (
        <CustomThemeProvider>
            <Box sx={{
                position: "absolute",
                left: "10px",
                top: "10px",
            }}>
                <Counter callback={() => { console.log('time is over!!!') }} initialTime={10}/>
                <Box>score { score }</Box>
            </Box>
            <Box className={'layout'}>
                <Box className={'box-container'}>
                    <Box className={'box active'}/>
                    <Box className={'box'}/>
                    <Box className={'box'}/>
                    <Box className={'box'}/>
                    <Box className={'box'}/>
                    <Box className={'box'}/>
                    <Box className={'box'}/>
                    <Box className={'box'}/>
                    <Box className={'box'}/>
                </Box>
            </Box>
        </CustomThemeProvider>
    );
}

export default App;
