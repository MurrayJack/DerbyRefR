import React, { Component } from 'react';
import './App.css';
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://derby-ref-calendar.herokuapp.com/v1alpha1/graphql"
});

class App extends Component {
  state = { Games: [] }

  componentWillMount() {
    client
      .query({
        query: gql`
        {
          game {
            Name
          }
        }
        `
      })
      .then(result => 
        this.setState({ Games: result.data.game })  );
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.Games.length}
        </header>
      </div>
    );
  }
}

export default App;
