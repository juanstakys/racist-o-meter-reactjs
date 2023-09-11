import React from "react";

const Indicator = (props) => {
    return(
        <p>{props.isItRacist ? "RACIST!" : "NOT RACIST!"}</p>
    )
};
export default Indicator;