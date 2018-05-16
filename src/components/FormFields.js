
import React from 'react';
import PassageButton from  './PassageButton'
import './FormFields.css'
export default function FormFields(props) {

    return (
        <form>
        <input type="text" onChange={(e) => props.inputMethod(e.target.value)} id="InputText" />
        <PassageButton className="submit" onClick={props.onButtonClick} />

        </form>
    );

}