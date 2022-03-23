import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";

interface CounterProps {
    callback?: () => void;
    initialTime?: number;
}

function Counter(props: CounterProps) {
    const { callback, initialTime = 60 } = props
    const [count, setCount] = useState(initialTime)

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (count > 0) {
                setCount(count - 1)
            } else if (count === 0 && callback !== undefined) {
                callback()
            }
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [count])

    return (
        <Box>
            counter: {count}
        </Box>
    );
}

export default Counter;