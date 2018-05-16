import React from 'react';
import FormFields from './FormFields'
import DisplayText from './displayText'

export default class UserContent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
passage: 'A long, long time ago, I can still remember..'
        }
    }

    render () {
        return (
            <div>
    <FormFields />
    <DisplayText print={this.state.passage}/>
    </div>
        );
    }
 
}