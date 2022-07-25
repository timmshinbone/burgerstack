// this is where the burger happens
import React, { Component } from 'react'
// burger pane needs to display ingredient components, similarly to how ingredientlist does
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
    // burger pane will eventually get props(ingredients), and should loop and display those similar to the ingredientList
    // the difference will be the clear button

    render () {
        let burgerBits = this.props.ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient 
                    itemKey={i} 
                    ingredient={ing} 
                    clickFunc={this.props.remove}
                />
            </li>
        ))
        return (
            <section className='pane'>
                <h3>Burger Pane</h3>
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}