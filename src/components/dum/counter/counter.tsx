import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";

interface CounterProps {
    onFinishCount?: () => void;
    onChangeCount?: (count: number) => void;
    onStartCount?: (count: number) => void;
    defaultInterval?: number;
    initialCount?: number;
    showText?: boolean;
    reset?: boolean;
}

function Counter(props: CounterProps) {
    const {
        onFinishCount,
        onChangeCount,
        initialCount = 60,
        onStartCount,
        defaultInterval = 1000,
        showText = true,
        reset = false
    } = props
    const [count, setCount] = useState(initialCount)

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (count === initialCount) {
                setCount(count - 1)

                if (onStartCount !== undefined) {
                    onStartCount(count)
                }
            } else if (count > 0) {
                setCount(count - 1)

                if (onChangeCount !== undefined) {
                    onChangeCount(count)
                }
            } else if (count <= 0) {
                if (onFinishCount !== undefined) {
                    onFinishCount()
                }

                if (reset) {
                    setCount(initialCount)
                }
            }
        }, defaultInterval)

        return () => {
            clearTimeout(timerId)
        }
    }, [count])

    return (
        showText ?
            <Box>
                counter: {count}
            </Box>
            : null

    );
}

export default Counter;