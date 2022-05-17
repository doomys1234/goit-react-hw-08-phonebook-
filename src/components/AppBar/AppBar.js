import { useSelector, useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperations';
import { NavLink } from 'react-router-dom';
import { getUsername, getStatus } from '../../redux/auth/authSelectors';
import s from './AppBar.module.scss';
export default function AppBar() {
  const username = useSelector(getUsername);
  const isLoggedIn = useSelector(getStatus);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(operations.logOut());
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <h1 className={s.title}>PhoneBook</h1>
        <NavLink
          end
          to="/"
          className={({ isActive }) =>
            isActive ? `${s.active_link}` : `${s.link}`
          }
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            end
            to="/contacts"
            className={({ isActive }) =>
              isActive ? `${s.active_link}` : `${s.link}`
            }
          >
            Contacts
          </NavLink>
        )}
      </div>

      <div className={s.user}>
        {isLoggedIn ? (
          <p className={s.welcome}>Welcome, {username}</p>
        ) : (
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? `${s.active_link}` : `${s.link}`
            }
          >
            Sign in
          </NavLink>
        )}

        {isLoggedIn ? (
          <NavLink
            to="/"
            onClick={handleLogOut}
            className={({ isActive }) =>
              isActive ? `${s.active_link}` : `${s.link}`
            }
          >
            Log out
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${s.active_link}` : `${s.link}`
            }
          >
            Log in
          </NavLink>
        )}
      </div>
    </div>
  );
}
