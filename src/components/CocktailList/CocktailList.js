import React, { Component } from 'react';
import axios from 'axios';

import SingleCocktail from '../SingleCocktail/SingleCocktail';
import Sorting from '../Sorting/Sorting';

class CocktailList extends Component{

    state = {
        loadCocktails: true,
        cocktailList: []
    }

    compare = (a, b) => {
        if ( a.strDrink < b.strDrink ){
            return this.props.sort === 'asc' ? -1 : 1;
          }
          if ( a.strDrink > b.strDrink ){
            return this.props.sort === 'asc' ? 1 : -1;
          }
          return 0;
    }

    sortDrinks = () => {
        const drinks = [...this.state.cocktailList]
        const drinksSorted = drinks.sort(this.compare)
        this.setState({cocktailList: drinksSorted})
    }

    getCocktails = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${this.props.type}`)
            .then(response => {
                const drinks = response.data.drinks.sort(this.compare)
                this.setState({loadCocktails: false, cocktailList: drinks })
            })
        }

    componentDidUpdate(prevProps) {
        if (this.props.sort !== prevProps.sort) {
            this.sortDrinks()
            return true
        }
        if(this.props.type === prevProps.type){
            return false
        } 
        this.getCocktails()
        return true
    }


    render() {
        let cockTailList = <p>Please select a filter</p>
        let headerType = null
        let sort = null
        if(!this.state.loadCocktails) {
            sort = <Sorting change={(e) => this.props.sortChange(e)}/>
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
                {sort}
                {headerType}
                {cockTailList}
            </div>
        )
    }
}

export default CocktailList