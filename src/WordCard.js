import React, { Component } from 'react';
import logo from './logo.svg';

import CharacterCard from './CharacterCard';



export default class WordCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            attemp: '',
        }
    }


    activationHandler = c => { console.log(`${c} has been activated.`) }



    render() {
        return (
            <div>
                {Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} attempt={this.state.attempt}
                activationHandler={this.activationHandler}/>
                )}
            </div>
        );
    }
}
