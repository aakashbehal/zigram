import React, { Component } from 'react';


import Aux from '../../hoc/ReactAux/ReactAux';
import BeverageTypeSelector from '../../components/BeverageTypeSelector/BevereageTypeSelector'
import CocktailList from '../../components/CocktailList/CocktailList'


class Cocktails extends Component {
    state = {
        beverageTypeSelected: null,
        selectedBeverageType: null
    }

    selectBeveragehandler = (event) => {
        this.setState({
            beverageTypeSelected: this.state.beverageTypeSelected ? true : !this.state.beverageTypeSelected,
            selectedBeverageType: event.target.dataset.type
        })
    }

    render() {
        let beverage = null
        if (this.state.beverageTypeSelected) {
            beverage = <CocktailList type={this.state.selectedBeverageType}/>
        }
        return (
            <Aux>
                <BeverageTypeSelector clicked={this.selectBeveragehandler}/>
                {beverage}
            </Aux>
        )
    }
}

export default Cocktails