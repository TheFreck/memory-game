import React from "react";
import {Card} from "react-materialize";
import "./Menu.css";

const Menu = props => {
    function playAgain() {
        props.callback(props.name);
    }
    console.log("props: ", props)
    return (
        <div className="menu">
            <Card className="menuCard">
                <section>
                    <p>Your score was: {props.state.score}</p>
                    <button onClick={playAgain}>Play Again</button>
                </section>
            </Card>
        </div>
    );
};

export default Menu;