import React from 'react';


export default function DisplayText(props) {
    return (
        <div className="DisplayText">
        <span>Read Aloud</span>
        <p>{props.print} </p>
       </div>
    );
}