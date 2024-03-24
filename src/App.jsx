import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { nanoid } from 'nanoid';

function App() {
  const STORAGE_KEY = 'listOfContact';
  const initialContactList=JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];
  const [contactsList, setContactsList] = useState(initialContactList);
  const [filter, setFilter] = useState('');
  const onChangefilter = (event) => { setFilter(event.target.value) };
  const filteredContactList = contactsList.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  const onAddContact = (formData) => {
    const contactToAdd = { ...formData, id: nanoid() };
    setContactsList((prevState) => [...prevState, contactToAdd]);
  };
  const onDeleteContact = (contactId) => {
    setContactsList((prevState) => prevState.filter(contact => contact.id !== contactId));
  };
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(contactsList)) });
  return (
    <>
      <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact}/>
      <SearchBox inputValue={filter} handleChange={onChangefilter} />
      <ContactList listOfcontacts={filteredContactList} onDeleteContact={onDeleteContact}  />
    </div>
      
    </>
  )
}

export default App












































































