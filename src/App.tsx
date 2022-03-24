import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import CustomThemeProvider from "./components/views/custom-theme-provider";
import {Box} from "@mui/material";
import Counter from "./components/dum/counter/counter";

function App() {
    const [score, setScore] = useState(0)
    const [activeIndex, setActiveIndex] = useState<null | number>(null)
    const [isFinished, setIsFinished] = useState(false)
    const [transistor, setTransistor] = useState(0)
    const swtchRef = useRef<boolean>(false)


    function handleInterval() {
        if (!isFinished) {
            setTransistor(transistor + 1)
            // console.log(transistor, swtchRef.current)
            if (swtchRef.current) {
                setActiveIndex(Math.floor(Math.random() * 9))
            } else {
                setActiveIndex(null)
            }


            swtchRef.current = !swtchRef.current
        }

    }

    function handleBoxOnClick (boxIndex: number) {
        if (boxIndex === activeIndex) {
            setActiveIndex(null)
            setScore(score + 1)
        }
    }

    function handleOnFinish () {
        setIsFinished(true)
        setActiveIndex(null)
    }
    

    return (
        <CustomThemeProvider>
            <Counter
                showText={false}
                onChangeCount={handleInterval}
                onStartCount={handleInterval}
                defaultInterval={500}
                initialCount={10}
            />
            <Box sx={{
                position: "absolute",
                left: "10px",
                top: "10px",
            }}>
                <Counter
                    onFinishCount={handleOnFinish}
                    initialCount={5}
                />

                <Box>score { score } </Box>
            </Box>
            <Box className={'layout'}>
                <Box className={'box-container'}>
                    <Box className={`box ${activeIndex === 0 ? 'active' : ''}`} onClick={() => { handleBoxOnClick(0) }} />
                    <Box className={`box ${activeIndex === 1 ? 'active' : ''}`} onClick={() => { handleBoxOnClick(1) }} />
                    <Box className={`box ${activeIndex === 2 ? 'active' : ''}`} onClick={() => { handleBoxOnClick(2) }} />
                    <Box className={`box ${activeIndex === 3 ? 'active' : ''}`} onClick={() => { handleBoxOnClick(3) }} />
                    <Box className={`box ${activeIndex === 4 ? 'active' : ''}`} onClick={() => { handleBoxOnClick(4) }} />
                    <Box className={`box ${activeIndex === 5 ? 'active' : ''}`} onClick={() => { handleBoxOnClick(5) }} />
                    <Box className={`box ${activeIndex === 6 ? 'active' : ''}`} onClick={() => { handleBoxOnClick(6) }} />
                    <Box className={`box ${activeIndex === 7 ? 'active' : ''}`} onClick={() => { handleBoxOnClick(7) }} />
                    <Box className={`box ${activeIndex === 8 ? 'active' : ''}`} onClick={() => { handleBoxOnClick(8) }} />
                </Box>
            </Box>
        </CustomThemeProvider>
    );
}

export default App;
