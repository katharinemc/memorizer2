import React from 'react';
import FormFields from './FormFields'
import DisplayText from './displayText'
import AdvanceButton from './AdvanceButton'

export default class UserContent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
passage: 'A long, long time ago, I can still remember..',
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

this.setState({

    passageArray: this.state.passage.split(" "),
    displayPassage: this.state.passageArray[0]
})

}

advanceClick() {
 console.log('button button')
this.setState({
    indexPosition: this.state.indexPosition+1,
    displayPassage: this.state.displayPassage + " " + this.state.passageArray[this.state.indexPosition+1]

})
}


    render () {

        return (

            <div>
    <FormFields passage={this.state.passage} inputMethod={(passage)=>this.getPassage(passage)} onAdvanceClick={(e)=>this.advanceClick()} onButtonClick={this.setPassage.bind(this)}/>
    <DisplayText print={this.state.displayPassage}/>
    <AdvanceButton onClick={(e) => this.advanceClick(e)}/>
    </div>
        );
    }
 
}