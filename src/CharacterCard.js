
import React, { Component } from 'react';
import logo from './logo.svg';

export default class CharacterCard extends Component {
    render() {
        return (
            <div>{this.props.value}</div>
        )
    }
}