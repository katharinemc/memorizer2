import React from 'react';
import FormFields from './FormFields'
import Results from './Results'
import Intro from './Intro'
import './main.css'


export default class UserContent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
passage: '',
displayPassage:'',
passageArray: [],
indexPosition: 0,
        }
    }

getPassage(passage) {
    this.setState({
        passage,
 
    })
}

setPassage(e, passage) {
    e.preventDefault()
    console.log('whatup')

// This button needs to be double-clicked to work properly.  Why?  is setting state asynchronous?

this.setState({

    passageArray: this.state.passage.split(" "),
    displayPassage: this.state.passageArray[0]
})

}

advanceClick() {
 console.log('button button')
 if(this.state.indexPosition < this.state.passageArray.length-1){
    this.setState({
        indexPosition: this.state.indexPosition+1,
        displayPassage: this.state.displayPassage + " " + this.state.passageArray[this.state.indexPosition+1]
    })
 }

}


    render () {

        return (

<main role="main">
    <Intro />
    <FormFields passage={this.state.passage} inputMethod={(passage)=>this.getPassage(passage)} onAdvanceClick={(e)=>this.advanceClick()} onButtonClick={this.setPassage.bind(this)}/>

    <Results displayPassage={this.state.displayPassage} className="results" print={this.state.displayPassage} onClick={(e) => this.advanceClick(e)} />

    </main>
        );
    }
 
}