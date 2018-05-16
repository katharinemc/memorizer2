import React from 'react';
import DisplayText from './displayText'
import AdvanceButton from './AdvanceButton'
import './results.css'
export default function Results(props) {

if(props.displayPassage !== '' && props.displayPassage !== undefined){
    console.log(props.displayPassage)
    return (  
        <section >
        <DisplayText  print={props.displayPassage} />
        <div className="center">
        <AdvanceButton onClick={() => props.onClick() }/>
        </div>
        </section>
    );
} else {
    return null
}
    

}