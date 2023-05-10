import { Component } from 'react';
import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Layout>
        <Section title="Phonebook">
          <Form />
        </Section>
        <Section title="Contacts">
          <Contacts />
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
