import React, {Component} from 'react'

// Utilizando componentização por classes
export default class ClassComponent extends Component{
    render(){
        return (
            <h1>{this.props.value}</h1>
        )
    }
}