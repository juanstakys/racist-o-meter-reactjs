import React from "react";

const Indicator = (props) => {
    return (
        <div>
            <p>
                {
                    props.isItRacist !== undefined ?
                        props.isItRacist ? "RACIST!" : "NOT RACIST!"
                        : "Press the button"
                }
            </p>
            <p>
                <b>Explanation:</b>
                <br/>
                {props.explanation}
            </p>
        </div>
    )
};
export default Indicator;