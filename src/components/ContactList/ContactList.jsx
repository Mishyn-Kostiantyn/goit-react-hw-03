import React from 'react'
import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
function ContactList({ listOfcontacts, onDeleteContact }) {
  return (
    <div className={css.contactListContainer}>{listOfcontacts.map((contactData) => (<Contact key={contactData.id} contactData={contactData} handleDeleteButton={onDeleteContact} /> ))}</div>
  )
}

export default ContactList