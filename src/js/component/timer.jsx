import React from 'react';
import PropTypes from 'prop-types';

const Timer = (props) => {

    return (
        <div className="app d-flex justify-content-center">
            <div className="icon box"><i className="far fa-clock"></i></div>
            <div className="counter box">{props.hunThousand}</div>
            <div className="counter box">{props.tenThousand}</div>
            <div className="counter box">{props.thousand}</div>
            <div className="counter box">{props.hundred}</div>
            <div className="counter box">{props.ten}</div>
            <div className="counter box">{props.unit}</div>
        </div>
    );

};

Timer.propTypes = {
    unit: PropTypes.number,
    ten: PropTypes.number,
    hundred: PropTypes.number,
    thousand: PropTypes.number,
    tenThousand: PropTypes.number,
    hunThousand: PropTypes.number,
}

/* let counter = 0;

setInterval(function(){
    const hunThousand = Math.floor(counter/1000000);
    const tenThousand = Math.floor(counter/10000);
    const thousand = Math.floor(counter/1000);
    const hundred = Math.floor(counter/100);
    const ten = Math.floor(counter/10);
    const unit = Math.floor(counter/1);
    console.log(hunThousand, tenThousand, thousand, hundred, ten, unit)
    counter ++;
},
1000);
 */
export default Timer
