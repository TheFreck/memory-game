import React from "react";
import {Card} from "react-materialize";
import "./Tile.css";

const Tile = props => {
    function turnRed() {
        props.callback(props.name);
    }

    return (
        <button onClick={turnRed}>
            <Card 
                id="tileCard" 
                className='blue-grey darken-1' 
                textClassName='white-text'
                >
                <div>
                    <img 
                        src={props.name} 
                        className="eyeBall" 
                        alt="an eye ball"
                    />
                </div>
            </Card>
        </button>
    );
};

export default Tile;