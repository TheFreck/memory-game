import React from "react";
import {Card} from "react-materialize";
import "./Score.css";

const Score = props => {

    return (
        <Card id="ScoreCard" className='blue-grey darken-1' textClassName='white-text'>
            <h2 id="score">
                Score: {props.state.score}
            </h2>
        </Card>
    );
};

export default Score;