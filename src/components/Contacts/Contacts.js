import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.scss';
import ContactListItem from './ContactsListItem';
export default function Contacts({ contacts }) {
  return (
    <>
      <ul className={s.contacts}>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
}

Contacts.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
