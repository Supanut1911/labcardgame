
import React, { Component } from 'react';
import logo from './logo.svg';

export default class CharacterCard extends Component {
    render() {
        return (
            <div className = 'card'>{this.props.value}</div>
        )
    }
}