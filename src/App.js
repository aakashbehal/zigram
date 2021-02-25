import React, { Component } from 'react';
import Cocktails from './containers/Cocktails/Cocktails';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
            <Cocktails />
          </Layout>
      </div>
    )
  }
}

export default App;
