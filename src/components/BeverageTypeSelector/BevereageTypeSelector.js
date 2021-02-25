import React from 'react';

import Aux from '../../hoc/Aux/Aux'

const beverageTypeSelector = (props) => {
    return (
        <Aux>
            <p>
                Please Select a beverage Type
            </p>
            <div>
                <div onClick={props.clicked} data-type='Alcoholic'>Alcoholic</div>
                <div onClick={props.clicked} data-type='Non_Alcoholic'>Non-Alcoholic</div>
            </div>
        </Aux>
    )
}

export default beverageTypeSelector;