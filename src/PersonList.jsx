import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    const apiUrl = "https://uhgazure.sharepoint.com/sites/OptumCommercial/raghav/_api/web/lists/getbytitle('Triple-S')/items";
    axios.get(apiUrl)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
        <React.Fragment>
            <h1>Person Details</h1>
            <ul>
                { this.state.persons.map(person => <li>{person.name} {person.address.street}</li>)}
            </ul>
      </React.Fragment>
    )
  }
}