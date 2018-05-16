import React from 'react';


export default function PassageButton(props) {

    return (
  
        <button onClick={(e) => props.onClick(e)}>Add Text</button>
    );

}