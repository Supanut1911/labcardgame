import React, { Component } from 'react';
import logo from './logo.svg';

import CharacterCard from './CharacterCard';

import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false
    }
   }
export default class WordCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
   
        }
    }
    componentWillMount(){
        let data = prepareStateFromWord(this.props.value);
    this.setState({
      word: data.word,
      chars: data.chars,
      attempt: data.attempt,
      guess: data.guess,
      completed: data.completed,
    })

    }
    

    activationHandler = c => { console.log(`${c} has been activated.`) }

    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
   
        this.setState({
          guess
        })
   
        if(guess.length === this.state.chars.length){
          if(this.state.word.match(guess.join('').toString())){
            this.setState({
              guess: [],
              completed: true
            })
          }else{
            this.setState({
              guess: [],
              attempt: this.state.attempt + 1})
        }
     }
   }
   

    render() {
        console.log(this.state);
        return (
            <div>
                <center><div>find your name</div></center>
                <center><div>
                {Array.from(this.props.value).map((c, i) => <CharacterCard value={c} key={i} attempt={this.state.attempt}
                activationHandler={this.activationHandler}/>
                )}
                </div></center>
            </div>
        );
    }
}
