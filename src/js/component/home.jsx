import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";
import calculateSeconds from './calculateseconds';
import { useState, useEffect } from "react";
import { StopButton, ResumeButton, ResetButton } from "./Buttons.jsx";


//create your first component
const Home = () => {
	
    const [counter, setCounter] = useState(0);
    const [countingUp, setCountingUp] = useState(true);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                    setCounter(prevCounter => prevCounter + 1);
                }
            , 1000);
        }

        return () => clearInterval(interval);
    }, [counter, countingUp, isRunning]);


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
		<div>
		<SecondsCounter
                hundredThousands = {calculateSeconds(counter, 100000)}
                tenThousands = {calculateSeconds(counter, 10000)}
                thousands = {calculateSeconds(counter, 1000)}
                hundreds = {calculateSeconds(counter, 100)}
                tens = {calculateSeconds(counter, 10)}
                units = {calculateSeconds(counter, 1)}
            />

        <div className="button-container">
                <ResetButton onReset={handleReset} />
                <StopButton onStop={handleStop} />
                <ResumeButton onResume={handleResume} />
            </div>  
            </div>
        
	);
};

export default Home;
