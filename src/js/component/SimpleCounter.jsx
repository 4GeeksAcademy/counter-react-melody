import React from "react";
import { PropTypes } from "prop-types";

function SimpleCounter(props) {

    return (
        <>
        <div className="app d-flex justify-content-center">
            <div className="icon box"><i className="far fa-clock"></i></div>
            <div className="counter box">{props.hundredThousandsDigit}</div>
            <div className="counter box">{props.tenThousandsDigit}</div>            
            <div className="counter box">{props.thousandsDigit}</div>
            <div className="counter box">{props.hundredsDigit}</div>
            <div className="counter box">{props.tensDigit}</div>
            <div className="counter box">{props.onesDigit}</div>
        </div>
        </>
    )
}

SimpleCounter.propTypes = {
    hundredThousandsDigit : PropTypes.number,
    tenThousandsDigit : PropTypes.number,
    thousandsDigit : PropTypes.number,
    hundredsDigit : PropTypes.number,
    tensDigit : PropTypes.number,
    onesDigit : PropTypes.number
}


export default SimpleCounter