import React from "react";
import { Card } from '@mui/material';

const Indicator = (props) => {
    return (
        <Card sx={{
            bgcolor: '#ffffff44',
            borderRadius: 2,
            width: 300,
            position: 'relative',
            justifyContent: 'center'
          }}>
            <p style={{fontSize: 24}}>
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
        </Card>
    )
};
export default Indicator;