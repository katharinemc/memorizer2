import React from 'react';


export default function FormFields(props) {



    return (
        <form>
        <label for="InputText">Add a passage</label>
        <input type="text" onChange={(event) => props.onChange(event.target.value)} id="InputText" />
        </form>
    );

}