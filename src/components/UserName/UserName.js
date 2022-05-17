import LoginForm from '../LoginForm/LoginForm';
import Title from 'components/Title/Title';

export default function UserName() {
  return (
    <>
      <Title text={'Login to Phonebook'} />
      <LoginForm />
    </>
  );
}
