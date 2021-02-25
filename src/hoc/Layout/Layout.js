import React, { Component } from 'react';

import Aux from '../Aux/Aux';

class Layout extends Component {

    render() {
        return (
            <Aux>
                <header>Cocktails</header>
                <main style={{marginTop:'20px', contentVisibility: 'auto'}}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout