import React, { Component } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

// burger stacker component is the parent of BurgerPane and IngredientList
// holds ingredients in state, so we can pass them as props

export default class BurgerStacker extends Component {
    // state will hold ingredients
    constructor () {
        super ()
        this.state = {
            ingredients: [
                {name: 'Kaiser Bun', color: 'saddlebrown'},
                {name: 'Sesame Bun', color: 'sandybrown'},
                {name: 'Gluten Free Bun', color: 'peru'},
                {name: 'Lettuce Wrap', color: 'olivedrab'},
                {name: 'Beef Patty', color: '#3F250B'},
                {name: 'Soy Patty', color: '#3F250B'},
                {name: 'Black Bean Patty', color: '#3F250B'},
                {name: 'Chicken Patty', color: 'burlywood'},
                {name: 'Lettuce', color: 'lawngreen'},
                {name: 'Tomato', color: 'tomato'},
                {name: 'Bacon', color: 'maroon'},
                {name: 'Onion', color: 'lightyellow'},
                {name: 'Cheese', color: 'gold'}
            ],
            burgerIngredients: []
        }
    }

    // might want methods here to add ingredients, that will be passed to a child component
    addToStack = (e) => {
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText
        this.setState({
            burgerIngredients: [
                { name: ingName, color: ingColor },
                ...this.state.burgerIngredients
            ]
        })
    }

    // remove from stack will find an ingredient and get it on outta there
    removeFromStack = (e) => {
        console.log('the old stack', this.state.burgerIngredients)
        console.log('the clicked item', e.target)
        // this is the location in the array
        const clickIndex = e.target.id
        // this is a copy of the burger
        const currBurger = this.state.burgerIngredients.slice()
        console.log('the current burger', currBurger)
        // this is removing one item from the copy of the burger
        currBurger.splice(clickIndex, 1)
        console.log('the current burger after splice', currBurger)
        this.setState({
            burgerIngredients: currBurger
        })
    }

    // might want my clear function here, to pass down as a prop
    clearBurger = () => {
        this.setState({
            burgerIngredients: []
        })
    }

    render () {
        console.log('ingredients list', this.state.ingredients)
        console.log('burger ingredients', this.state.burgerIngredients)
        return (
            <>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngredientList 
                        ingredients={this.state.ingredients}
                        add={this.addToStack}
                    />
                    <BurgerPane 
                        ingredients={this.state.burgerIngredients}
                        remove={this.removeFromStack}
                        clear={this.clearBurger}
                    />
                </div>
            </>
        )
    }
}