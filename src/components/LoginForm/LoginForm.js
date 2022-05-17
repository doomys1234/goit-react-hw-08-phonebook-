import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import operations from 'redux/auth/authOperations';
import s from './LoginForm.module.scss';
import { toast } from 'react-toastify';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getStatus);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts', { replace: true });
    }
  }, [isLoggedIn]);

  const handleChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(operations.logIn({ email, password }));
    if (isLoggedIn) {
      toast.success('You successfully logged in');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            className={s.input}
            onChange={handleChange}
            type={email}
            name="email"
            autoFocus
            value={email}
          ></input>
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            onChange={handleChange}
            type={password}
            name="password"
            autoFocus
            value={password}
          ></input>
        </label>
        <button className={s.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
