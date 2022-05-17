import { useDeleteContactsMutation } from 'redux/apiSlice';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.scss';

export default function ContactListItem({ id, name, number }) {
  const [deleteItem, { isLoading: isDeleting }] = useDeleteContactsMutation();

  return (
    <>
      <li className={s.item}>
        {name}:<span className={s.span}>{number}</span>
        <button
          type="button"
          className={s.button}
          onClick={() => deleteItem(id)}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting' : 'Delete'}
        </button>
      </li>
    </>
  );
}

ContactListItem.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
