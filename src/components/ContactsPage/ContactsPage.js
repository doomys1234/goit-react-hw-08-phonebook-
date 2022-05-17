import { useGetContactsQuery, useAddContactsMutation } from 'redux/apiSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterItems } from '../../redux/contactSLice';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import { filterSelector } from '../../redux/selectors';
import authSelectors from 'redux/auth/authSelectors';
import Contacts from 'components/Contacts/Contacts';
import Phonebook from 'components/Phonebook/Phonebook';
import Filter from 'components/Filter/Filter';
import { useNavigate } from 'react-router-dom';
export default function ContactsPage() {
  const isLoggedIn = useSelector(authSelectors.getStatus)
  const { data, isLoading } = useGetContactsQuery( {selectFromResult: isLoggedIn});
  const [addItem, { isLoading: isAdding }] = useAddContactsMutation();
  const dispatch = useDispatch();
  const valueFilter = useSelector(state => filterSelector(state));
  const contacts = data;
  const navigate = useNavigate()

   useEffect(() => {
        if (!isLoggedIn) {
          navigate('/login', { replace: true })
          toast.error('Please log in to your account')
      }
    
      
   }, [isLoggedIn, navigate])
  
  

  const addContact = e => {
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    if (contacts.find(contact => contact.name === name)) {
      toast.error(`${name} is already exists`);

      return;
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    addItem(newContact);
    toast.success('Horay! Contact is added :)');
  };

  const filterChange = e => {
    dispatch(filterItems(e.currentTarget.value));
  };

  const getNormalizedContacts = contacts => {
    if (isLoading) {
      return;
    }
    const normalizedFilter = valueFilter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredItems = getNormalizedContacts(contacts);

  return (
    <>
      <Phonebook onSubmit={addContact} adding={isAdding} />
      
      {filteredItems ? (<><Filter value={valueFilter} onChange={filterChange} />
      
        <Contacts contacts={filteredItems} isLoading={isLoading} />
      </>) : (
        <h3>You have no contacts yet</h3>
      )}
    </>
  );
}
