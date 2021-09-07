import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from '../Section';
import Phonebook from '../Phonebook';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Container from '../Container';

class App extends React.Component {
  state = {
    filter: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  filterContacts = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  formSubmithanler = data => {
    data.id = uuidv4();
    const a = this.state.contacts.filter(contact => contact.name === data.name);

    if (a.length === 1) {
      alert(`${data.name} is alredy in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  visibleContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
    );
  };

  componentDidMount = () => {
    console.log(`component did mount`);
    const storage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storage);
    console.log(`array of objects`, parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log(`prevstate`, prevState);
    console.log(`state`, this.state.contacts);
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
      console.log(`change`);
    }
    // console.log(`prevprops`, prevProps)
  };
  render() {
    const { filter } = this.state;
    const visibleContact = this.visibleContact();

    return (
      <Container>
        <Section title="Phonebook">
          <Phonebook onSubmit={this.formSubmithanler} />
        </Section>

        <Section title="Contacts">
          <Filter onChange={this.filterContacts} filter={filter}></Filter>
          <ContactList
            contacts={visibleContact}
            onDelete={this.deleteContact}
          ></ContactList>
        </Section>
      </Container>
    );
  }
}

export default App;
