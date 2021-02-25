import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash'

import SingleCocktail from '../SingleCocktail/SingleCocktail';

class CocktailList extends Component{

    state = {
        loadCocktails: true,
        cocktailList: []
    }

    getCocktails = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${this.props.type}`)
            .then(response => {
                this.setState({loadCocktails: false, cocktailList:  response.data.drinks})
            })
        }

    componentDidUpdate(prevProps) {
        if(this.props.type === prevProps.type){
            return false
        }
        this.getCocktails()
        return true
    }

    render() {
        let cockTailList = <p>Please select a filter</p>
        let headerType = null
        let sorting = null
        if(!this.state.loadCocktails) {
            sorting = <p>Sorting</p>
            headerType = <p><strong> Beverage</strong> {this.props.name}</p>
            cockTailList = this.state.cocktailList.map((cocktail) => {
                return <SingleCocktail 
                            name={cocktail.strDrink} 
                            key={cocktail.idDrink} 
                            image={cocktail.strDrinkThumb}/>
            })
        }
        return (
            <div>
                {sorting}
                {headerType}
                {cockTailList}
            </div>
        )
    }
}

export default CocktailList