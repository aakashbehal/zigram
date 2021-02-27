import React from 'react';
import Aux from '../../hoc/ReactAux/ReactAux';

const sorting = (props) => (
    <Aux>
        <p><p><strong>Sorting</strong></p></p>
        <select style={{minWidth: '65px'}} onChange={(e) => props.change(e)}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>
    </Aux> 
)

export default sorting 