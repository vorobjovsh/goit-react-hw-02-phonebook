import React, { Component } from 'react';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: []
  }

  addName = ({name, number}) => {
    const user = {
      id: shortid.generate(),
      name,
      number
    };

    this.setState(({ contacts }) => ({
      contacts: [user, ...contacts],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
       <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addName} />

          <h2>Contacts</h2>
          <ContactList contacts={contacts} />
       </div>
    );
  }
}

export default App;

