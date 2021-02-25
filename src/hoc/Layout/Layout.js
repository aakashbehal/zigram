import React, { Component } from 'react';

import style from './Layout.module.css'

class Layout extends Component {

    render() {
        return (
            <div >
                <header style={{
                    background: "darkcyan",
                    padding: '20px',
                    textAlign: "center",
                    fontFamily: "monospace",
                    fontWeight: 800,
                    fontSize: '20px'
                }}>Cocktails</header>
                <main className={style.layout} style={{marginTop:'20px', contentVisibility: 'auto'}}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout