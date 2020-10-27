import React, { Component } from "react";
import axios from 'axios';

export default class MyComponent extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
     const endPointUrl = "https://jsonplaceholder.typicode.com/users";
    axios.get(endPointUrl).then(
      result => {
        this.setState({
          isLoaded: true,
          items: result.data
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.username}>
              {item.username}: {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}