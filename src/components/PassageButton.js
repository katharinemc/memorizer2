import React from 'react';


export default function PassageButton(props) {

console.log(props)
    return (
        
        <button onClick={(value) => props.handlerMethod(value)}>Add Text</button>
    );

}