import React from "react";


function StopButton({ onStop }) {
    const handleStop = () => {
        onStop(); 
    };

    return (
        <button className="btn btn-danger" onClick={handleStop}>Stop</button>
    );
}

function ResumeButton({ onResume }) {
    const handleResume = () => {
        onResume(); 
    };

    return (
        <button className="btn btn-success" onClick={handleResume}>Resume / Start</button>
    );
}

function ResetButton({ onReset }) {
    const handleReset = () => {
        onReset(); 
    };

    return (
        <button className="btn btn-warning" onClick={handleReset}>Reset</button>
    );
}


export { StopButton, ResumeButton, ResetButton };