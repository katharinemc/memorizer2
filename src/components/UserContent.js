import React from 'react';
import FormFields from './FormFields'
import DisplayText from './displayText'

export default class UserContent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
passage: 'A long, long time ago, I can still remember..',
displayPassage: 'A long, long time ago, I can still remember..',
passageArray: [],
cumulativePassage:''
        }
    }

getPassage(passage) {
    this.setState({
        passage,
 
    })
}

setPassage(e, passage) {
e.preventDefault();
console.log('button pressed', passage, this)

this.setState({
    displayPassage: this.state.passage,
    passageArray: this.state.passage.split(" ")
})
}

    render () {

        return (

            <div>
    <FormFields passage={this.state.passage} inputMethod={(passage)=>this.getPassage(passage)} onButtonClick={this.setPassage.bind(this)}/>
    <DisplayText print={this.state.passageArray[0]}/>
    </div>
        );
    }
 
}