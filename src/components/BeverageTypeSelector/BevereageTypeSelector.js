import React, { Component } from 'react';
import axios from 'axios';


import Aux from '../../hoc/ReactAux/ReactAux'
import CocktailList from '../CocktailList/CocktailList';
import style from './BeverageTypeSelector.module.css'

class BeverageTypeSelector extends Component {

    state = {
        categories: [],
        alcoholic: [],
        ingredients: [],
        selectedFilter: 'a=Alcoholic',
        name: 'Alcoholic',
        sorting: 'asc'
    }


    loadFiltersHandler = (key, type) => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?${key}=list`)
            .then((response) => {
                this.setState({ [type]: response.data.drinks })
            })
    }

    async componentDidMount() {
        const arrayOfFilters = [{ "a": "alcoholic" }, { "c": "categories" }, { "i": "ingredients" }]
        for (let index = 0; index < arrayOfFilters.length; index++) {
            let key = Object.keys(arrayOfFilters[index])[0]
            await this.loadFiltersHandler(key, arrayOfFilters[index][key])
        }
    }

    onChangeHandler = (event, type) => {
        const targetSelector = `${type}=${event.target.value}`
        this.setState({ selectedFilter: targetSelector, name: event.target.value })
    }

    sortHandler = (event) => {
        const target = event.target.value
        this.setState({ sorting: target })
    }

    render() {
        const categories = this.state.categories.map((cat) => {
            return (
                <option key={cat.strCategory} value={cat.strCategory}>{cat.strCategory}</option>
            )
        })

        const alcoholic = this.state.alcoholic.map((cat) => {
            return (
                <option key={cat.strAlcoholic} value={cat.strAlcoholic}>{cat.strAlcoholic}</option>
            )
        })

        const ingredients = this.state.ingredients.map((cat) => {
            return (
                <option key={cat.strIngredient1} value={cat.strIngredient1}>{cat.strIngredient1}</option>
            )
        })

        return (
            <Aux>
                <div className={style.BeverageTypeSelector}>
                    <p><strong>Filters</strong></p>
                    <div className={style.filterContainer}>
                        <div>
                            <label for="categories">Categories</label>
                            <select onChange={(e) => this.onChangeHandler(e, 'c')} name="categories">{categories}</select>
                        </div>
                        <div>
                            <label for="alcoholic">Alcoholic</label>
                            <select onChange={(e) => this.onChangeHandler(e, 'a')} name="alcoholic">{alcoholic}</select>
                        </div>
                        <div>
                            <label for="ingredients">Ingredients</label>
                            <select onChange={(e) => this.onChangeHandler(e, 'i')} name="ingredients">{ingredients}</select>
                        </div>
                    </div>
                    <CocktailList type={this.state.selectedFilter} name={this.state.name} sort={this.state.sorting} sortChange={this.sortHandler} />
                </div>
            </Aux>
        )
    }
}

export default BeverageTypeSelector;