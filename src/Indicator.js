import React from "react";

const Indicator = (props) => {
    if (props.isItRacist) {
        return (
            <p>RACIST!</p>
        )
    } else {
        return (
            <p>NOT RACIST!</p>
        )
    }
};
export default Indicator;