import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import CustomThemeProvider from "./components/views/custom-theme-provider";
import {Box} from "@mui/material";
import Counter from "./components/dum/counter/counter";

const INITIAL_TICKS_COUNT = 10
const TICKS_INTERVAL = 1000

function generateIndex(): number {
    return Math.floor(Math.random() * 9)
}

function App() {
    const [score, setScore] = useState(0)
    const [activeIndex, setActiveIndex] = useState<null | number>(null)
    const [isTimerFinished, setIsTimerFinished] = useState(false)
    const [currentTickCount, setCurrentTickCount] = useState(INITIAL_TICKS_COUNT)
    const swtchRef = useRef<boolean>(false)


    console.log('render')
    console.log('activeIndex', activeIndex, 'currentTickCount', currentTickCount)
    console.log('--------------------------------------------------------------')

    function handleOnStartTicks(count: number) {
        setActiveIndex(generateIndex())
        setCurrentTickCount((prev) => prev - 1)
        console.log('onStartCount', count, 'activeIndex', activeIndex, 'currentTickCount', currentTickCount)
    }

    function handleOnChangeTicks(count: number) {
        setCurrentTickCount((prevState => prevState - 1))
        console.log('onChangeCount', count, 'activeIndex', activeIndex, 'currentTickCount', currentTickCount)
        if (!isTimerFinished) {
            if (swtchRef.current) {
                setActiveIndex(generateIndex())
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

    function handleOnFinishTimer () {
        setIsTimerFinished(true)
        setActiveIndex(null)
    }

    return (
        <CustomThemeProvider>
            <Counter
                showText={false}
                onChangeCount={handleOnChangeTicks}
                onStartCount={handleOnStartTicks}
                defaultInterval={TICKS_INTERVAL}
                initialCount={INITIAL_TICKS_COUNT}
            />
            <Box sx={{
                position: "absolute",
                left: "10px",
                top: "10px",
            }}>
                <Counter
                    onFinishCount={handleOnFinishTimer}
                    initialCount={5}
                    defaultInterval={2000}
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
