import React, { Component } from 'react';
import axios from 'axios';

import SingleCocktail from '../SingleCocktail/SingleCocktail';

class CocktailList extends Component{

    state = {
        loadCocktails: true,
        cocktailList: []
    }

    componentDidMount() {
        console.log('[cocktailslist]')
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${this.props.type}`)
            .then(response => {
                console.log(response)
                this.setState({loadCocktails: false, cocktailList: response.data.drinks})
            })
    }

    render() {
        let cockTailList = <p>Loading...</p>
        if(!this.state.loadCocktails) {
            cockTailList = this.state.cocktailList.map((cocktail) => {
                return <SingleCocktail name={cocktail.strDrink} key={cocktail.idDrink} image={cocktail.strDrinkThumb}/>
            })
        }
        return (
            <div>
               <p>{this.props.type} Beverage</p>
               {cockTailList}
            </div>
        )
    }
}

export default CocktailList