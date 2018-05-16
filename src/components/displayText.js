import React from 'react';


export default function DisplayText(props) {
    return (
        <form>
        <label for="DisplayText">Read Aloud</label>
        <output type="text" id="DisplayText" />
        </form>
    );
}