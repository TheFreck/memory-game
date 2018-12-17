import React from "react";
import {Card, CardTitle} from "react-materialize";
import "./Score.css";

const Score = props => {

    return (
        <Card 
            horizontal header={
                <CardTitle 
                    image="images/logo.png"
                    className="scoreCard"
                >
                </CardTitle>
            } 
        >
            <h2>Score: {props.state.score}</h2>
        </Card>
    );
};

export default Score;