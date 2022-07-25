// Ingredient is a child of Ingredient List
// receives the props of an individual ingredient -> color and name
import React, { Component } from 'react'

export default class Ingredient extends Component {
    render () {
        const { name, color } = this.props.ingredient
        // console.log('name in each ingredient', name)
        // console.log('color in each ingredient', color)
        return (
            <p 
                style={{backgroundColor: color}}
                id={this.props.itemKey}
                onClick={this.props.clickFunc}
            >
                {name}
            </p>
        )
    }
}