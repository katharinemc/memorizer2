import React from 'react';
import './displaytext.css'

export default function DisplayText(props) {
    return (
        <div className="DisplayText results">
        <p>{props.print} </p>
       </div>
    );
}