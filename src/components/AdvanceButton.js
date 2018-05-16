import React from 'react';AdvanceButton


export default function AdvanceButton(props) {


    return (
  
        <button onClick={(e) => props.onClick(e)}>Next</button>
    );

}