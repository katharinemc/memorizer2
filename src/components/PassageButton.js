import React from 'react';


export default function PassageButton(props) {

console.log(props)
    return (
        
        <button onClick={(e) => props.handlerMethod(e)}>Add Text</button>
    );

}