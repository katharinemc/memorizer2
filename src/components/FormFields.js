import React from 'react';
import PassageButton from  './PassageButton'

export default function FormFields(props) {

console.log('heythere', props.onChange)
    return (
        <form>
        <label for="InputText">Add a passage</label>
        <input type="text"  id="InputText" />
        <PassageButton handlerMethod={props.handlerMethod} />
        </form>
    );

}