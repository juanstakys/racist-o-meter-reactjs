import React from "react";

const Indicator = (props) => {
    return (
        <p>
            {
                props.isItRacist !== undefined ?
                    props.isItRacist ? "RACIST!" : "NOT RACIST!"
                    : "Press the button"
            }
        </p>

    )
};
export default Indicator;