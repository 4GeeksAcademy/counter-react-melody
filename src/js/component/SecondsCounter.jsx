import React from "react";
import { PropTypes } from "prop-types";

function SecondsCounter(props) {

    return (
        <>
        <div className="app d-flex justify-content-center">
            <div className="icon box"><i className="far fa-clock"></i></div>
            <div className="counter box">{props.hundredThousands}</div>
            <div className="counter box">{props.tenThousands}</div>            
            <div className="counter box">{props.thousands}</div>
            <div className="counter box">{props.hundreds}</div>
            <div className="counter box">{props.tens}</div>
            <div className="counter box">{props.units}</div>
        </div>
        </>
    )
}

SecondsCounter.propTypes = {
    hundredThousands : PropTypes.number,
    tenThousands : PropTypes.number,
    thousands : PropTypes.number,
    hundreds : PropTypes.number,
    tens : PropTypes.number,
    units : PropTypes.number
}


export default SecondsCounter