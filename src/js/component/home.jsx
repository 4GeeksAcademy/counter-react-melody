import React from "react";
import SimpleCounter from "./SimpleCounter.jsx";
import calculateSeconds from './calculateseconds';
import { useState, useEffect } from "react";
import { StopButton, ResumeButton, ResetButton } from "./Buttons.jsx";


//create your first component
const Home = () => {
	
    const [counter, setCounter] = useState(0);
    const [countingUp, setCountingUp] = useState(true);
    const [startNumber, setStartNumber] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                if (countingUp) {
                    setCounter(prevCounter => prevCounter + 1);
                } else {
                    if (counter > 0) {
                        setCounter(prevCounter => prevCounter - 1);
                    }
                }
            }, 1000);
        }

        if (counter === 0 && !countingUp && startNumber !== 0) {
            alert("Time's up!");
        }

        return () => clearInterval(interval);
    }, [counter, countingUp, isRunning]);

    const toggleCountingDirection = () => {
        setCountingUp(prevCountingUp => !prevCountingUp);
    };

    const handleInputChange = (event) => {
        setStartNumber(Number(event.target.value)); 
    };

    const startCountdown = () => {
        setCounter(startNumber); 
        setCountingUp(false); 
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleResume = () => {
        setIsRunning(true);
    };

    const handleReset = () => {
        setCounter(0);
        setCountingUp(true);
        setIsRunning(false);
    };


	return (
		
		<SimpleCounter
                hundredThousandsDigit = {calculateSeconds(counter, 100000)}
                tenThousandsDigit = {calculateSeconds(counter, 10000)}
                thousandsDigit = {calculateSeconds(counter, 1000)}
                hundredsDigit = {calculateSeconds(counter, 100)}
                tensDigit = {calculateSeconds(counter, 10)}
                onesDigit = {calculateSeconds(counter, 1)}
            />
			
	);
};

export default Home;
