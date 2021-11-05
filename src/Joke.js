import React from 'react';

function Joke(props) {
    return (
        <div>
            {/* <h2 style={{ display: props.question ? "block" : "none" }}>Question: {props.question}</h2> */}
            <h2 style={{ display: !props.question && "none" }}>Question: {props.question}</h2>
            <h3 style={{ color: !props.question && "#888888" }}>Answer: {props.punchLine}</h3>
            <hr />
        </div>
    );
}

export default Joke;