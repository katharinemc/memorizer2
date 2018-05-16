import React from 'react';
import FormFields from './FormFields'
import DisplayText from './displayText'

export default class UserContent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
passage: 'A long, long time ago, I can still remember..',
displayPassage: 'A long, long time ago, I can still remember..'
        }
    }

getPassage(passage) {
    this.setState({
        passage
    })
}

setPassage(e, passage) {
e.preventDefault();
console.log('button pressed', passage, this)

this.setState({
    displayPassage: this.state.passage
})
}

    render () {

        return (

            <div>
    <FormFields passage={this.state.passage} inputMethod={(passage)=>this.getPassage(passage)} buttonMethod={this.setPassage.bind(this)}/>
    <DisplayText print={this.state.displayPassage}/>
    </div>
        );
    }
 
}