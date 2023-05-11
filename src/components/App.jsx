import { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = newContact => {
    console.log(newContact);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    console.log(this.state.contacts);
    return (
      <Layout>
        <Section title="Phonebook">
          <AddContactForm onSave={this.addContact} initialValues={this.state} />
        </Section>
        <Section title="Contacts">
          <Contacts contacts={this.state.contacts} />
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
