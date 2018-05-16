
import React from 'react';
import PassageButton from  './PassageButton'

export default function FormFields(props) {

    return (
        <form>
        <label for="InputText">Add a passage</label>
        <input type="text" onChange={(e) => props.inputMethod(e.target.value)} id="InputText" />
        <PassageButton onClick={props.onButtonClick} />

        </form>
    );

}